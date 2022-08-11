import { DataSources } from 'apollo-server-core/dist/graphqlOptions';
import { BandsAPIDataSource } from '../models/bands/bandsService';
import { GenresAPIDataSource } from '../models/genres/genresService';
import { UsersAPIDataSource } from '../models/user/userService';
import { ArtistsAPIDataSource } from '../models/artists/artistsService';
import { TracksAPIDataSource } from '../models/tracks/tracksService';
import { AlbumsAPIDataSource } from '../models/albums/albumsService';
import { FavouritesAPIDataSource } from '../models/favourites/favouritesService';

export interface IDataSources {
  usersAPI: UsersAPIDataSource,
  bandsAPI: BandsAPIDataSource,
  genresAPI: GenresAPIDataSource,
  artistsAPI: ArtistsAPIDataSource,
  tracksAPI: TracksAPIDataSource,
  albumsAPI: AlbumsAPIDataSource
  favouritesAPI: FavouritesAPIDataSource,
}

export type Context = {
  dataSources:IDataSources;
};

export interface MyDataSources {
  [key: string]: DataSources<Context> ;
}
