pipeline {
  agent any
  stages {
    stage('ng build') {
      steps {
        sh 'node -v'
        sh 'env'
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