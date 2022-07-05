import { Resolvers } from '../../types/resolvers';
import { CreateTrackArgs, Track, UpdateTrackArgs } from '../../types/tracks';
import { List } from '../../types/list';
import { Genre } from '../../types/genres';
import { Band } from '../../types/bands';
import { Album } from '../../types/albums';

const tracksResolver: Resolvers = {
  Track: {
    async genres(track: Track, args: any, { dataSources }) {
      const genres = await dataSources.genresAPI.getGenres() as List<Genre>;
      return track.genresIds.map((id) => genres.items.find((genre) => genre._id === id));
    },
    async bands(track: Track, args: any, { dataSources }) {
      const bands = await dataSources.bandsAPI.getBands() as List<Band>;
      return track.bandsIds.map((id) => bands.items.find((band) => band._id === id));
    },
    async albums(track: Track, args: any, { dataSources }) {
      const albums = await dataSources.albumsAPI.getAlbums() as List<Album>;
      return track.bandsIds.map((id) => albums.items.find((band) => band._id === id));
    },
  },

  Query: {
    async tracks(_: any, args: any, { dataSources }) {
      return dataSources.tracksAPI.getTracks();
    },

    async track(_: any, { id }: { id : string }, { dataSources }) {
      return dataSources.tracksAPI.getTrack(id);
    },
  },

  Mutation: {
    async createTrack(_: any, args: CreateTrackArgs, { dataSources }) {
      return dataSources.tracksAPI.createTrack(args);
    },

    async updateTrack(_: any, args: UpdateTrackArgs, { dataSources }) {
      return dataSources.tracksAPI.updateTrack(args);
    },

    async deleteTrack(_: any, { _id }: { _id : string }, { dataSources }) {
      return dataSources.tracksAPI.deleteTrack(_id);
    },
  },
};

export default tracksResolver;
