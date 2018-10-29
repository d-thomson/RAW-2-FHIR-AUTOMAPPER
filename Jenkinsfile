#!/usr/bin/env groovy
pipeline{
    agent any
    //RawtoFHIR Build process
    stages{

      stage('Test'){
        agent{
          docker{image 'python:2.7'}
        }
        steps {
          sh 'python ./app/app.py'
        }
      }
      stage('Deploy'){
            steps{
                script{
                    docker.withRegistry('https://gt-apps.hdap.gatech.edu'){
                        //Build and push the AUTOMAPPER application image
                        def application = docker.build("RAW-2-FHIR-AUTOMAPPER:1.0", "-f ./app/Dockerfile ./app")
                        application.push('latest')
                    }
                }
              }
            }
        //Define stage to notify rancher
        stage('Notify'){
            steps{
                script{
                    rancher confirm: true, credentialId: 'rancher-server', endpoint: 'https://rancher.hdap.gatech.edu/v2-beta', environmentId: '1a7', environments: '', image: 'build.hdap.gatech.edu/RAW-2-FHIR-AUTOMAPPER:latest', ports: '', service: '/app/RAW-2-FHIR-AUTOMAPPER', timeout: 60}
                  }
                }
              }
            }
