pipeline {
  agent any
  stages {
    stage('ng build') {
      steps {
        sh 'cd .'
        sh 'ls'
        sh 'pwd'
      }
    }
    stage('mvn clean') {
      steps {
        sh 'mvn clean package -DskipTests'
        sh 'ls'
      }
    }
    stage('Maven Build') {
      steps {
        sh 'mvn tomcat7:deploy'
      }
    }
  }
}