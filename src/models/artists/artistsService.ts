import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { API, ArtistsAPIEndpoint } from '../../const/api';
import { Artist, CreateArtistArgs, UpdateArtistArgs } from '../../types/artists';
import { DeleteResponse } from '../../types/deleteResponse';
import { List } from '../../types/list';
import { QueryParams } from '../../types/queryParams';
import getQueryParams from '../../utils/getQueryParams';

export interface ArtistsAPIDataSource {
  getArtist: (id: string) => Promise<Artist>
  getArtists: (queryParams?: QueryParams) => Promise<List<Artist>>
  createArtist: (args: CreateArtistArgs) => Promise<Artist>
  updateArtist: (args: UpdateArtistArgs) => Promise<Artist>
  deleteArtist: (id: string) => Promise<DeleteResponse>
}

class ArtistsAPI extends RESTDataSource implements ArtistsAPIDataSource {
  constructor() {
    super();
    this.baseURL = API.artists;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', this.context.token);
  }

  getArtists(queryParams?: QueryParams) {
    return this.get<List<Artist>>(`${ArtistsAPIEndpoint.artists}${getQueryParams(queryParams)}`);
  }

  getArtist(id: string) {
    return this.get<Artist>(`${ArtistsAPIEndpoint.artists}/${encodeURIComponent(id)}`);
  }

  createArtist(args: CreateArtistArgs) {
    return this.post<Artist>(ArtistsAPIEndpoint.artists, args);
  }

  updateArtist(args: UpdateArtistArgs) {
    return this.put<Artist>(`${ArtistsAPIEndpoint.artists}/${encodeURIComponent(args.id)}`, args);
  }

  deleteArtist(id: string) {
    return this.delete<DeleteResponse>(`${ArtistsAPIEndpoint.artists}/${encodeURIComponent(id)}`);
  }
}

export default ArtistsAPI;
