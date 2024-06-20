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

# batching attack - rate limiting
initial pic of set up and query - rate_limiting1
set up runner collection and use only 50 requests(not bypassing the rate limit, but calculating server performance) - rl_2

# Depth limiting - Circular fragments
# simple query

{
  user(id: "1") {
    id
    name
    posts {
      id
      title
    }
  }
}

# moderate complex query

{
  user(id: "1") {
    id
    name
    posts {
      id
      title
      comments {
        id
        content
        author {
          id
          name
        }
      }
    }
  }
}

# super complex
{
  users {
    id
    name
    posts {
      id
      title
      comments {
        id
        content
        author {
          id
          name
          posts {
            id
            title
            comments {
              id
              content
              author {
                id
                name
                posts {
                  id
                  title
                  comments {
                    id
                    content
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}


