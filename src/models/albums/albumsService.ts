import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { API, AlbumsAPIEndpoint } from '../../const/api';
import { Album, CreateAlbumArgs, UpdateAlbumArgs } from '../../types/albums';
import { DeleteResponse, List, QueryParams } from '../../types/common';
import getQueryParams from '../../utils/getQueryParams';

export interface AlbumsAPIDataSource {
  getAlbum: (id: string) => Promise<Album>
  getAlbums: (queryParams?: QueryParams) => Promise<List<Album>>
  createAlbum: (args: CreateAlbumArgs) => Promise<Album>
  updateAlbum: (args: UpdateAlbumArgs) => Promise<Album>
  deleteAlbum: (id: string) => Promise<DeleteResponse>
}

class AlbumsAPI extends RESTDataSource implements AlbumsAPIDataSource {
  constructor() {
    super();
    this.baseURL = API.albums;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', this.context.token);
  }

  getAlbums(queryParams?: QueryParams) {
    return this.get<List<Album>>(`${AlbumsAPIEndpoint.albums}${getQueryParams(queryParams)}`);
  }

  getAlbum(id: string) {
    return this.get<Album>(`${AlbumsAPIEndpoint.albums}/${encodeURIComponent(id)}`);
  }

  createAlbum(args: CreateAlbumArgs) {
    return this.post<Album>(AlbumsAPIEndpoint.albums, args);
  }

  updateAlbum(args: UpdateAlbumArgs) {
    return this.put<Album>(`${AlbumsAPIEndpoint.albums}/${encodeURIComponent(args.id)}`, args);
  }

  deleteAlbum(id: string) {
    return this.delete<DeleteResponse>(`${AlbumsAPIEndpoint.albums}/${encodeURIComponent(id)}`);
  }
}

export default AlbumsAPI;
