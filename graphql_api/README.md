# To build docker
1. docker build -f Dockerfile_no_mitigation -t mynodeapp_docker .
2. docker run -d -p 5001:5001 --memory=512m --name=nodeapp_docker mynodeapp_docker

# In another terminal run the load_test file to simulate dos 
1. node load_test.js

# GraphQL DoS Attack Experiment

This project demonstrates the simulation of Denial-of-Service (DoS) attacks on a GraphQL API using Node.js and Docker. The setup includes various configurations to test the effectiveness of mitigation methods against different attack types.

### File Descriptions

1. **node_modules/**: Contains all the required libraries and dependencies for the entire setup to run. This folder is generated automatically when you install the necessary packages using `npm install`.

2. **dataset.js**: Generates mock data for users, repositories, and comments, simulating a real-world environment. It creates 200 users and 100 repositories, randomly assigning repositories to users to mimic a more dynamic distribution.

3. **Dockerfile_no_mitigation**: Builds the Docker image for a container without any mitigation methods. It utilizes the `index_no_mitigation_duplicated.js` file to run the server in this configuration.

4. **Dockerfile_with_mitigation**: Builds the Docker image for a container with mitigation methods included. It utilizes the `index.js` file for this configuration, ensuring that the server can handle complex queries without crashing.

5. **load_test.js**: Performs a load test by repeatedly sending a specific query to the GraphQL endpoint. This file is essential for simulating high traffic conditions that could lead to DoS attacks.

6. **queries.js**: Contains GraphQL queries designed to simulate different types of DoS attacks by exploiting high levels of query complexity and nesting.

7. **old_queries.js**: Holds older queries used for testing purposes that may not be included in the current setup.

## Getting Started

To replicate this experiment, follow these steps:

1. **Clone the Repository**:
   Clone this repository to your local machine.

   ```bash
   git clone <repository-url>
   cd DEMO_API/graphql_api

2. **Install dependencies**:
   Navigate to the `graphql_api` directory and install the required libraries:
   ```bash
   npm install

3. **Build docker images**:
   ```bash
   docker build -t no_mitigation_image -f Dockerfile_no_mitigation .
   
   docker build -t with_mitigation_image -f Dockerfile_with_mitigation .

4. **Run docker containers**:
   ```bash
   docker run --name no_mitigation_experiment --memory=512m -p 5001:5001 no_mitigation_image

   docker run --name with_mitigation_experiment --memory=512m -p 5002:5001 with_mitigation_image

5. **Perform the load tests**
   ```bash
   node load_test.js

6. **Monitor resource usage**: Use Docker stats or Docker Desktop to monitor the resource usage of the running containers.


      
