import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { API, ArtistsAPIEndpoint } from '../const/api';
import { CreateArtistArgs, UpdateArtistArgs } from '../types/artists';
import { QueryParams } from '../types/queryParams';
import getQueryParams from '../utils/getQueryParams';

export interface ArtistsAPIDataSource {
  getArtist: (id: string) => Promise<any>
  getArtists: (queryParams?: QueryParams) => Promise<any>
  createArtist: (args: CreateArtistArgs) => Promise<any>
  updateArtist: (args: UpdateArtistArgs) => Promise<any>
  deleteArtist: (id: string) => Promise<any>
}

class ArtistsAPI extends RESTDataSource implements ArtistsAPIDataSource {
  constructor() {
    super();
    this.baseURL = API.artists;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', this.context.token);
  }

  async getArtists(queryParams?: QueryParams) {
    return this.get(`${ArtistsAPIEndpoint.artists}${getQueryParams(queryParams)}`);
  }

  async getArtist(id: string) {
    return this.get(`${ArtistsAPIEndpoint.artists}/${encodeURIComponent(id)}`);
  }

  async createArtist(args: CreateArtistArgs) {
    return this.post(ArtistsAPIEndpoint.artists, args);
  }

  async updateArtist(args: UpdateArtistArgs) {
    return this.put(`${ArtistsAPIEndpoint.artists}/${encodeURIComponent(args._id)}`, args);
  }

  async deleteArtist(id: string) {
    return this.delete(`${ArtistsAPIEndpoint.artists}/${encodeURIComponent(id)}`);
  }
}

export default ArtistsAPI;
