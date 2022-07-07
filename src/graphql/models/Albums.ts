import { gql } from 'apollo-server';

const typeDefs = gql`
  type Album {
    _id: ID!
    name: String
    released: Int
    artists: [Artist]
    bands: [Band]
    tracks: [Track]
    genres: [Genre]
    image: String
  }

  type AlbumsList {
    items: [Album]
    limit: Int
    offset: Int
    total: Int
  }

  type DeleteAlbumReturnObject {
    acknowledged: Boolean
    deletedCount: Int
  }

  type Query {
    albums(limit: Int, offset: Int): AlbumsList
    album(id: ID!): Album
  }

 type Mutation {
    createAlbum(name: String, released: Int, artists: [ID], bands: [ID], tracks: [ID], genres: [ID], image: String): Album
    updateAlbum(id: ID!, name: String, released: Int, artists: [ID], bands: [ID], tracks: [ID], genres: [ID], image: String): Album
    deleteAlbum(id: ID!): DeleteAlbumReturnObject
  }
`;

export default typeDefs;
