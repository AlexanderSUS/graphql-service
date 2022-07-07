import { UserInputError } from 'apollo-server-core';
import { Resolvers } from '../../types/resolvers';
import { Band, CreateBandArgs, UpdateBandArgs } from '../../types/bands';
import { QueryParams } from '../../types/queryParams';
import InputError from '../../const/errors';
import { Artist } from '../../types/artists';

const bandsResolver: Resolvers = {
  Band: {
    async genres(band: Band, args: any, { dataSources }) {
      return Promise.all(band.genresIds.map((genreId) => dataSources.genresAPI.getGenre(genreId)));
    },

    async members(band: Band, args: any, { dataSources }) {
      const { members } = band;

      return (
        await Promise.all(
          members.map(
            async (member) => dataSources.artistsAPI.getArtist(member.artist) as Promise<Artist[]>,
          ),
        )
      ).map((artist, index) => ({
        ...artist,
        instrument: members[index].instrument,
        years: members[index].years,
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

      console.log(band.members);

      if (!band._id) throw new UserInputError(InputError.badBandId);

      return band;
    },

    deleteBand(_: any, { id }: { id : string }, { dataSources }) {
      return dataSources.bandsAPI.deleteBand(id);
    },
  },
};

export default bandsResolver;
