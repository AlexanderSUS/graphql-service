import { UserInputError } from 'apollo-server-core';
import { Resolvers } from '../../types/resolvers';
import { Album, CreateAlbumArgs, UpdateAlbumArgs } from '../../types/albums';
import { QueryParams } from '../../types/queryParams';
import InputError from '../../const/errors';

const albumsResolver: Resolvers = {
  Album: {
    artists(album: Album, args: any, { dataSources }) {
      return Promise.all(
        album.artistsIds.map((artistId) => dataSources.artistsAPI.getArtist(artistId)),
      );
    },

    genres(album: Album, args: any, { dataSources }) {
      return Promise.all(album.genresIds.map((genreId) => dataSources.genresAPI.getGenre(genreId)));
    },

    bands(album: Album, args: any, { dataSources }) {
      return Promise.all(album.bandsIds.map((bandsId) => dataSources.bandsAPI.getBand(bandsId)));
    },

    tracks(album: Album, args: any, { dataSources }) {
      return Promise.all(album.trackIds.map((trackId) => dataSources.tracksAPI.getTrack(trackId)));
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
