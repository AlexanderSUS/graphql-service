import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { API, FavouritesAPIEndpoint } from '../const/api';
import { QueryParams } from '../types/queryParams';
import getQueryParams from '../utils/getQueryParams';

export interface FavouritesAPIDataSource {
  getFavourites: (queryParams?: QueryParams) => Promise<any>;
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
    request.headers.set('Authorization', this.context.token);
  }

  async getFavourites(queryParams?: QueryParams) {
    return this.get(`${FavouritesAPIEndpoint.favourites}${getQueryParams(queryParams)}`);
  }

  async addTrackToFavourites(id: string) {
    return this.put(FavouritesAPIEndpoint.add, { type: 'tracks', id });
  }

  async addBandToFavourites(id: string) {
    return this.put(FavouritesAPIEndpoint.add, { type: 'bands', id });
  }

  async addArtistToFavourites(id: string) {
    return this.put(FavouritesAPIEndpoint.add, { type: 'artists', id });
  }

  async addGenreToFavourites(id: string) {
    return this.put(FavouritesAPIEndpoint.add, { type: 'genres', id });
  }
}

export default FavouritesAPI;
