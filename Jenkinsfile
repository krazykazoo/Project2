pipeline {
  agent any
  stages {
    stage('ng build') {
      steps {
        sh 'cd myProject && yarn'
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