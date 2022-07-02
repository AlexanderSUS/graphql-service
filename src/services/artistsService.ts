import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { API, ArtistsAPIEndpoint } from '../const/api';
import { CreateArtistArgs, UpdateArtistArgs } from '../types/artists';

export interface ArtistsAPIDataSource {
  getArtist: (id: string) => Promise<any>
  getArtists: () => Promise<any>
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
    request.headers.set('Authorization', `Bearer ${this.context.token}`);
  }

  async getArtists() {
    return this.get(ArtistsAPIEndpoint.artists);
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
