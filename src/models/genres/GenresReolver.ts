import { UserInputError } from 'apollo-server-core';
import { Resolvers } from '../../types/resolvers';
import { CreateGenreArgs, Genre, UpdateGenreArgs } from '../../types/genres';
import { QueryParams } from '../../types/queryParams';
import InputError from '../../const/errors';

const genresResolver: Resolvers = {
  Query: {
    genres(_: any, queryParams: QueryParams, { dataSources }) {
      return dataSources.genresAPI.getGenres(queryParams);
    },

    async genre(_: any, { id }: { id : string }, { dataSources }) {
      const genre = await dataSources.genresAPI.getGenre(id) as Genre;

      if (!genre._id) throw new UserInputError(InputError.badGenreId);

      return genre;
    },
  },

  Mutation: {
    createGenre(_: any, args: CreateGenreArgs, { dataSources }) {
      return dataSources.genresAPI.createGenre(args);
    },

    async updateGenre(_: any, args: UpdateGenreArgs, { dataSources }) {
      const genre = await dataSources.genresAPI.updateGenre(args) as Genre;

      if (!genre._id) throw new UserInputError(InputError.badGenreId);

      return genre;
    },

    deleteGenre(_: any, { id }: { id : string }, { dataSources }) {
      return dataSources.genresAPI.deleteGenre(id);
    },
  },
};

export default genresResolver;
