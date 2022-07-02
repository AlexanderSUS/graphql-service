import { Resolvers } from '../../types/resolvers';
import { CreateAlbumArgs, UpdateAlbumArgs } from '../../types/albums';

const albumsResolver: Resolvers = {
  Query: {
    async albums(_: any, args: any, { dataSources }) {
      return dataSources.albumsAPI.getAlbums();
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
