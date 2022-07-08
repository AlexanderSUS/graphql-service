import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { API, TracksAPIEndpoint } from '../const/api';
import { QueryParams } from '../types/queryParams';
import { CreateTrackArgs, UpdateTrackArgs } from '../types/tracks';
import getQueryParams from '../utils/getQueryParams';

export interface TracksAPIDataSource {
  getTrack: (id: string) => Promise<any>
  getTracks: (queryParams?: QueryParams) => Promise<any>
  createTrack: (args: CreateTrackArgs) => Promise<any>
  updateTrack: (args: UpdateTrackArgs) => Promise<any>
  deleteTrack: (id: string) => Promise<any>
}

class TracksAPI extends RESTDataSource implements TracksAPIDataSource {
  constructor() {
    super();
    this.baseURL = API.tracks;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', this.context.token);
  }

  getTracks(queryParams?: QueryParams) {
    return this.get(`${TracksAPIEndpoint.tracks}${getQueryParams(queryParams)}`);
  }

  getTrack(id: string) {
    return this.get(`${TracksAPIEndpoint.tracks}/${encodeURIComponent(id)}`);
  }

  createTrack(args: CreateTrackArgs) {
    return this.post(TracksAPIEndpoint.tracks, args);
  }

  updateTrack(args: UpdateTrackArgs) {
    return this.put(`${TracksAPIEndpoint.tracks}/${encodeURIComponent(args.id)}`, args);
  }

  deleteTrack(id: string) {
    return this.delete(`${TracksAPIEndpoint.tracks}/${encodeURIComponent(id)}`);
  }
}

export default TracksAPI;
