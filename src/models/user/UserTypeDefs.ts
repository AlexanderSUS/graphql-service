import { gql } from 'apollo-server';

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String
    lastName: String
    password: String!
    email: String!
  }

  type Jwt {
    jwt: String
  }

  type Query {
    user(id: ID!): User
    jwt(email: String!, password: String!): Jwt 
  }

  type Mutation {
    register(firstName: String, lastName: String, password: String!, email: String!): User
  }
`;

export default typeDefs;
