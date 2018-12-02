# Raw to FHIR Auto-mapper Manual
**Team Vnnnng**:
  * Kevaugn Brown
  * Bryan Gorges
  * Zach Hanley
  * Sumit Kumar
  * Steven Seidman
  * Daniel Thomson
  
**GitHub link:** https://github.gatech.edu/gt-cs6440-hit-fall2018/RAW-2-FHIR-AUTOMAPPER

# Table of Contents
* Final Dleivery -- Directory full of duplicate pdfs
  * Copied files
* app -- Flask app
  * static -- styles and scripts for the app
    * css -- directory of stylesheets
      * images -- directory of images
    * fonts -- directory of fonts used in the app
    * js -- directory of JavaScript used in the app
    * sass
    * bootstrap.min.css -- more stylesheets
    * login.css -- stylesheet for login page
  * templates -- html pages for the app
    * home.html
    * login.html
    * map.html
    * save.html
    * select_tables.html
    * table.html
  * Dockerfile -- Sets up docker deploy
  * app.py -- actual app logic
  * constants.py -- FHIR mapping
  * docker-compose.yml -- docker deploy details
  * requirements.txt -- required python modules for the app
  * schema.sql -- Save mapping
* docs -- Mostly markdown documentation
  * Research
    * ResearchLinks.md -- Links for various references on FHIR standards and python libs
    * fhir.schema.json.zip -- Contains all FHIR classes used in app logic
    * interview.md -- Requirements from talking with Alvin
    * research.md -- Misc. research without files
  * doc-pics -- Directory for images included in documentation
  * catalog.md -- this file
  * ganttChart.md -- Chart of how the app was developed
  * manual.md -- Instructions on how to use the running app.
  * specialInstructions.md -- Instructions on how to get the app running.
* .gitignore -- ignore unnecessary development/generated files
* Gantt.md -- Chart link through the semester
* JenkinsFile -- For deployment
* README.md -- Description
* Spring2018CatalogTeam12.pdf -- Project description
