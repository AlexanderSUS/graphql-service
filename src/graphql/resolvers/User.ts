import { UserInputError } from 'apollo-server-core';
import InputError from '../../const/errors';
import { Resolvers } from '../../types/resolvers';
import { LoginArgs, RegisterUserArgs } from '../../types/user';

const userResolver: Resolvers = {
  Query: {
    async user(_: any, { id }: { id: string }, { dataSources }) {
      const user = await dataSources.usersAPI.getUser(id);

      if (!user._id) throw new UserInputError(InputError.badUserId);

      return user;
    },
  },

  Mutation: {
    register(_: any, args: RegisterUserArgs, { dataSources }) {
      return dataSources.usersAPI.registerUser(args);
    },

    jwt(_: any, args: LoginArgs, { dataSources }) {
      return dataSources.usersAPI.login(args);
    },
  },
};

export default userResolver;
