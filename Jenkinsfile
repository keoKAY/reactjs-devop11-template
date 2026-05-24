pipeline {

    // any agent available to run it , run it 
    agent any
    environment{
        IMAGE_NAME="jenkins-reactjs-img-ansible"
        TAG="${env.BUILD_NUMBER}" // built-in env 
    }
    stages {
        stage('Building Image') {
            steps {
                sh """
                docker build -t ${IMAGE_NAME}  . 
                """
            }
        }

        //  Push the docker image to the dockerhub 
        stage("Push Image to Dockerhub "){
            steps{
                withCredentials([usernamePassword(credentialsId: 'DOCKERHUB-CRED', passwordVariable: 'TOKEN', usernameVariable: 'USERNAME')]) {

                    sh """
                    echo "1. Login to Dockerhub account " 
                   echo "$TOKEN" | docker login -u ${USERNAME} --password-stdin
                   
                   docker tag ${IMAGE_NAME} ${USERNAME}/${IMAGE_NAME}:v1.0.${TAG}
                   echo "2. Push image to Dockerhub"
                   docker push ${USERNAME}/${IMAGE_NAME}:v1.0.${TAG}
                    """
   
}
            }
        }


        stage('Deploy container ') {
            steps {
                dir('ansible'){
                    sh """
                    ansible-playbook -i inventory.ini playbooks/deploy-svc.yaml -e "image_name=${IMAGE_NAME}:v1.0.${TAG}"
                    """
                }
            }
        }
    }
}
