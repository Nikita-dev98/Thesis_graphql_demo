const express = require('express');
//const { ApolloServer } = require('apollo-server-express');
const { ApolloServer, gql } = require('apollo-server-express');
const depthLimit = require('graphql-depth-limit');
const { createComplexityLimitRule } = require('graphql-validation-complexity');
const rateLimit = require('express-rate-limit');
// Import sample data
//const { users, posts, comments } = require('./dataset_2'); 
const { users, repositories } = require('./dataset_2'); 


// Define your schema
const typeDefs = gql`
  type Query {
    repository(owner: String!, name: String!): Repository
    user(login: String!): User
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
    repositories: RepositoryConnection!
    
  }

  type ForkConnection {
    totalCount: Int!
    nodes: [Repository!]!
  }

  type RepositoryConnection {
    totalCount: Int!
    nodes: [Repository!]!
  }
`;

// Define your resolvers
/*const resolvers = {
  Query: {
    repository: (parent, args, { repositories }) => repositories[0],  // Returns the first repository
    user: (parent, args, { users }) => users[0],  // Returns the first user
  },
  Repository: {
    owner: (parent, args, { users }) => users[0],  // Returns the first user as the owner
  },
  User: {
    repositories: (parent, args, { repositories }) => ({
      totalCount: repositories.length,
      nodes: repositories,
    }),
  },
};*/

const resolvers = {
  Query: {
    repository: (parent, args, { repositories }) => repositories.find(repo => repo.name === args.name && repo.owner.login === args.owner),
    user: (parent, args, { users }) => users.find(user => user.login === args.login),
  },
  Repository: {
    owner: (parent, args, { users }) => users.find(user => user.id === parent.owner.id),
  },
  User: {
    repositories: (parent) => parent.repositories,
  },
};


// Create the rate limiter middleware
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 100, // limit each IP to 100 requests per windowMs
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
  validationRules: [depthLimit(5), createComplexityLimitRule(1000)],
});

// Start the server
//server.listen({ port: 5001 }).then(({ url }) => {
//  console.log(`Server ready at ${url}`);
//});

// Apply the Apollo GraphQL middleware to the Express application
server.start().then(() => {
  server.applyMiddleware({ app });

  // Start the server
  app.listen({ port: 5001, host: '0.0.0.0' }, () => {
  //app.listen({ port: 5001 }, () => {
    console.log(`Server ready at http://localhost:5001${server.graphqlPath}`);
  });
});
