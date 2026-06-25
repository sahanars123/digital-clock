pipeline {
    agent any

    stages {
        stage('clone Respository') {
            steps {
                git 'https://github.com/sahanars123/jenkins.git'
            }
        }
        stage('build docker image') {
            steps {
                bat 'docker build -t digital clock'
            }
        }
        stage('run docker container') {
            steps {
                bat 'docker run -d -p 8090:80 digital clock'
            }
        }
    }
}