const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const bodyParser = require('body-parser')

// Import sample data 
const { users, repositories } = require('./dataset'); 


// Define your schema
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
    comments(first: Int, after: String): CommentConnection!  

    
  }

  type User {
    id: ID!
    login: String!
    name: String
    repositories(first: Int, after: String): RepositoryConnection!
    comments(first: Int, after: String): CommentConnection! 

  }

  type Comment {
    id: ID!
    content: String!
    user: User!
    repository: Repository!
  }

  type CommentConnection {
    edges: [CommentEdge]!
    pageInfo: PageInfo!
  }

  type CommentEdge {
    cursor: String!
    node: Comment!
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
    comments: (parent, { first = 10, after }, { comments }) => {
        const repoComments = comments.filter(comment => comment.repositoryId === parent.id);
        const startIndex = after ? repoComments.findIndex(comment => comment.id === after) + 1 : 0;
        const paginatedComments = repoComments.slice(startIndex, startIndex + first);
        const endCursor = paginatedComments.length > 0 ? paginatedComments[paginatedComments.length - 1].id : null;
        const hasNextPage = startIndex + first < repoComments.length;
  
        return {
          edges: paginatedComments.map(comment => ({
            cursor: comment.id,
            node: comment,
          })),
          pageInfo: {
            endCursor,
            hasNextPage,
          },
        };
      },
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
    comments: (parent, { first = 10, after }, { comments }) => {
        const userComments = comments.filter(comment => comment.userId === parent.id);
        const startIndex = after ? userComments.findIndex(comment => comment.id === after) + 1 : 0;
        const paginatedComments = userComments.slice(startIndex, startIndex + first);
        const endCursor = paginatedComments.length > 0 ? paginatedComments[paginatedComments.length - 1].id : null;
        const hasNextPage = startIndex + first < userComments.length;
  
        return {
          edges: paginatedComments.map(comment => ({
            cursor: comment.id,
            node: comment,
          })),
          pageInfo: {
            endCursor,
            hasNextPage,
          },
        };
      },
    },
    Comment: {
      user: (parent, args, { users }) => 
        users.find(user => user.id === parent.userId),
      repository: (parent, args, { repositories }) => 
        repositories.find(repo => repo.id === parent.repositoryId),
  },
};

// Create an Express application
const app = express();

// Increase the payload size limit to 50MB
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Create the Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ users, repositories, comments }),
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
