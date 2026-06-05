pipeline {
agent {
label 'slave-01'
}
environment {
    IMAGE_NAME = "jenkins-reactjs-img-ansible"
    TAG = "${BUILD_NUMBER}"
}

stages {

    stage('Building Image') {
        steps {
            sh """
                docker build -t ${IMAGE_NAME}:v1.0.${TAG} .
            """
        }
    }

    stage('Debug Environment') {
        steps {
            sh '''
                echo "Current User:"
                whoami

                echo "Current PATH:"
                echo $PATH

                echo "Docker Location:"
                which docker || true

                echo "Ansible Location:"
                which ansible-playbook || true

                docker --version
                /usr/bin/ansible-playbook --version
            '''
        }
    }

    stage('Deploy Container') {
        steps {
            dir('ansible') {
                sh """
                    /usr/bin/ansible-playbook \
                    -i inventory.ini \
                    playbooks/deploy-svc.yaml \
                    -e "image_name=${IMAGE_NAME}:v1.0.${TAG}"
                """
            }
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

post {
    success {
        echo 'Deployment completed successfully.'
    }

    failure {
        echo 'Deployment failed.'
    }
}

}
