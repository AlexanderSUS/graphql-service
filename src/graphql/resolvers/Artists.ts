import { Resolvers } from '../../types/resolvers';
import { CreateArtistArgs, UpdateArtistArgs } from '../../types/artists';

const artistsResolver: Resolvers = {
  Query: {
    async artists(_: any, args: any, { dataSources }) {
      return dataSources.artistsAPI.getArtists();
    },

    async genre(_: any, { id }: { id : string }, { dataSources }) {
      return dataSources.artistsAPI.getArtist(id);
    },
  },

  Mutation: {
    async createArtist(_: any, args: CreateArtistArgs, { dataSources }) {
      return dataSources.artistsAPI.createArtist(args);
    },

    async updateArtist(_: any, args: UpdateArtistArgs, { dataSources }) {
      return dataSources.artistsAPI.updateArtist(args);
    },

    async deleteArtist(_: any, { _id }: { _id : string }, { dataSources }) {
      return dataSources.artistsAPI.deleteArtist(_id);
    },
  },
};

export default artistsResolver;
