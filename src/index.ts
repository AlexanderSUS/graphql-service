import { ApolloServer } from 'apollo-server';
import userResolver from './models/user/UserResolver';
import userTypeDefs from './models/user/UserTypeDefs';
import bandTypeDefs from './models/bands/BandsTypeDefs';
import bandResolver from './models/bands/BandsResolver';
import genresTypeDefs from './models/genres/GenresTypeDefs';
import genresResolver from './models/genres/GenresReolver';
import arttistsTypeDefs from './models/artists/ArtistsTypeDefs';
import artistsResolver from './models/artists/ArtistsResolver';
import tracksTypeDefs from './models/tracks/TracksTypeDefs';
import tracksResolver from './models/tracks/TracksResolver';
import albumTypeDefs from './models/albums/AlbumTypeDefs';
import albumsResolver from './models/albums/AlbumsResolver';
import favouritesTypeDefs from './models/favourites/FavouritesTypeDefs';
import favouritesResolver from './models/favourites/FavouritesResolver';
import { IDataSources, MyDataSources } from './types/dataSources';
import UsersAPI from './models/user/userService';
import BandsAPI from './models/bands/bandsService';
import GenresAPI from './models/genres/genresService';
import ArtistsAPI from './models/artists/artistsService';
import TracksAPI from './models/tracks/tracksService';
import AlbumsAPI from './models/albums/albumsService';
import FavouritesAPI from './models/favourites/favouritesService';

const dataSources = () => {
  const sources: IDataSources = {
    usersAPI: new UsersAPI(),
    bandsAPI: new BandsAPI(),
    genresAPI: new GenresAPI(),
    artistsAPI: new ArtistsAPI(),
    tracksAPI: new TracksAPI(),
    albumsAPI: new AlbumsAPI(),
    favouritesAPI: new FavouritesAPI(),
  };
  return { ...sources } as unknown as MyDataSources;
};

const server = new ApolloServer({
  typeDefs: [userTypeDefs, genresTypeDefs, bandTypeDefs,
    arttistsTypeDefs, tracksTypeDefs, albumTypeDefs, favouritesTypeDefs],
  resolvers: [userResolver, genresResolver, bandResolver,
    artistsResolver, tracksResolver, albumsResolver, favouritesResolver],
  csrfPrevention: true,
  cache: 'bounded',
  dataSources,
  context: ({ req }) => ({ token: req.headers.authorization || '' }),
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
