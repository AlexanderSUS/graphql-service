import { Resolvers } from '../../types/resolvers';
import { CreateGenreArgs, UpdateGenreArgs } from '../../types/genres';
import { QueryParams } from '../../types/queryParams';

const genresResolver: Resolvers = {
  Query: {
    async genres(_: any, queryParams: QueryParams, { dataSources }) {
      return dataSources.genresAPI.getGenres(queryParams);
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

    async deleteGenre(_: any, { id }: { id : string }, { dataSources }) {
      return dataSources.genresAPI.deleteGenre(id);
    },
  },
};

export default genresResolver;
