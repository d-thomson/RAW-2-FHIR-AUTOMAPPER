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
          echo "Hello VNNNNG" 
        }
      }
      stage('Deploy'){
            steps{
                script{
                    docker.withRegistry('https://build.hdap.gatech.edu'){
                        //Build and push the AUTOMAPPER application image
                        def application = docker.build("raw-2-fhir-automapper:1.0", "./app")
                        application.push('latest')
                    }
                }
              }
            }
        //Define stage to notify rancher
        stage('Notify'){
            steps{
                script{
                    rancher confirm: true, credentialId: 'rancher-server', endpoint: 'https://rancher.hdap.gatech.edu/v2-beta', environmentId: '1a7', environments: '', image: 'build.hdap.gatech.edu/raw-2-fhir-automapper:latest', ports: '', service: 'raw-2-fhir-automapper/web5', timeout: 300
                  }
                }
              }
            }
          }

