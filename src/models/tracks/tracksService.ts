import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { API, TracksAPIEndpoint } from '../../const/api';
import { DeleteResponse, List, QueryParams } from '../../types/common';
import { CreateTrackArgs, Track, UpdateTrackArgs } from '../../types/tracks';
import getQueryParams from '../../utils/getQueryParams';

export interface TracksAPIDataSource {
  getTrack: (id: string) => Promise<Track>
  getTracks: (queryParams?: QueryParams) => Promise<List<Track>>
  createTrack: (args: CreateTrackArgs) => Promise<Track>
  updateTrack: (args: UpdateTrackArgs) => Promise<Track>
  deleteTrack: (id: string) => Promise<DeleteResponse>
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
    return this.get<List<Track>>(`${TracksAPIEndpoint.tracks}${getQueryParams(queryParams)}`);
  }

  getTrack(id: string) {
    return this.get<Track>(`${TracksAPIEndpoint.tracks}/${encodeURIComponent(id)}`);
  }

  createTrack(args: CreateTrackArgs) {
    return this.post<Track>(TracksAPIEndpoint.tracks, args);
  }

  updateTrack(args: UpdateTrackArgs) {
    return this.put<Track>(`${TracksAPIEndpoint.tracks}/${encodeURIComponent(args.id)}`, args);
  }

  deleteTrack(id: string) {
    return this.delete<DeleteResponse>(`${TracksAPIEndpoint.tracks}/${encodeURIComponent(id)}`);
  }
}

export default TracksAPI;
