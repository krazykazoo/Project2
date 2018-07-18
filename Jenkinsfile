pipeline {
  agent any
  stages {
    stage('Greet') {
      steps {
        echo 'This is the DevOps Pipeline for Project2'
      }
    }
    stage('mvn clean') {
      steps {
        sh 'mvn clean package -DskipTests'
      }
    }
  }
}