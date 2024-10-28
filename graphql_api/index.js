const express = require('express');  //imports the Express framework, used for building web applications in Node.js
const { ApolloServer, gql } = require('apollo-server-express');  //integrates Apollo Server with Express
const depthLimit = require('graphql-depth-limit');  
const { createComplexityLimitRule } = require('graphql-validation-complexity');
const rateLimit = require('express-rate-limit');
// Import sample data 
const { users, repositories } = require('./dataset'); 


// Define your schema
//This uses the gql function to define the GraphQL schema
const typeDefs = gql`            
  type Query {
    repository(owner: String!, name: String!): Repository
    user(login: String!): User
    users(first: Int, after: String): UserConnection
  }

  type Repository {
    id: ID!
    name: String!
    owner: User!
    description: String
    
  }

  type User {
    id: ID!
    login: String!
    name: String
    repositories(first: Int, after: String): RepositoryConnection!
    
  }

  type ForkConnection {
    totalCount: Int!
    nodes: [Repository!]!
  }

  type RepositoryConnection {
    totalCount: Int!
    nodes: [Repository!]!
    pageInfo: PageInfo!
  }

    type UserConnection {
    edges: [UserEdge]!
    pageInfo: PageInfo!
  }

  type UserEdge {
    cursor: String!
    node: User!
  }

  type RepositoryEdge {
    cursor: String!
    node: Repository!
  }

  type PageInfo {
    endCursor: String
    hasNextPage: Boolean

  }
`;

// Define your resolvers
// Resolvers specify how to fetch the data for each query or field.

const resolvers = {
  Query: {
    repository: (parent, args, { repositories }) => repositories.find(repo => repo.name === args.name && repo.owner.login === args.owner),
    user: (parent, args, { users }) => users.find(user => user.login === args.login),
    users: (parent, { first = 10, after }, { users }) => {
      const startIndex = after ? users.findIndex(user => user.id === after) + 1 : 0;
      const paginatedUsers = users.slice(startIndex, startIndex + first);
      const endCursor = paginatedUsers.length > 0 ? paginatedUsers[paginatedUsers.length - 1].id : null;
      const hasNextPage = startIndex + first < users.length;

      return {
        edges: paginatedUsers.map(user => ({
          cursor: user.id,
          node: user,
        })),
        pageInfo: {
          endCursor,
          hasNextPage,
        },
      };
    },
  },
  Repository: {
    owner: (parent, args, { users }) => users.find(user => user.id === parent.owner.id),
  },
  User: {
    repositories: (parent, { first = 10, after }, { repositories }) => {
      const userRepos = repositories.filter(repo => repo.owner.id === parent.id);
      const startIndex = after ? userRepos.findIndex(repo => repo.id === after) + 1 : 0;
      const paginatedRepos = userRepos.slice(startIndex, startIndex + first);
      const endCursor = paginatedRepos.length > 0 ? paginatedRepos[paginatedRepos.length - 1].id : null;
      const hasNextPage = startIndex + first < userRepos.length;

      return {
        totalCount: userRepos.length,
        nodes: paginatedRepos,
        pageInfo: {
          endCursor,
          hasNextPage,
        },
      };
    },
  },
};


//Create the rate limiter middleware
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 500, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later."
});

// Create an Express application
const app = express();

// Apply rate limiting middleware to all requests
app.use(limiter);

// Create the Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ users, repositories }),
  validationRules: [depthLimit(20), createComplexityLimitRule(1000)],
});


// Apply the Apollo GraphQL middleware to the Express application
server.start().then(() => {
  server.applyMiddleware({ app });

  // Start the server
  app.listen({ port: 5001, host: '0.0.0.0' }, () => {
  //app.listen({ port: 5001 }, () => {
    console.log(`Server ready at http://localhost:5001${server.graphqlPath}`);
  });
});
