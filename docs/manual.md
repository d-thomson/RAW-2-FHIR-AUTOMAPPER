# Raw to FHIR Auto-mapper Manual
**Team Vnnnng**:
  * Kevaugn Brown
  * Bryan Gorges
  * Zach Hanley
  * Sumit Kumar
  * Steven Seidman
  * Daniel Thomson
  
**GitHub link:** https://github.gatech.edu/gt-cs6440-hit-fall2018/RAW-2-FHIR-AUTOMAPPER

## Introduction

One of the greatest difficulties in the healthcare industry today is the lack of interoperabilty between all the technological applications that have been created within the ecosystem. This lack of interoperability is specifically an issue in the case of EMRs or Electronic Medical Records. EMRs were created to allow for the collection and storage of patient and population health information in a digital format. Moving these records to a digital format allowed for many benefits such as a more accurate system that could reduce the risk of error, immediate data access rather than tracking down all previous paper medical records, the ability for patients to have access to their records, and many more. Unfortunately, although each EMR serves a purpose, it does not mean that the data is accessbile via a common standard. Each EMR defines their own database structure and variable field names that can make querying the data especially difficult. As the healthcare industry has moved towards adopting the hl7 FHIR standards in application development, the value of these EMRs would be increased significantly if the data could be mapped from the native schema to the FHIR standards. The **RAW to FHIR Auto-mapper** was specifically designed to address this issue.
 
Given access to an EMR database, the **RAW to FHIR Auto-mapper** is able use the data schema (DDL) and auto-map to FHIR as best as possible. Additionally, once the mapping has been generated, a user maintains the ability to curate the output of the application to improve matching as well as save the mapping for future use. The success and adoption of this application will allow for easier conversion from EMRs to FHIR standards as well as contribute to a larger knowledge base for other EMRs to benefit from.

## Launching the Application
A user can access and use the web application through the deployed version of the app, but all code is available on github and can be deployed manually through the use of docker.
* To run this application and connect to the Health Data Analytics Platorm, the user must use the Georgia Tech VPN. Instructions on getting started with the Campus VPN can be found [here](https://f_aq.oit.gatech.edu/content/how-do-i-get-started-campus-vpn).

### Access Application via Web
1. Access web application via https://cs6440-f18-prj21.apps.hdap.gatech.edu/login

### Run Application Locally
* Necessary tools for running locally: Git, Docker
1. Checkout code from github via 'git clone https://github.gatech.edu/gt-cs6440-hit-fall2018/RAW-2-FHIR-AUTOMAPPER.git'
2. Navigate into the 'app' directory
3. With Docker running, build the application with 'docker-compose build'
4. Once the application is built, the application can be deployed with 'docker-compose up'
5. If deployment succeeds, the application page should be availabe at http://localhost/login

## Using the Application
Once connected to the application, the user will be presented a login screen before being able to access the core functionality. For the purposes of a demo and sandbox environment, a successful login can be achieved using the following credentials
* **username:** demo
* **password:** password!23

![Alt text](doc-pics/login.png?raw=true "Login")

After logging in, the user is presented with the home page of the application. Here, the user can elect to map a new database or import a previously mapped database.

To map a new database, the user should click on the "Map Resource" option on the left hand side of the page. Our demo will be utilizing the MIMIC database available by connecting to the Georgia Tech VPN.

* **Database Endpoint** data.hdap.gatech.edu
* **Database Name** mimic_v5
* **Database Port** 5433
* **Database Username** team0
* **Database Password** hdapM1m1c4Students!

![Alt text](doc-pics/automap.png?raw=true "Map Resource")

Before the application suggests FHIR resource mappings, the user will need to specify which tables of the database they would like the application to map.

![Alt text](doc-pics/select-tables.png?raw=true "Select Tables")

Once the mappings are completed, which can take several minutes, the user will be presented with the following page.

![Alt text](doc-pics/results.png?raw=true "Results")

On this page, users can select the tables which they have mapped at the top and the suggesting mappings will appear below. The "Raw Data" fields have been pulled from the database and the "FHIR Resource" along with a suggested value are on the right. If the suggested mappings are incorrect or unknown, the user can select the field and manually correct it.

![Alt text](doc-pics/results-change-resource.png?raw=true "Manual Correction")

Once the user is satisfied with the mappings, the user can specficy a name to export their mapping as a JSON file. This mapping can be imported by other users who may wish to build off of it.



