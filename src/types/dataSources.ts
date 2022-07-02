import { DataSources } from 'apollo-server-core/dist/graphqlOptions';
// import { BandsAPIDataSource } from '../services/bandsService';
import { GenresAPIDataSource } from '../services/genresService';
import { UsersAPIDataSource } from '../services/userService';

export interface IDataSources {
  usersAPI: UsersAPIDataSource,
  // bandsAPI: BandsAPIDataSource
  genresAPI: GenresAPIDataSource
}

export type Context = {
  dataSources:IDataSources;
};

export interface MyDataSources {
  [key: string]: DataSources<Context> ;
}
