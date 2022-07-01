import { Resolvers } from '../../types/resolvers';
import { RegisterUserArgs } from '../../types/user';

const userResolver: Resolvers = {
  Query: {
    async user(_: any, { id }: { id: string }, { dataSources }) {
      return dataSources.usersAPI.getUser(id);
    },
  },

  Mutation: {
    async register(_: any, args: RegisterUserArgs, { dataSources }) {
      return dataSources.usersAPI.registerUser(args);
    },
  },
};

export default userResolver;
