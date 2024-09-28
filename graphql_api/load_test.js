const { ApolloClient, InMemoryCache, HttpLink } = require('@apollo/client');
const fetch = require('cross-fetch');
const queries = require('./queries');

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:5001/graphql', fetch }),
  cache: new InMemoryCache()
});

async function createLoad() {
  while (true) {
    try {
      await client.query({ query: queries.circularQueryAttack1 });
      console.log('Request sent');
    } catch (e) {
      console.error('Error sending request:', e);
    }
  }
}

createLoad();
