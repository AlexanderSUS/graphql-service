import { UserInputError } from 'apollo-server-core';
import { Resolvers } from '../../types/resolvers';
import { CreateTrackArgs, Track, UpdateTrackArgs } from '../../types/tracks';
import { QueryParams } from '../../types/queryParams';
import InputError from '../../const/errors';
import filterByExistance from '../../utils/firlterByExistanse';

const tracksResolver: Resolvers = {
  Track: {
    async genres(track: Track, args: any, { dataSources }) {
      const genres = await Promise.all(
        track.genresIds.map((genreId) => dataSources.genresAPI.getGenre(genreId)),
      );

      return filterByExistance(genres);
    },

    async bands(track: Track, args: any, { dataSources }) {
      const bands = await Promise.all(
        track.bandsIds.map((bandsId) => dataSources.bandsAPI.getBand(bandsId)),
      );

      return filterByExistance(bands);
    },

    async album(track: Track, args: any, { dataSources }) {
      const album = await dataSources.albumsAPI.getAlbum(track.albumId);

      return album || null;
    },

    async artists(track: Track, args: any, { dataSources }) {
      const artists = await Promise.all(
        track.artistsIds.map((artistId) => dataSources.artistsAPI.getArtist(artistId)),
      );

      return filterByExistance(artists);
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
