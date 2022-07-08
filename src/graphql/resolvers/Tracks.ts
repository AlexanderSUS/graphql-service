import { UserInputError } from 'apollo-server-core';
import { Resolvers } from '../../types/resolvers';
import { CreateTrackArgs, Track, UpdateTrackArgs } from '../../types/tracks';
import { QueryParams } from '../../types/queryParams';
import InputError from '../../const/errors';

const tracksResolver: Resolvers = {
  Track: {
    genres(track: Track, args: any, { dataSources }) {
      return Promise.all(
        track.genresIds.map((genreId) => dataSources.genresAPI.getGenre(genreId)),
      );
    },

    bands(track: Track, args: any, { dataSources }) {
      return Promise.all(
        track.bandsIds.map((bandsId) => dataSources.bandsAPI.getBand(bandsId)),
      );
    },

    album(track: Track, args: any, { dataSources }) {
      return dataSources.albumsAPI.getAlbum(track.albumId);
    },

    artists(track: Track, args: any, { dataSources }) {
      return Promise.all(
        track.artistsIds.map((artistId) => dataSources.artistsAPI.getArtist(artistId)),
      );
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

    deleteTrack(_: any, { id }: { id : string }, { dataSources }) {
      return dataSources.tracksAPI.deleteTrack(id);
    },
  },
};

export default tracksResolver;
