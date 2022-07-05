import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { API, FavouritesAPIEndpoint } from '../const/api';

export interface FavouritesAPIDataSource {
  getFavourites: () => Promise<any>;
  addTrackToFavourites: (id: string) => Promise<any>;
  addBandToFavourites: (id: string) => Promise<any>;
  addArtistToFavourites: (id: string) => Promise<any> ;
  addGenreToFavourites: (id: string) => Promise<any>;
}

class FavouritesAPI extends RESTDataSource implements FavouritesAPIDataSource {
  constructor() {
    super();
    this.baseURL = API.favourites;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', `Bearer ${this.context.token}`);
  }

  async getFavourites() {
    return this.get(FavouritesAPIEndpoint.favourites);
  }

  async addTrackToFavourites(id: string) {
    return this.post(FavouritesAPIEndpoint.add, { type: 'tracks', id });
  }

  async addBandToFavourites(id: string) {
    return this.put(FavouritesAPIEndpoint.add, { type: 'bands', id });
  }

  async addArtistToFavourites(id: string) {
    return this.post(FavouritesAPIEndpoint.add, { type: 'artists', id });
  }

  async addGenreToFavourites(id: string) {
    return this.post(FavouritesAPIEndpoint.add, { type: 'genres', id });
  }
}

export default FavouritesAPI;
