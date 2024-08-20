# Creating the docker
# docker run -d -p 5002:5001 --name graphql_api-container --memory=20m --cpus=1 graphql_api
docker run -p 5002:5001 --name graphql_api-container --memory 20m graphql_api

512 mb ram and 1 cpu core

# Running the docker
docker start graphql_api-container

# Access Apollo sandbox (check server is up and running)
http://localhost:5002/graphql

# attacks and techniques
batching attacks- complexity analysis and rate limitng
circular query attacks- depth limitng and complexity analysis
circular fragments - depth limiting

# attack and technique relation on thesis doc (1 technique/attack)
batching attacks- rate limitng
circular query attacks- complexity analysis
circular fragments - depth limiting

installing prometheus and grafana for memory visualization
To visualize the performance data from your monitor_memory.js file using Prometheus and Grafana, you will first need to ensure that your memory logs are exposed in a format that Prometheus can scrape. You'll then set up Prometheus to collect this data and use Grafana for visualization. 