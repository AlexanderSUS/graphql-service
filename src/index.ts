import { ApolloServer } from 'apollo-server';
import { resolvers, dataSources, typeDefs } from './models';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  dataSources,
  context: ({ req }) => ({ token: req.headers.authorization || '' }),
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
