import { UserInputError } from 'apollo-server-core';
import { Resolvers } from '../../types/resolvers';
import { Album, CreateAlbumArgs, UpdateAlbumArgs } from '../../types/albums';
// import { Band } from '../../types/bands';
// import { Genre } from '../../types/genres';
// import { Artist } from '../../types/artists';
// import { List } from '../../types/list';
// import { Track } from '../../types/tracks';
import { QueryParams } from '../../types/queryParams';
import InputError from '../../const/errors';

const albumsResolver: Resolvers = {
  Album: {
    artists(album: Album, args: any, { dataSources }) {
      return Promise.all(
        album.artistsIds.map((artistId) => dataSources.artistsAPI.getArtist(artistId)),
      );
      // const artists = await dataSources.artistsAPI.getArtists() as List<Artist>;

      // return album.artistsIds.map((id) => artists.items.find((artist) => artist._id === id));
    },

    genres(album: Album, args: any, { dataSources }) {
      return Promise.all(album.genresIds.map((genreId) => dataSources.genresAPI.getGenre(genreId)));
      // const genres = await dataSources.genresAPI.getGenres() as List<Genre>;

      // return album.genresIds.map((id) => genres.items.find((genre) => genre._id === id));
    },

    bands(album: Album, args: any, { dataSources }) {
      return Promise.all(album.bandsIds.map((bandsId) => dataSources.bandsAPI.getBand(bandsId)));
      // const bands = await dataSources.bandsAPI.getBands() as List<Band>;

      // return album.bandsIds.map((id) => bands.items.find((band) => band._id === id));
    },

    tracks(album: Album, args: any, { dataSources }) {
      return Promise.all(album.trackIds.map((trackId) => dataSources.tracksAPI.getTrack(trackId)));
      // const tracks = await dataSources.tracksAPI.getTracks() as List<Track>;

      // return album.trackIds.map((id) => tracks.items.find((track) => track._id === id));
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
