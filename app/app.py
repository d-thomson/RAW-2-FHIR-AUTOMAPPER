from flask import Flask, render_template, g, request, redirect, url_for
import psycopg2

app = Flask(__name__)

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
def show_guestbook():
  # Let's show all posts from the last week, with a maximum of
  # 100 posts
  cur = get_db().cursor()
  print "Debug: Database connection established"
  cur.close()
  print "Debug: Database connection closed"
  return "Successfully established and closed DB connection!"


if __name__ == '__main__':
  app.run(host='0.0.0.0', debug=True)
