import { gql } from 'apollo-server';

const typeDefs = gql`
  type Track {
    id: ID!
    title: String!
    albums: [Album]
    bands: [Band]
    duration: Int
    released: Int
    genres: [Genre]
  } 

  input TrackInput {
    title: String!
    albums: [AlbumInput]
    bands: [BandInput]
    duration: Int
    released: Int
    genres: [GenreInput]
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
    tracks: TracksList
    track(id: ID!): Track
  }

 type Mutation {
    createTrack(title: String!,  albums: [AlbumInput], bands: [BandInput], duration: Int, released: Int, genres: [GenreInput]): Track
    updateTrack(_id: ID!, title: String!,  albums: [AlbumInput], bands: [BandInput], duration: Int, released: Int, genres: [GenreInput]): Track
    deleteTrack(_id: ID!): DeleteTrackReturnObject
  }
`;

export default typeDefs;
