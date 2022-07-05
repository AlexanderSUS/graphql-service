import { Resolvers } from '../../types/resolvers';
import { Band, CreateBandArgs, UpdateBandArgs } from '../../types/bands';
import { Genre } from '../../types/genres';
import { List } from '../../types/list';

const bandsResolver: Resolvers = {
  Band: {
    async genres(band: Band, args: any, { dataSources }) {
      const genres = await dataSources.genresAPI.getGenres() as List<Genre>;
      return band.genresIds.map((id) => genres.items.find((genre) => genre._id === id));
    },
  },

  Query: {
    async bands(_: any, args: any, { dataSources }) {
      return dataSources.bandsAPI.getBands();
    },

    async band(_: any, { id }: { id : string }, { dataSources }) {
      return dataSources.bandsAPI.getBand(id);
    },
  },

  Mutation: {
    async createBand(_: any, args: CreateBandArgs, { dataSources }) {
      return dataSources.bandsAPI.createBand(args);
    },

    async updateBand(_: any, args: UpdateBandArgs, { dataSources }) {
      return dataSources.bandsAPI.updateBand(args);
    },

    async deleteBand(_: any, { _id }: { _id : string }, { dataSources }) {
      return dataSources.bandsAPI.deleteBand(_id);
    },
  },
};

export default bandsResolver;
