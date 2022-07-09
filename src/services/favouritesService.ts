import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { API, FavouritesAPIEndpoint } from '../const/api';
import { Favourites } from '../types/favourites';
import { QueryParams } from '../types/queryParams';
import getQueryParams from '../utils/getQueryParams';

export interface FavouritesAPIDataSource {
  getFavourites: (queryParams?: QueryParams) => Promise<Favourites>;
  addTrackToFavourites: (id: string) => Promise<Favourites>;
  addBandToFavourites: (id: string) => Promise<Favourites>;
  addArtistToFavourites: (id: string) => Promise<Favourites> ;
  addGenreToFavourites: (id: string) => Promise<Favourites>;
}

class FavouritesAPI extends RESTDataSource implements FavouritesAPIDataSource {
  constructor() {
    super();
    this.baseURL = API.favourites;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', this.context.token);
  }

  getFavourites(queryParams?: QueryParams) {
    return this.get<Favourites>(`${FavouritesAPIEndpoint.favourites}${getQueryParams(queryParams)}`);
  }

  addTrackToFavourites(id: string) {
    return this.put<Favourites>(FavouritesAPIEndpoint.add, { type: 'tracks', id });
  }

  addBandToFavourites(id: string) {
    return this.put<Favourites>(FavouritesAPIEndpoint.add, { type: 'bands', id });
  }

  addArtistToFavourites(id: string) {
    return this.put<Favourites>(FavouritesAPIEndpoint.add, { type: 'artists', id });
  }

  addGenreToFavourites(id: string) {
    return this.put<Favourites>(FavouritesAPIEndpoint.add, { type: 'genres', id });
  }
}

export default FavouritesAPI;
