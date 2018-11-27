from flask import Flask, render_template, g, request, redirect, url_for, flash, session
from wtforms import Form, TextField, TextAreaField, validators, StringField, SubmitField
import psycopg2
import difflib
import itertools
from collections import defaultdict
from functools import wraps
from fuzzywuzzy import process

# Import dictionaries: Patient, HumanName, ContactPoint, Address, Period, etc.
from constants import *

# Used to track changes between builds
version = 0.001

app = Flask(__name__)
app.config.from_object(__name__)
app.config['SECRET_KEY'] = '7d441f27d444427567d441f2b6176a'

""" Section: Helper classes """


class ReusableForm(Form):
    url = TextField('Database Endpoint:', validators=[validators.required()])
    username = TextField('Username:', validators=[validators.required()])
    password = TextField('Password:', validators=[validators.required()])


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




# List to hold variable names defined in constants.py
constants_list = None


def find_match(col_name):

    global constants_list

    if constants_list is None:
        constants_list = []
        with open("constants.py") as f:
            for line in f:
                if len(line.strip()) != 0:
                    x = line.split("=")
                    constants_list.append(x[0].strip())

    # Now check each list in constants.py and get the one with the highest score

    highest_score = None
    highest_score_constant = None
    highest_score_value = None

    for element in constants_list:
        if len(globals()[element]) != 0:
            result = process.extractOne(col_name, globals()[element])
            if highest_score is None:
                highest_score = result[1]
                highest_score_constant = element
                highest_score_value = result[0]
            elif result[1] > highest_score:
                highest_score = result[1]
                highest_score_constant = element
                highest_score_value = result[0]

    return [highest_score, highest_score_constant, highest_score_value]

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

            flash('Pulling database tables...', 'info')

            # conn = psycopg2.connect('host=data.hdap.gatech.edu port=5433 dbname=mimic_v5 user=team0 password=hdapM1m1c4Students!')
            database_string = 'host=' + url + ' port=5433' + ' dbname=mimic_v5 user=' + username + ' password=' + password
            conn = psycopg2.connect(database_string)
            cur = conn.cursor()


            # Todo: Allow user to edit this value
            THRESHOLD = 40

            # ---------------------------------------------
            # Pull database column names for f_person table
            # ---------------------------------------------

            cur.execute("SELECT * FROM mimic_v5.f_person LIMIT 0")
            colnames = [name[0] for name in cur.description]

            best_mappings = {}
            allFhirFields = Patient + HumanName + ContactPoint + Address + Period

            # Iterate through all database column names and find best match to FHIR data type
            for name in colnames:

                # Output returned from find_match
                # [highest_score, highest_score_resource-name, highest_score_resource-value]

                match = find_match(name)

                if match[0] < THRESHOLD:
                    best_mappings[name] = ['UNKNOWN', 'UNKNOWN']
                else:
                    best_mappings[name] = [match[1], match[2]]

            # Flash best mappings for patients table
            flash(best_mappings, 'mappings-f_person')
            flash(allFhirFields, 'fhirfields-f_person')

            # ------------------------------------------------
            # Pull database column names for observation table
            # ------------------------------------------------
            cur.execute("SELECT * FROM mimic_v5.observation LIMIT 0")
            colnames = [name[0] for name in cur.description]

            best_mappings = {}
            # Todo: Check allFhirFields and add more?
            allFhirFields = Observation + Observation_ReferenceRange + Observation_Component + Observation_Related

            # Iterate through all database column names and find best match to FHIR data type
            for name in colnames:
                if len(difflib.get_close_matches(name, allFhirFields)) == 0:
                    best_mappings[name] = 'UNKNOWN'
                else:
                    best_mappings[name] = difflib.get_close_matches(name, allFhirFields, 1)[0]

            # Flash best mappings for observations table
            flash(best_mappings, 'mappings-observation')
            flash(allFhirFields, 'fhirfields-observation')

            # ------------------------------------------------
            # Pull database column names for measurement table
            # ------------------------------------------------
            cur.execute("SELECT * FROM mimic_v5.measurement LIMIT 0")
            colnames = [name[0] for name in cur.description]

            best_mappings = {}
            # Todo: Check allFhirFields and add more?
            allFhirFields = DeviceComponent + DeviceMetric + DeviceMetric_Calibration \
                            + MeasureReport_Group + MeasureReport + MeasureReport_Population1 + MeasureReport_Stratifier + MeasureReport_Population + MeasureReport_Stratum \
                            + Goal_Target + PlanDefinition_Target \
                            + Measure_Stratifier + Measure_Group + Measure_Population + Measure_SupplementalData + Measure

            # Iterate through all database column names and find best match to FHIR data type
            for name in colnames:
                if len(difflib.get_close_matches(name, allFhirFields)) == 0:
                    best_mappings[name] = 'UNKNOWN'
                else:
                    best_mappings[name] = difflib.get_close_matches(name, allFhirFields, 1)[0]

            # Flash best mappings for observations table
            flash(best_mappings, 'mappings-measurement')
            flash(allFhirFields, 'fhirfields-measurement')

            # ---------------------------------------------
            # Close cur as final step
            # ---------------------------------------------
            cur.close()


        else:
            # Re-direct to home if the form was not sent properly
            return redirect(url_for('home'))

    return render_template("table.html")


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
