const express = require('express');
//const { ApolloServer } = require('apollo-server-express');
const { ApolloServer, gql } = require('apollo-server-express');
const depthLimit = require('graphql-depth-limit');
const { createComplexityLimitRule } = require('graphql-validation-complexity');
const rateLimit = require('express-rate-limit');
// Import sample data
const { users, posts, comments } = require('./data'); 


// Define your schema
const typeDefs = gql`
  type Query {
    hello: String
    user(id: ID!): User
    users: [User]
    posts: [Post]
    comment(id: ID!): Comment
    comments: [Comment]
  }

  type User {
    id: ID!
    name: String
    email: String
    posts: [Post]
  }

  type Post {
    id: ID!
    title: String
    body: String
    comments: [Comment]
  }

  type Comment {
    id: ID!
    content: String
  }
`;

// Define your resolvers
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    user: (parent, args, context, info) => context.users.find(user => user.id === args.id),
    users: (parent, args, context, info) => context.users,
    posts: (parent, args, context, info) => context.posts,
    comment: (parent, args, context, info) => context.comments.find(comment => comment.id === args.id),
    comments: (parent, args, context, info) => context.comments,
  },
  User: {
    posts: (parent, args, context, info) => context.posts.filter(post => post.userId === parent.id)
  },
  Post: {
    comments: (parent, args, context, info) => context.comments.filter(comment => comment.postId === parent.id)
  }
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
  context: () => ({ users, posts, comments }),
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
  app.listen({ port: 5001 }, () => {
    console.log(`Server ready at http://localhost:5001${server.graphqlPath}`);
  });
});
