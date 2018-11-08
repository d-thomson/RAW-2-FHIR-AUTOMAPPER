from flask import Flask, render_template, g, request, redirect, url_for, flash, session
from wtforms import Form, TextField, TextAreaField, validators, StringField, SubmitField
import psycopg2
import difflib
import itertools
from collections import defaultdict
from functools import wraps

# Import dictionaries: Patient, HumanName, ContactPoint, Address, Period, etc.
from constants import *

# Used to track changes between builds
version = 0.001

app = Flask(__name__)
app.config.from_object(__name__)
app.config['SECRET_KEY'] = '7d441f27d444427567d441f2b6176a'


""" Section: Helper functions """


def login_required(f):
    # Redirect to the login page, if not logged-in.
    @wraps(f)
    def wrap(*args, **kwargs):
        if 'logged_in' in session:
            return f(*args, **kwargs)
        else:
            return redirect(url_for('login'))
    return wrap


def test_get_db():
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


""" Section: Routes """


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        if username == "demo" and password == "password!23":
            print "DEBUG: User logged in"
            session['logged_in'] = True
            return redirect(url_for('home'))
        else:
            return render_template("login.html", error="Incorrect Credentials")
    return render_template("login.html", error="")


@app.route('/logout')
def logout():
    session.pop('logged_in', None)
    return redirect(url_for('root'))


@app.teardown_appcontext
def close_db(error):
    """
  Closes the database connection on teardown
  """
    if hasattr(g, 'db'):
        g.db.close()


@app.route('/')
def root():
    return redirect(url_for('home'))


class ReusableForm(Form):
    url = TextField('Database Endpoint:', validators=[validators.required()])
    username = TextField('Username:', validators=[validators.required()])
    password = TextField('Password:', validators=[validators.required()])
@app.route('/home', methods=['GET', 'POST'])
@login_required
def home():
    return render_template("home.html", version=version)


@app.route('/map_table', methods=['GET', 'POST'])
@login_required
def map_table():
    if request.method == 'POST':

        # If user is trying to get mapping
        if 'database_endpoint' in request.form:

            url = request.form['database_endpoint']
            username = request.form['database_username']
            password = request.form['database_password']
            print url
            print username
            print password

            flash('Pulling database tables...', 'info')

            # Pull database column names for table
            # conn = psycopg2.connect('host=data.hdap.gatech.edu port=5433 dbname=mimic_v5 user=team0 password=hdapM1m1c4Students!')
            database_string = 'host=' + url + ' port=5433' + ' dbname=mimic_v5 user=' + username + ' password=' + password
            conn = psycopg2.connect(database_string)
            cur = conn.cursor()
            cur.execute("SELECT * FROM mimic_v5.f_person LIMIT 0")
            cur.close()
            colnames = [name[0] for name in cur.description]

            best_mappings = {}
            allFhirFields = list(
                itertools.chain(Patient.keys(), HumanName.keys(), ContactPoint.keys(), Address.keys(), Period.keys()))

            # Iterate through all database column names and find best match to FHIR data type
            for name in colnames:
                if len(difflib.get_close_matches(name, allFhirFields)) == 0:
                    best_mappings[name] = 'UNKNOWN'
                else:
                    best_mappings[name] = difflib.get_close_matches(name, allFhirFields, 1)[0]

            flash(best_mappings, 'mappings')
            flash(allFhirFields, 'fhirfields')
        else:
            # Re-direct to home if the form was not sent properly
            return redirect(url_for('home'))

    return render_template("table.html")


@app.route('/map', methods=['GET', 'POST'])
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
            flash('Pulling database tables...', 'info')

            # Pull database column names for table
            # conn = psycopg2.connect('host=data.hdap.gatech.edu port=5433 dbname=mimic_v5 user=team0 password=hdapM1m1c4Students!')
            database_string = 'host=' + url + ' port=5433' + ' dbname=mimic_v5 user=' + username + ' password=' + password
            conn = psycopg2.connect(database_string)
            cur = conn.cursor()
            cur.execute("SELECT * FROM mimic_v5.f_person LIMIT 0")
            cur.close()
            colnames = [name[0] for name in cur.description]

            best_mappings = {}
            allFhirFields = list(
                itertools.chain(Patient.keys(), HumanName.keys(), ContactPoint.keys(), Address.keys(), Period.keys()))

            # Iterate through all database column names and find best match to FHIR data type
            for name in colnames:
                if len(difflib.get_close_matches(name, allFhirFields)) == 0:
                    best_mappings[name] = 'UNKNOWN'
                else:
                    best_mappings[name] = difflib.get_close_matches(name, allFhirFields, 1)[0]

            flash(best_mappings, 'mappings')
            flash(allFhirFields, 'fhirfields')

        else:
            flash('Please fill out all fields.', 'error')

    return render_template('map.html', form=form)


def get_db_schema(url, dbname, port, username, password):
    """ returns a dictionary with key:table_name value:list(col_names) for a db """

    database_string = 'host=' + url + ' port=' + port + ' dbname=' + dbname + ' user=' + username + ' password=' + password
    conn = psycopg2.connect(database_string)
    cur = conn.cursor()
    cur.execute(
        "SELECT table_name, column_name from information_schema.columns where table_name in (select tablename from pg_tables where schemaname = '" + dbname + "');")
    output = cur.fetchall()
    cur.close()

    schema_dict = defaultdict(list)
    for tablename, colname in output:
        schema_dict[tablename].append(colname)
    return schema_dict


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
