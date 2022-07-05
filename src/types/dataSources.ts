import { DataSources } from 'apollo-server-core/dist/graphqlOptions';
import { BandsAPIDataSource } from '../services/bandsService';
import { GenresAPIDataSource } from '../services/genresService';
import { UsersAPIDataSource } from '../services/userService';
import { ArtistsAPIDataSource } from '../services/artistsService';
import { TracksAPIDataSource } from '../services/tracksService';
import { AlbumsAPIDataSource } from '../services/albumsService';
import { FavouritesAPIDataSource } from '../services/favouritesService';

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
