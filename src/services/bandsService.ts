import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { API, BandsAPIEndpoint } from '../const/api';
import { CreateBandArgs, UpdateBandArgs } from '../types/bands';

export interface BandsAPIDataSource {
  getBand: (id: string) => Promise<any>
  getBands: () => Promise<any>
  createBand: (args: CreateBandArgs) => Promise<any>
  updateBand: (args: UpdateBandArgs) => Promise<any>
  deleteBand: (id: string) => Promise<any>
}

class BandsAPI extends RESTDataSource implements BandsAPIDataSource {
  constructor() {
    super();
    this.baseURL = API.bands;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', `Bearer ${this.context.token}`);
  }

  async getBands() {
    return this.get(BandsAPIEndpoint.bands);
  }

  async getBand(id: string) {
    return this.get(`${BandsAPIEndpoint.bands}/${encodeURIComponent(id)}`);
  }

  async createBand(args: CreateBandArgs) {
    return this.post(BandsAPIEndpoint.bands, args);
  }

  async updateBand(args: UpdateBandArgs) {
    return this.put(`${BandsAPIEndpoint.bands}/${encodeURIComponent(args._id)}`, args);
  }

  async deleteBand(id: string) {
    return this.delete(`${BandsAPIEndpoint.bands}/${encodeURIComponent(id)}`);
  }
}

export default BandsAPI;
