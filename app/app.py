from __future__ import print_function
from flask import Flask, render_template, g, request, redirect, url_for, flash, session, send_file
from wtforms import Form, TextField, TextAreaField, validators, StringField, SubmitField
import psycopg2
import difflib
import itertools
import StringIO
from collections import defaultdict
from functools import wraps
from fuzzywuzzy import process
import sys

# Import dictionaries: Patient, HumanName, ContactPoint, Address, Period, etc.
from constants import *

# Used to track changes between builds
version = 0.001

app = Flask(__name__)
app.config.from_object(__name__)
app.config['SECRET_KEY'] = '7d441f27d444427567d441f2b6176a'


""" Section: Global Variables """


url = None
username = None
password = None
db_name = None
db_port = None


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


def get_db_tables(url, dbname, port, username, password):
    """ returns a dictionary with key:table_name value:list(col_names) for a db """

    database_string = 'host=' + url + ' port=' + port + ' dbname=' + dbname + ' user=' + username + ' password=' + password
    conn = psycopg2.connect(database_string)
    cur = conn.cursor()
    cur.execute(
        "SELECT table_name, column_name from information_schema.columns where table_name in (select tablename from pg_tables where schemaname = '" + dbname + "');")
    output = cur.fetchall()
    cur.close()

    return_list = []
    for tablename, colname in output:
        return_list.append(tablename)

    return return_list


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


@app.route('/select_tables', methods=['GET', 'POST'])
@login_required
def select_tables():
    if request.method == 'POST':

        # If user is trying to get mapping
        if 'database_endpoint' in request.form:

            global url, username, password, db_name, db_port

            url = request.form['database_endpoint']
            username = request.form['database_username']
            password = request.form['database_password']
            db_name = request.form['database_name']
            db_port = request.form['database_port']

            db_tables = get_db_tables(url=url, dbname=db_name, port=db_port, username=username, password=password)

            return render_template("select_tables.html", tables=db_tables)
        else:
            print ("Error: database_endpoint not found in form. Returning home.")

    # Re-direct to home if the form was not sent properly
    return redirect(url_for('home'))


@app.route('/map_table', methods=['GET', 'POST'])
@login_required
def map_table():
    if request.method == 'POST':

        # The user passed a bunch of tables to map; get the values and proceed
		if 'state[]' in request.form:

			global url, username, password, db_name, db_port

			selected_tables = request.form.getlist('state[]')
			selected_tables_processed = []

			if len(selected_tables) == 0:
				flash('No tables selected to map...', 'info')

			for table in selected_tables:
				table = str(table).strip()
				selected_tables_processed.append(table)
				print("--- Loading table for" + table, sys.stderr)

				# conn = psycopg2.connect('host=data.hdap.gatech.edu port=5433 dbname=mimic_v5 user=team0 password=hdapM1m1c4Students!')
				database_string = 'host=' + url + ' port=' + db_port + ' dbname=' + db_name + ' user=' + username + ' password=' + password
				print('DB String ' + database_string, file=sys.stderr)
				conn = psycopg2.connect(database_string)
				cur = conn.cursor()

				# Todo: Allow user to edit this value
				THRESHOLD = 40

				# ---------------------------------------------
				# Pull database column names for table
				# ---------------------------------------------
				sql_statement = "SELECT * FROM %s.%s LIMIT 0" % (db_name, table)
				cur.execute(sql_statement)
				colnames = [name[0] for name in cur.description]
				cur.close()

				best_mappings = {}
				match = None
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
				tag_mappings = "mappings-" + table
				flash(best_mappings, tag_mappings)
				flash(constants_list, 'fhir_names')

				if match is not None:
					tag_fhirfields = "fhirfields-%s" % table
					flash(globals()[match[1]], tag_fhirfields)

			# After all selected tables have been processed, show the table.html page
			return render_template("table.html", selected_tables=selected_tables_processed)
			
		elif request.form['actiontype'] == 'save':	
			raw = request.form.getlist('raw')
			fhir_resource_name = request.form.getlist('fhir_name')
			fhir_resource_value = request.form.getlist('fhir_value')
			form_data = zip(raw,fhir_resource_name,fhir_resource_value)
			mapping_name = request.form['name']
			filename = mapping_name.replace(" ","_")
			#user_id = 1
			#mapid = get_next_mapping_id()
			#
			#c, conn = connection()
			#			
			#save_query = ("INSERT INTO fhir_mappings (mappingID, userID, mapping_name, raw, fhir_name, fhir_value) " +
			#"VALUES("+mapid+", "+user_id+", 'name', 'family_name', 'Organization_Contact', 'name','');")
			#c.execute(login_query)
			#conn.close()

			json = "{\"My Mapping\": { \"mappings\": ["
			for a,b,c in itertools.izip(raw,fhir_resource_name,fhir_resource_value):
				json += "{\"raw\": \""+a+"\", \"fhir_resource\": \""+b+"\", \"fhir_value\": \""+c+"\"},"
			json = json[:-1] #get rid of last comma in the sequence
			json += "]}}"

			strIO = StringIO.StringIO()
			strIO.write(str(json))
			strIO.seek(0)
			return send_file(strIO,attachment_filename=filename+".json",as_attachment=True)
			#return render_template('save.html', data=zip(raw,fhir_resource_name,fhir_resource_value), name=mapping_name)
			
		else:
			# Re-direct to home if the form was not sent properly
			return redirect(url_for('home'))

    return render_template("home.html")


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
    # get_db_schema(url='data.hdap.gatech.edu', dbname='mimic_v5', password='hdapM1m1c4Students!', username='team0', port='5433')
