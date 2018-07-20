pipeline {
  agent any
  stages {
    stage('ng build') {
      steps {
        sh 'export PATH=$PATH:/home/ec2-user/node-v10.7.0-linux-x64/bin'
        sh 'cd myProject && yarn -v'
      }
    }
    stage('mvn clean') {
      steps {
        sh 'mvn clean package -DskipTests'
      }
    }
    stage('Maven Build') {
      steps {
        sh 'mvn tomcat7:deploy'
      }
    }
  }
}