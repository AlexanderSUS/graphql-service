import { ApolloServer } from 'apollo-server';
import userResolver from './graphql/resolvers/User';
import userTypeDefs from './graphql/models/User';
import UsersAPI from './services/userService';
import { IDataSources, MyDataSources } from './types/dataSources';

const dataSources = () => {
  const sources: IDataSources = {
    usersAPI: new UsersAPI(),
  };
  return { ...sources } as unknown as MyDataSources;
};

const server = new ApolloServer({
  typeDefs: [userTypeDefs],
  resolvers: [userResolver],
  csrfPrevention: true,
  cache: 'bounded',
  dataSources,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
