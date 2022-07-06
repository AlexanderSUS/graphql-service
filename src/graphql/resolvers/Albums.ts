import { Resolvers } from '../../types/resolvers';
import { Album, CreateAlbumArgs, UpdateAlbumArgs } from '../../types/albums';
import { Band } from '../../types/bands';
import { Genre } from '../../types/genres';
import { Artist } from '../../types/artists';
import { List } from '../../types/list';
import { Track } from '../../types/tracks';
import { QueryParams } from '../../types/queryParams';

const albumsResolver: Resolvers = {
  Album: {
    async artists(album: Album, args: any, { dataSources }) {
      const artists = await dataSources.artistsAPI.getArtists() as List<Artist>;
      return album.artistsIds.map((id) => artists.items.find((artist) => artist._id === id));
    },
    async genres(album: Album, args: any, { dataSources }) {
      const genres = await dataSources.genresAPI.getGenres() as List<Genre>;
      return album.genresIds.map((id) => genres.items.find((genre) => genre._id === id));
    },
    async bands(album: Album, args: any, { dataSources }) {
      const bands = await dataSources.bandsAPI.getBands() as List<Band>;
      return album.bandsIds.map((id) => bands.items.find((band) => band._id === id));
    },
    async tracks(album: Album, args: any, { dataSources }) {
      const tracks = await dataSources.tracksAPI.getTracks() as List<Track>;
      return album.trackIds.map((id) => tracks.items.find((track) => track._id === id));
    },
  },

  Query: {
    async albums(_: any, queryParams: QueryParams, { dataSources }) {
      return dataSources.albumsAPI.getAlbums(queryParams);
    },

    async album(_: any, { id }: { id : string }, { dataSources }) {
      return dataSources.albumsAPI.getAlbum(id);
    },
  },

  Mutation: {
    async createAlbum(_: any, args: CreateAlbumArgs, { dataSources }) {
      return dataSources.albumsAPI.createAlbum(args);
    },

    async updateAlbum(_: any, args: UpdateAlbumArgs, { dataSources }) {
      return dataSources.albumsAPI.updateAlbum(args);
    },

    async deleteAlbum(_: any, { _id }: { _id : string }, { dataSources }) {
      return dataSources.albumsAPI.deleteAlbum(_id);
    },
  },
};

export default albumsResolver;
