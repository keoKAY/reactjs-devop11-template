pipeline {
    agent {
        label 'slave-01'
    }

    stages {

        stage('Build') {
            steps {
                sh '''
                    docker build -t jenkins-react-pipeline .
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    docker stop reactjs-cont || true
                    docker rm reactjs-cont || true

                    docker run -d \
                        --name reactjs-cont \
                        -p 3000:80 \
                        jenkins-react-pipeline
                '''
            }
        }

        stage('Add Domain Name') {
            steps {
                sh '''
                    echo "Running shell script to add the domain name for the service"
                '''
            }
        }
    }
}