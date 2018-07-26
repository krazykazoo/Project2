pipeline {
  agent any
  stages {
    stage('ng build') {
      steps {
        echo 'this is where angular should be'
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