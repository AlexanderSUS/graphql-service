import { DataSources } from 'apollo-server-core/dist/graphqlOptions';
import { UsersAPIDataSource } from '../services/userService';

export interface IDataSources {
  usersAPI: UsersAPIDataSource
}

export type Context = {
  dataSources:IDataSources
};

export interface MyDataSources {
  [key: string]: DataSources<Context> ;
}
