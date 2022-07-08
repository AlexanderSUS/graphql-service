import { Resolvers } from '../../types/resolvers';
import { Favourites } from '../../types/favourites';
import { QueryParams } from '../../types/queryParams';

const favouritesResolver: Resolvers = {
  Favourites: {
    genres(favourites: Favourites, args: any, { dataSources }) {
      return Promise.all(
        favourites.genresIds.map((genreId) => dataSources.genresAPI.getGenre(genreId)),
      );
    },

    bands(favourites: Favourites, args: any, { dataSources }) {
      return Promise.all(
        favourites.bandsIds.map((bandsId) => dataSources.bandsAPI.getBand(bandsId)),
      );
    },

    artists(favourites: Favourites, args: any, { dataSources }) {
      return Promise.all(
        favourites.artistsIds.map((artistId) => dataSources.artistsAPI.getArtist(artistId)),
      );
    },

    tracks(favourites: Favourites, args: any, { dataSources }) {
      return Promise.all(
        favourites.tracksIds.map((trackId) => dataSources.tracksAPI.getTrack(trackId)),
      );
    },
  },

  Query: {
    favourites(_: any, queryParams: QueryParams, { dataSources }) {
      return dataSources.favouritesAPI.getFavourites(queryParams);
    },
  },

  Mutation: {
    addTrackToFavourites(_: any, { tracksId }: { tracksId: string }, { dataSources }) {
      return dataSources.favouritesAPI.addTrackToFavourites(tracksId);
    },

    addBandToFavourites(_: any, { bandsId }: { bandsId: string }, { dataSources }) {
      return dataSources.favouritesAPI.addBandToFavourites(bandsId);
    },

    addArtistToFavourites(_: any, { artistsId }: { artistsId: string }, { dataSources }) {
      return dataSources.favouritesAPI.addArtistToFavourites(artistsId);
    },

    addGenreToFavourites(_: any, { genresId }: { genresId: string }, { dataSources }) {
      return dataSources.favouritesAPI.addArtistToFavourites(genresId);
    },
  },
};

export default favouritesResolver;
