import { gql } from 'apollo-server';

const typeDefs = gql`
  type Artist {
    _id: ID!
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bands: [Band]
    instruments: String
  }

  type ArtistList {
    items: [Artist]
    limit: Int
    offset: Int
    total: Int
  }

  type DeleteArtistReturnObject {
    acknowledged: Boolean
    deletedCount: Int
  }

  type Query {
    artists(limit: Int, offset: Int): ArtistList 
    artist(id: ID!): Artist 
  }

  type Mutation {
    createArtist(firstName: String, secondName: String, middleName: String, birthDate: String, birthPlace: String, country: String, bands: [ID], instruments: String): Artist
    updateArtist(_id: ID!, firstName: String, secondName: String, middleName: String, birthDate: String, birthPlace: String, country: String, bands: [ID], instruments: String): Artist
    deleteArtist(_id: ID!): DeleteArtistReturnObject 
  }
`;

export default typeDefs;
