import { UserInputError } from 'apollo-server-core';
import { Resolvers } from '../../types/resolvers';
import { Artist, CreateArtistArgs, UpdateArtistArgs } from '../../types/artists';
import { QueryParams } from '../../types/common';
import InputError from '../../const/errors';
import filterByExistance from '../../utils/firlterByExistanse';

const artistsResolver: Resolvers = {
  Artist: {
    async bands(artist: Artist, args: any, { dataSources }) {
      const bands = await Promise.all(
        artist.bandsIds.map((bandId) => dataSources.bandsAPI.getBand(bandId)),
      );

      return filterByExistance(bands);
    },
  },

  Query: {
    artists(_: any, queryParams: QueryParams, { dataSources }) {
      return dataSources.artistsAPI.getArtists(queryParams);
    },

    async artist(_: any, { id }: { id : string }, { dataSources }) {
      const artist = await dataSources.artistsAPI.getArtist(id) as Artist;

      if (!artist._id) throw new UserInputError(InputError.badArtitsId);

      return artist;
    },
  },

  Mutation: {
    createArtist(_: any, args: CreateArtistArgs, { dataSources }) {
      return dataSources.artistsAPI.createArtist(args);
    },

    async updateArtist(_: any, args: UpdateArtistArgs, { dataSources }) {
      const artist = await dataSources.artistsAPI.updateArtist(args) as Artist;

      if (!artist._id) throw new UserInputError(InputError.badArtitsId);

      return artist;
    },

    deleteArtist(_: any, { id }: { id : string }, { dataSources }) {
      return dataSources.artistsAPI.deleteArtist(id);
    },
  },
};

export default artistsResolver;
