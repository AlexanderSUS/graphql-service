import { ApolloServer } from 'apollo-server';
import userResolver from './graphql/resolvers/User';
import userTypeDefs from './graphql/models/User';
import bandTypeDefs from './graphql/models/Bands';
import bandResolver from './graphql/resolvers/Bands';
import genresTypeDefs from './graphql/models/Genres';
import genresResolver from './graphql/resolvers/Genres';
import UsersAPI from './services/userService';
import { IDataSources, MyDataSources } from './types/dataSources';
import BandsAPI from './services/bandsService';
import GenresAPI from './services/genresService';

const dataSources = () => {
  const sources: IDataSources = {
    usersAPI: new UsersAPI(),
    bandsAPI: new BandsAPI(),
    genresAPI: new GenresAPI(),
  };
  return { ...sources } as unknown as MyDataSources;
};

const server = new ApolloServer({
  typeDefs: [userTypeDefs, genresTypeDefs, bandTypeDefs],
  resolvers: [userResolver, genresResolver, bandResolver],
  csrfPrevention: true,
  cache: 'bounded',
  dataSources,
  context: ({ req }) => ({ token: req.headers.authorization || '' }),
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
