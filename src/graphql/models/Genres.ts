import { gql } from 'apollo-server';

const typeDefs = gql`
  type Genre {
    _id: ID!
    name: String
    description: String
    country: String
    year: Int
  }

  type GenresList {
    items: [Genre]
    limit: Int
    offset: Int
    total: Int
  }

  type DeleteGenreReturnObject {
    acknowledged: Boolean
    deletedCount: Int
  }

  type Query {
    genres(limit: Int, offset: Int): GenresList
    genre(id: ID!): Genre
  }

  type Mutation {
    createGenre(name: String, description: String, country: String, year: Int): Genre
    updateGenre(_id: ID!, name: String, description: String, country: String, year: Int): Genre
    deleteGenre(_id: ID!): DeleteGenreReturnObject 
  }
`;

export default typeDefs;
