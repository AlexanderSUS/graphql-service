import { UserInputError } from 'apollo-server-core';
import { Resolvers } from '../../types/resolvers';
import { Album, CreateAlbumArgs, UpdateAlbumArgs } from '../../types/albums';
import { QueryParams } from '../../types/common';
import InputError from '../../const/errors';
import filterByExistance from '../../utils/firlterByExistanse';

const albumsResolver: Resolvers = {
  Album: {
    async artists(album: Album, args: any, { dataSources }) {
      const artist = await Promise.all(
        album.artistsIds.map((artistId) => dataSources.artistsAPI.getArtist(artistId)),
      );

      return filterByExistance(artist);
    },

    async genres(album: Album, args: any, { dataSources }) {
      const genres = await Promise.all(
        album.genresIds.map((genreId) => dataSources.genresAPI.getGenre(genreId)),
      );

      return filterByExistance(genres);
    },

    async bands(album: Album, args: any, { dataSources }) {
      const bands = await Promise.all(
        album.bandsIds.map((bandsId) => dataSources.bandsAPI.getBand(bandsId)),
      );

      return filterByExistance(bands);
    },

    async tracks(album: Album, args: any, { dataSources }) {
      const tracks = await Promise.all(
        album.trackIds.map((trackId) => dataSources.tracksAPI.getTrack(trackId)),
      );

      return filterByExistance(tracks);
    },
  },

  Query: {
    albums(_: any, queryParams: QueryParams, { dataSources }) {
      return dataSources.albumsAPI.getAlbums(queryParams);
    },

    async album(_: any, { id }: { id : string }, { dataSources }) {
      const album = await dataSources.albumsAPI.getAlbum(id) as Album;

      if (!album._id) throw new UserInputError(InputError.badAlbumId);

      return album;
    },
  },

  Mutation: {
    createAlbum(_: any, args: CreateAlbumArgs, { dataSources }) {
      return dataSources.albumsAPI.createAlbum(args);
    },

    async updateAlbum(_: any, args: UpdateAlbumArgs, { dataSources }) {
      const album = await dataSources.albumsAPI.updateAlbum(args);

      if (!album._id) throw new UserInputError(InputError.badAlbumId);

      return album;
    },

    deleteAlbum(_: any, { id }: { id : string }, { dataSources }) {
      return dataSources.albumsAPI.deleteAlbum(id);
    },
  },
};

export default albumsResolver;
