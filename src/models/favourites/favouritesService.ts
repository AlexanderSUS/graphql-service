import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { API, FavouritesAPIEndpoint } from '../../const/api';
import { Favourites, FavouritesArgs } from '../../types/favourites';
import { QueryParams } from '../../types/common';
import getQueryParams from '../../utils/getQueryParams';

export interface FavouritesAPIDataSource {
  getFavourites: (queryParams?: QueryParams) => Promise<Favourites>;
  addToFavourites: (args: FavouritesArgs) => Promise<Favourites>
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

  addToFavourites(args: FavouritesArgs) {
    return this.put<Favourites>(FavouritesAPIEndpoint.add, args);
  }
}

export default FavouritesAPI;
