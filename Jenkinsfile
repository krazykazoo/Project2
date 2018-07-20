pipeline {
  agent any
  stages {
    stage('ng build') {
      steps {
        sh '''curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
'''
        sh 'nvm install node'
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