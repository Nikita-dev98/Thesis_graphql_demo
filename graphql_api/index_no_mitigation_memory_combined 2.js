const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const promClient = require('prom-client');
const os = require('os');
const v8 = require('v8');
//const { trace } = require('trace_events');

// Import sample data 
const { users, repositories } = require('./dataset_2'); 

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

// Create an Express application
const app = express();

// Setup Prometheus metrics
const register = new promClient.Registry();
promClient.collectDefaultMetrics({ register });

// Custom metrics
const heapUsedGauge = new promClient.Gauge({
  name: 'heap_used_bytes',
  help: 'Heap used in bytes',
  registers: [register]
});

const rssGauge = new promClient.Gauge({
  name: 'rss_bytes',
  help: 'Resident Set Size in bytes',
  registers: [register]
});

const gcDurationGauge = new promClient.Gauge({
  name: 'gc_duration_seconds',
  help: 'Garbage collection duration in seconds',
  registers: [register]
});

const cpuUserTimeGauge = new promClient.Gauge({
  name: 'cpu_user_time_seconds',
  help: 'CPU user time in seconds',
  registers: [register]
});

const totalSystemMemoryGauge = new promClient.Gauge({
  name: 'system_total_memory_bytes',
  help: 'Total system memory in bytes',
  registers: [register]
});

const freeSystemMemoryGauge = new promClient.Gauge({
  name: 'system_free_memory_bytes',
  help: 'Free system memory in bytes',
  registers: [register]
});

// GC monitoring setup using trace_events
//const tracer = trace.createTracing({ categories: ['v8', 'node', 'v8.gc'] });


//tracer.enable();
/*tracer.on('traceEvents', (events) => {
  events.forEach((event) => {
    if (event.cat === 'v8.gc') {
      gcDurationGauge.set(event.dur / 1e6); // Convert duration from microseconds to seconds
    }
  });
});*/

// Interval to update metrics
setInterval(() => {
  const memoryUsage = process.memoryUsage();
  const cpuUsage = os.cpus();
  const systemMemory = os.totalmem();
  const freeMemory = os.freemem();

  heapUsedGauge.set(memoryUsage.heapUsed);
  rssGauge.set(memoryUsage.rss);

  // Aggregate CPU times to get user time in seconds
  let totalUserTime = 0;
  cpuUsage.forEach((cpu) => {
    totalUserTime += cpu.times.user;
  });
  cpuUserTimeGauge.set(totalUserTime / 1000); // Convert milliseconds to seconds

  totalSystemMemoryGauge.set(systemMemory);
  freeSystemMemoryGauge.set(freeMemory);
}, 1000);

// Expose the metrics endpoint
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

// Create the Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ users, repositories }),
});

// Apply the Apollo GraphQL middleware to the Express application
server.start().then(() => {
  server.applyMiddleware({ app });

  // Start the server
  app.listen({ port: 5001, host: '0.0.0.0' }, () => {
    console.log(`Server ready at http://localhost:5001${server.graphqlPath}`);
    console.log('Metrics available at http://localhost:5001/metrics');
  });
});
