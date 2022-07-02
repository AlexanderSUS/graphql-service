import { Resolvers } from '../../types/resolvers';
import { CreateGenreArgs, UpdateGenreArgs } from '../../types/genres';

const genresResolver: Resolvers = {
  Query: {
    async genres(_: any, args: any, { dataSources }) {
      return dataSources.genresAPI.getGenres();
    },

    async genre(_: any, { id }: { id : string }, { dataSources }) {
      return dataSources.genresAPI.getGenre(id);
    },
  },

  Mutation: {
    async createGenre(_: any, args: CreateGenreArgs, { dataSources }) {
      return dataSources.genresAPI.createGenre(args);
    },

    async updateGenre(_: any, args: UpdateGenreArgs, { dataSources }) {
      return dataSources.genresAPI.updateGenre(args);
    },

    async deleteGenre(_: any, { _id }: { _id : string }, { dataSources }) {
      return dataSources.genresAPI.deleteGenre(_id);
    },
  },
};

export default genresResolver;
