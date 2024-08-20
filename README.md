# To build docker
1. docker build -f Dockerfile_no_mitigation -t mynodeapp_docker .
2. docker run -d -p 5001:5001 --memory=512m --name=nodeapp_docker mynodeapp_docker

# In another terminal run the load_test file to simulate dos 
1. node load_test.js