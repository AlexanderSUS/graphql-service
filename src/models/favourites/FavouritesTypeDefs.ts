import { gql } from 'apollo-server';

const typeDefs = gql`
  type Favourites {
    _id: ID!
    userId: ID
    bands: [Band]
    genres: [Genre]
    artists: [Artist]
    tracks: [Track]
  }

  type DeleteFavouritesReturnObject {
    acknowledged: Boolean
    deletedCount: Int
  }

  type Query {
    favourites(limit: Int, offset: Int): Favourites
  }

 type Mutation {
    addTrackToFavourites(tracksId: ID!): Favourites
    addBandToFavourites(bandsId: ID!): Favourites
    addArtistToFavourites(artistsId: ID!): Favourites
    addGenreToFavourites(genresId: ID!): Favourites
  }
`;

export default typeDefs;
