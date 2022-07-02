import { Resolvers } from '../../types/resolvers';
import { CreateTrackArgs, UpdateTrackArgs } from '../../types/tracks';

const tracksResolver: Resolvers = {
  Query: {
    async tracks(_: any, args: any, { dataSources }) {
      return dataSources.tracksAPI.getTracks();
    },

    async track(_: any, { id }: { id : string }, { dataSources }) {
      return dataSources.tracksAPI.getTrack(id);
    },
  },

  Mutation: {
    async createTrack(_: any, args: CreateTrackArgs, { dataSources }) {
      return dataSources.tracksAPI.createTrack(args);
    },

    async updateTrack(_: any, args: UpdateTrackArgs, { dataSources }) {
      return dataSources.tracksAPI.updateTrack(args);
    },

    async deleteTrack(_: any, { _id }: { _id : string }, { dataSources }) {
      return dataSources.tracksAPI.deleteTrack(_id);
    },
  },
};

export default tracksResolver;
