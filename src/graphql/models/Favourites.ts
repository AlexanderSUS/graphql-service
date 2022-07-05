import { gql } from 'apollo-server';

const typeDefs = gql`
  type Favourites {
    id: ID!
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
    favourites: Favourites
  }

 type Mutation {
    addTrackToFavourites(tracksId: ID!): Favourites
    addBandToFavourites(bandsId: ID!): Favourites
    addArtistToFavourites(artistsId: ID!): Favourites
    addGenreToFavourites(genresId: ID!): Favourites
  }
`;

export default typeDefs;
