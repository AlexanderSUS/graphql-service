import { gql } from 'apollo-server';

const typeDefs = gql`
  type Track {
    _id: ID!
    title: String!
    album: Album
    artists: [Artist]
    bands: [Band]
    duration: Int
    released: Int
    genres: [Genre]
  } 

  type TracksList {
    items: [Track]
    limit: Int
    offset: Int
    total: Int
  }

  type DeleteTrackReturnObject {
    acknowledged: Boolean
    deletedCount: Int
  }

  type Query {
    tracks(limit: Int, offset: Int): TracksList
    track(id: ID!): Track
  }

 type Mutation {
    createTrack(title: String!,  albumId: ID, aritistIds: [ID] bandsIds: [ID], duration: Int, released: Int, genresIds: [ID]): Track
    updateTrack(id: ID!, title: String!,  albumId: ID, aritistIds: [ID], bandsIds: [ID], duration: Int, released: Int, genresIds: [ID]): Track
    deleteTrack(id: ID!): DeleteTrackReturnObject
  }
`;

export default typeDefs;
