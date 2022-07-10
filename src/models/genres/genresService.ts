import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { API, GenresAPIEndpoint } from '../../const/api';
import { DeleteResponse, List, QueryParams } from '../../types/common';
import { CreateGenreArgs, Genre, UpdateGenreArgs } from '../../types/genres';
import getQueryParams from '../../utils/getQueryParams';

export interface GenresAPIDataSource {
  getGenre: (id: string) => Promise<Genre>
  getGenres: (queryParams?: QueryParams) => Promise<List<Genre>>
  createGenre: (args: CreateGenreArgs) => Promise<Genre>
  updateGenre: (args: UpdateGenreArgs) => Promise<Genre>
  deleteGenre: (id: string) => Promise<DeleteResponse>
}

class GenresAPI extends RESTDataSource implements GenresAPIDataSource {
  constructor() {
    super();
    this.baseURL = API.genres;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', this.context.token);
  }

  getGenres(queryParams?: QueryParams) {
    return this.get<List<Genre>>(`${GenresAPIEndpoint.genres}${getQueryParams(queryParams)}`);
  }

  getGenre(id: string) {
    return this.get<Genre>(`${GenresAPIEndpoint.genres}/${encodeURIComponent(id)}`);
  }

  createGenre(args: CreateGenreArgs) {
    return this.post<Genre>(GenresAPIEndpoint.genres, args);
  }

  updateGenre(args: UpdateGenreArgs) {
    return this.put<Genre>(`${GenresAPIEndpoint.genres}/${encodeURIComponent(args.id)}`, args);
  }

  deleteGenre(id: string) {
    return this.delete<DeleteResponse>(`${GenresAPIEndpoint.genres}/${encodeURIComponent(id)}`);
  }
}

export default GenresAPI;
