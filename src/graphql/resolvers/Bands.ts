import { UserInputError } from 'apollo-server-core';
import { Resolvers } from '../../types/resolvers';
import { Band, CreateBandArgs, UpdateBandArgs } from '../../types/bands';
import { Genre } from '../../types/genres';
import { List } from '../../types/list';
import { QueryParams } from '../../types/queryParams';
import InputError from '../../const/errors';

const bandsResolver: Resolvers = {
  Band: {
    async genres(band: Band, args: any, { dataSources }) {
      const genres = await dataSources.genresAPI.getGenres() as List<Genre>;

      return band.genresIds.map((id) => genres.items.find((genre) => genre._id === id));
    },

    async members(band: Band, args: any, { dataSources }) {
      const { members } = band;

      return (
        await Promise.all(
          members.map(
            async (member) => dataSources.artistsAPI.getArtist(member.artist),
          ),
        )
      ).map((artist, index) => ({
        ...artist,
        instrument: members[index].instrument,
        yeaes: members[index].years,
      }));
    },
  },

  Query: {
    bands(_: any, queryParams: QueryParams, { dataSources }) {
      return dataSources.bandsAPI.getBands(queryParams);
    },

    async band(_: any, { id }: { id : string }, { dataSources }) {
      const band = await dataSources.bandsAPI.getBand(id) as Band;

      if (!band._id) throw new UserInputError(InputError.badBandId);

      return band;
    },
  },

  Mutation: {
    createBand(_: any, args: CreateBandArgs, { dataSources }) {
      return dataSources.bandsAPI.createBand(args);
    },

    async updateBand(_: any, args: UpdateBandArgs, { dataSources }) {
      const band = await dataSources.bandsAPI.updateBand(args) as Band;

      if (!band._id) throw new UserInputError(InputError.badBandId);

      return band;
    },

    deleteBand(_: any, { _id }: { _id : string }, { dataSources }) {
      return dataSources.bandsAPI.deleteBand(_id);
    },
  },
};

export default bandsResolver;
