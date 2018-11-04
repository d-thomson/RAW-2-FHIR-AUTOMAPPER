from flask import Flask, render_template, g, request, redirect, url_for, flash
from wtforms import Form, TextField, TextAreaField, validators, StringField, SubmitField
import psycopg2
import difflib
import itertools

Patient = {'indentifier':'Identifier',
                'active':'boolean',
                'name':'HumanName',
                'telecom':'ContactPoint',
                'gender':'code',
                'birthdate':'date',
                'deceased':{'deceasedBoolean':'boolean',
                            'deceasedDateTime':'dateTime'},
                'address':'Address',
                'maritalStatus':'CodeableConcept',
                'multipleBirth':{'multipleBirthBoolean':'boolean',
                                 'multipleBirthInteger':'integer'},
                'photo':'Attachment',
'contact':{'relationship':'CodeableConcept',
                           'name':'HumanName',
                           'telecom':'ContactPoint',
                           'address':'Address',
                           'gender':'code',
                           'organiztion':'Reference',
                           'period':'Period'},
                'animal':{'species':'CodeableConcept',
                          'breed':'CodeableConcept',
                          'genderStatus':'CodeableConcept'},
                'communication':{'language':'CodeableConcept',
                                 'preferred':'boolean'},
                'generalPractitioner':'Reference',
                'managingOrganization':'Reference',
                'link':{'other':'Reference',
                        'type':'code'}}

HumanName = {'use':'code',
             'text':'string',
             'family':'string',
             'given':'string',
             'prefix':'string',
             'suffix':'string',
             'period':'Period'}

ContactPoint = {'system':'code',
                'value':'string',
                'use':'code',
                'rank':'positiveInt',
                'period':'Period'}

Address = {'use':'code',
           'type':'code',
           'text':'string',
           'line':'string',
           'city':'string',
           'district':'string',
           'state':'string',
           'postalCode':'string',
           'country':'string',
           'period':'Period'}

Period = {'start':'dateTime',
          'end':'dateTime'}

app = Flask(__name__)
app.config.from_object(__name__)
app.config['SECRET_KEY'] = '7d441f27d444427567d441f2b6176a'

def get_db():
  """
  Returns the connection to the database, opening a new
  one if there is none
  """
  if not hasattr(g, 'db'):
    g.db = psycopg2.connect(dbname='flaskapp',
                            user='flaskapp_user',
                            password='flaskapp_pass',
                            host='db')
  return g.db


@app.teardown_appcontext
def close_db(error):
  """
  Closes the database connection on teardown
  """
  if hasattr(g, 'db'):
    g.db.close()


@app.route('/')
def show_info():
  # Let's show all posts from the last week, with a maximum of
  # 100 posts
  cur = get_db().cursor()
  print "Debug: Database connection established"
  cur.close()
  print "Debug: Database connection closed"
  return "Successfully established and closed DB connection!"



class ReusableForm(Form):
    url = TextField('Database Endpoint:', validators=[validators.required()])
    username = TextField('Username:', validators=[validators.required()])
    password = TextField('Password:', validators=[validators.required()])

@app.route('/map', methods=['GET','POST'])
def map():
    form = ReusableForm(request.form)
    
    print form.errors
    if request.method == 'POST':
        url = request.form['url']
        username = request.form['username']
        password = request.form['password']
        print url
        print username
        print password

        if form.validate():
            flash('Pulling database tables...')

            # Pull database column names for table
            #conn = psycopg2.connect('host=data.hdap.gatech.edu port=5433 dbname=mimic_v5 user=team0 password=hdapM1m1c4Students!')
            database_string = 'host=' + url + ' port=5433' + ' dbname=mimic_v5 user=' + username + ' password=' + password
            conn = psycopg2.connect(database_string)
            cur = conn.cursor()
            cur.execute("SELECT * FROM mimic_v5.f_person LIMIT 0")
            cur.close()
            colnames = [name[0] for name in cur.description]

            best_mappings = {}
            allFhirFields = list(itertools.chain(Patient.keys(),HumanName.keys(),ContactPoint.keys(),Address.keys(),Period.keys()))

            # Iterate through all database column names and find best match to FHIR data type
            for name in colnames:
                if len(difflib.get_close_matches(name,allFhirFields)) == 0:
                    best_mappings[name] = 'UNKNOWN'
                else:
                    best_mappings[name] = difflib.get_close_matches(name,allFhirFields,1)[0]
	     
            flash(best_mappings)

        else: 
            flash('Please fill out all fields.')

    return render_template('map.html', form=form)

if __name__ == '__main__':
  app.run(host='0.0.0.0', debug=True)
