pipeline {
  agent any
  stages {
    stage('ng build') {
      steps {
        sh 'cd myProject'
        sh 'ng build -prod'
        sh 'yarn install'
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