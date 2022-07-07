import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { API, GenresAPIEndpoint } from '../const/api';
import { CreateGenreArgs, UpdateGenreArgs } from '../types/genres';
import { QueryParams } from '../types/queryParams';
import getQueryParams from '../utils/getQueryParams';

export interface GenresAPIDataSource {
  getGenre: (id: string) => Promise<any>
  getGenres: (queryParams?: QueryParams) => Promise<any>
  createGenre: (args: CreateGenreArgs) => Promise<any>
  updateGenre: (args: UpdateGenreArgs) => Promise<any>
  deleteGenre: (id: string) => Promise<any>
}

class GenresAPI extends RESTDataSource implements GenresAPIDataSource {
  constructor() {
    super();
    this.baseURL = API.genres;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', this.context.token);
  }

  async getGenres(queryParams?: QueryParams) {
    return this.get(`${GenresAPIEndpoint.genres}${getQueryParams(queryParams)}`);
  }

  async getGenre(id: string) {
    return this.get(`${GenresAPIEndpoint.genres}/${encodeURIComponent(id)}`);
  }

  async createGenre(args: CreateGenreArgs) {
    return this.post(GenresAPIEndpoint.genres, args);
  }

  async updateGenre(args: UpdateGenreArgs) {
    return this.put(`${GenresAPIEndpoint.genres}/${encodeURIComponent(args.id)}`, args);
  }

  async deleteGenre(id: string) {
    return this.delete(`${GenresAPIEndpoint.genres}/${encodeURIComponent(id)}`);
  }
}

export default GenresAPI;
