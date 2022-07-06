import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { API, AlbumsAPIEndpoint } from '../const/api';
import { CreateAlbumArgs, UpdateAlbumArgs } from '../types/albums';
import { QueryParams } from '../types/queryParams';
import getQueryParams from '../utils/getQueryParams';

export interface AlbumsAPIDataSource {
  getAlbum: (id: string) => Promise<any>
  getAlbums: (queryParams?: QueryParams) => Promise<any>
  createAlbum: (args: CreateAlbumArgs) => Promise<any>
  updateAlbum: (args: UpdateAlbumArgs) => Promise<any>
  deleteAlbum: (id: string) => Promise<any>
}

class AlbumsAPI extends RESTDataSource implements AlbumsAPIDataSource {
  constructor() {
    super();
    this.baseURL = API.albums;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', `Bearer ${this.context.token}`);
  }

  async getAlbums(queryParams?: QueryParams) {
    return this.get(`${AlbumsAPIEndpoint.albums}${getQueryParams(queryParams)}`);
  }

  async getAlbum(id: string) {
    return this.get(`${AlbumsAPIEndpoint.albums}/${encodeURIComponent(id)}`);
  }

  async createAlbum(args: CreateAlbumArgs) {
    return this.post(AlbumsAPIEndpoint.albums, args);
  }

  async updateAlbum(args: UpdateAlbumArgs) {
    return this.put(`${AlbumsAPIEndpoint.albums}/${encodeURIComponent(args._id)}`, args);
  }

  async deleteAlbum(id: string) {
    return this.delete(`${AlbumsAPIEndpoint.albums}/${encodeURIComponent(id)}`);
  }
}

export default AlbumsAPI;
