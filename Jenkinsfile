pipeline {
  agent any
  stages {
    stage('ng build') {
      steps {
        sh 'sudo yum install nodejs'
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