pipeline {
    agent any
    stages {
        stage("Testing "){
            steps{
                sh """
                    ls -lrt 
                    cd ansible && ansible -i inventory.ini testing-server -m ping 
                     
                """

               
            }
        }

        stage("Change Directory Demo "){
            steps{
                
                dir('ansible'){
                  sh """
                    ls -lrt 
                    """
                   
                }
            }
        }
        
    }
}
