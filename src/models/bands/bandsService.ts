import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { API, BandsAPIEndpoint } from '../../const/api';
import { Band, CreateBandArgs, UpdateBandArgs } from '../../types/bands';
import { DeleteResponse, List, QueryParams } from '../../types/common';
import getQueryParams from '../../utils/getQueryParams';

export interface BandsAPIDataSource {
  getBand: (id: string) => Promise<Band>
  getBands: (queryParams?: QueryParams) => Promise<List<Band>>
  createBand: (args: CreateBandArgs) => Promise<Band>
  updateBand: (args: UpdateBandArgs) => Promise<Band>
  deleteBand: (id: string) => Promise<DeleteResponse>
}

class BandsAPI extends RESTDataSource implements BandsAPIDataSource {
  constructor() {
    super();
    this.baseURL = API.bands;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', this.context.token);
  }

  getBands(queryParams?: QueryParams) {
    return this.get<List<Band>>(`${BandsAPIEndpoint.bands}${getQueryParams(queryParams)}`);
  }

  getBand(id: string) {
    return this.get<Band>(`${BandsAPIEndpoint.bands}/${encodeURIComponent(id)}`);
  }

  createBand(args: CreateBandArgs) {
    return this.post<Band>(BandsAPIEndpoint.bands, args);
  }

  updateBand(args: UpdateBandArgs) {
    return this.put<Band>(`${BandsAPIEndpoint.bands}/${encodeURIComponent(args.id)}`, args);
  }

  deleteBand(id: string) {
    return this.delete<DeleteResponse>(`${BandsAPIEndpoint.bands}/${encodeURIComponent(id)}`);
  }
}

export default BandsAPI;
