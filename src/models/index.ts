import userResolver from './user/UserResolver';
import userTypeDefs from './user/UserTypeDefs';
import bandTypeDefs from './bands/BandsTypeDefs';
import bandResolver from './bands/BandsResolver';
import genresTypeDefs from './genres/GenresTypeDefs';
import genresResolver from './genres/GenresReolver';
import arttistsTypeDefs from './artists/ArtistsTypeDefs';
import artistsResolver from './artists/ArtistsResolver';
import tracksTypeDefs from './tracks/TracksTypeDefs';
import tracksResolver from './tracks/TracksResolver';
import albumTypeDefs from './albums/AlbumTypeDefs';
import albumsResolver from './albums/AlbumsResolver';
import favouritesTypeDefs from './favourites/FavouritesTypeDefs';
import favouritesResolver from './favourites/FavouritesResolver';
import UsersAPI from './user/userService';
import BandsAPI from './bands/bandsService';
import GenresAPI from './genres/genresService';
import ArtistsAPI from './artists/artistsService';
import TracksAPI from './tracks/tracksService';
import AlbumsAPI from './albums/albumsService';
import FavouritesAPI from './favourites/favouritesService';
import { IDataSources, MyDataSources } from '../types/dataSources';

export const typeDefs = [userTypeDefs, genresTypeDefs, bandTypeDefs,
  arttistsTypeDefs, tracksTypeDefs, albumTypeDefs, favouritesTypeDefs];

export const resolvers = [userResolver, genresResolver, bandResolver,
  artistsResolver, tracksResolver, albumsResolver, favouritesResolver];

export const dataSources = () => {
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
