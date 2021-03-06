# Raw to FHIR Auto-mapper Special Instructions

* To run this application and connect to the Health Data Analytics Platorm, the user must use the Georgia Tech VPN. Instructions on getting started with the Campus VPN can be found [here](https://f_aq.oit.gatech.edu/content/how-do-i-get-started-campus-vpn).

## Access Application via Web
1. Access web application via https://cs6440-f18-prj21.apps.hdap.gatech.edu/login

## Run Application Locally
* Necessary tools for running locally: Git, Docker
1. Checkout code from github via 'git clone https://github.gatech.edu/gt-cs6440-hit-fall2018/RAW-2-FHIR-AUTOMAPPER.git'
2. Navigate into the 'app' directory
3. With Docker running, build the application with 'docker-compose build'
4. Once application is built, the application can be deployed with 'docker-compose up'
5. If deployment succeeds, the application page should be availabe at http://localhost/login

## Application Login
To access the functioning demo application, the following credentails can be used to login:
* username: demo
* password: password!23

Click the 'Sign in' button after credentials entry for successful login.

For further end user instructions on how to use the application refer to the manual.

