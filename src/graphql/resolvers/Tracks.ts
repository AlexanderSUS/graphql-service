import { UserInputError } from 'apollo-server-core';
import { Resolvers } from '../../types/resolvers';
import { CreateTrackArgs, Track, UpdateTrackArgs } from '../../types/tracks';
import { List } from '../../types/list';
import { Genre } from '../../types/genres';
import { Band } from '../../types/bands';
import { Album } from '../../types/albums';
import { QueryParams } from '../../types/queryParams';
import InputError from '../../const/errors';

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
    tracks(_: any, queryParams: QueryParams, { dataSources }) {
      return dataSources.tracksAPI.getTracks(queryParams);
    },

    async track(_: any, { id }: { id : string }, { dataSources }) {
      const track = await dataSources.tracksAPI.getTrack(id) as Track;

      if (!track._id) throw new UserInputError(InputError.badTrackId);

      return track;
    },
  },

  Mutation: {
    createTrack(_: any, args: CreateTrackArgs, { dataSources }) {
      return dataSources.tracksAPI.createTrack(args);
    },

    async updateTrack(_: any, args: UpdateTrackArgs, { dataSources }) {
      const track = await dataSources.tracksAPI.updateTrack(args) as Track;

      if (!track._id) throw new UserInputError(InputError.badTrackId);

      return track;
    },

    deleteTrack(_: any, { _id }: { _id : string }, { dataSources }) {
      return dataSources.tracksAPI.deleteTrack(_id);
    },
  },
};

export default tracksResolver;
