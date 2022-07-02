import { gql } from 'apollo-server';

const typeDefs = gql`
  type Band {
    _id: ID!
    name: String
    origin: String
    members: [Member]
    website: String
    genres: [Genre]
  }

  type Member {
    artist: String
    instrument: String
    years: [String]
  }

  input MemberInput {
    artist: String
    instrument: String
    years: [String]
  }

  type BandsList {
    items: [Band]
    limit: Int
    offset: Int
    total: Int
  }

  type DeleteBandReturnObject {
    acknowledged: Boolean
    deletedCount: Int
  }

  type Query {
    bands: BandsList
    band(id: ID!): Band
  }

 type Mutation {
    createBand(name: String, origin: String, members: [MemberInput], website: String, genres: [GenreInput]): Band
    updateBand(_id: ID!, name: String, origin: String, members: [MemberInput], website: String, genres: [GenreInput]): Band
    deleteBand(_id: ID!): DeleteBandReturnObject
 }
`;

export default typeDefs;
