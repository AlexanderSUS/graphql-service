import { ApolloServer } from 'apollo-server';
import userResolver from './graphql/resolvers/User';
import userTypeDefs from './graphql/models/User';
import bandTypeDefs from './graphql/models/Bands';
import bandResolver from './graphql/resolvers/Bands';
import genresTypeDefs from './graphql/models/Genres';
import genresResolver from './graphql/resolvers/Genres';
import arttistsTypeDefs from './graphql/models/Artists';
import artistsResolver from './graphql/resolvers/Artists';
import tracksTypeDefs from './graphql/models/Tracks';
import tracksResolver from './graphql/resolvers/Tracks';
import albumTypeDefs from './graphql/models/Albums';
import albumsResolver from './graphql/resolvers/Albums';
import { IDataSources, MyDataSources } from './types/dataSources';
import UsersAPI from './services/userService';
import BandsAPI from './services/bandsService';
import GenresAPI from './services/genresService';
import ArtistsAPI from './services/artistsService';
import TracksAPI from './services/tracksService';
import AlbumsAPI from './services/albumsService';

const dataSources = () => {
  const sources: IDataSources = {
    usersAPI: new UsersAPI(),
    bandsAPI: new BandsAPI(),
    genresAPI: new GenresAPI(),
    artistsAPI: new ArtistsAPI(),
    tracksAPI: new TracksAPI(),
    albumsAPI: new AlbumsAPI(),
  };
  return { ...sources } as unknown as MyDataSources;
};

const server = new ApolloServer({
  typeDefs: [userTypeDefs, genresTypeDefs, bandTypeDefs,
    arttistsTypeDefs, tracksTypeDefs, albumTypeDefs],
  resolvers: [userResolver, genresResolver, bandResolver,
    artistsResolver, tracksResolver, albumsResolver],
  csrfPrevention: true,
  cache: 'bounded',
  dataSources,
  context: ({ req }) => ({ token: req.headers.authorization || '' }),
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
