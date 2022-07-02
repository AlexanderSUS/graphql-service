import { DataSources } from 'apollo-server-core/dist/graphqlOptions';
import { BandsAPIDataSource } from '../services/bandsService';
import { GenresAPIDataSource } from '../services/genresService';
import { UsersAPIDataSource } from '../services/userService';
import { ArtistsAPIDataSource } from '../services/artistsService';
import { TracksAPIDataSource } from '../services/tracksService';
import { AlbumsAPIDataSource } from '../services/albumsService';

export interface IDataSources {
  usersAPI: UsersAPIDataSource,
  bandsAPI: BandsAPIDataSource,
  genresAPI: GenresAPIDataSource,
  artistsAPI: ArtistsAPIDataSource,
  tracksAPI: TracksAPIDataSource,
  albumsAPI: AlbumsAPIDataSource
}

export type Context = {
  dataSources:IDataSources;
};

export interface MyDataSources {
  [key: string]: DataSources<Context> ;
}
