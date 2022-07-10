import { Resolvers } from '../../types/resolvers';
import { Favourites } from '../../types/favourites';
import { QueryParams } from '../../types/common';
import filterByExistance from '../../utils/firlterByExistanse';

const favouritesResolver: Resolvers = {
  Favourites: {
    async genres(favourites: Favourites, args: any, { dataSources }) {
      const genres = await Promise.all(
        favourites.genresIds.map((genreId) => dataSources.genresAPI.getGenre(genreId)),
      );

      return filterByExistance(genres);
    },

    async bands(favourites: Favourites, args: any, { dataSources }) {
      const bands = await Promise.all(
        favourites.bandsIds.map((bandsId) => dataSources.bandsAPI.getBand(bandsId)),
      );

      return filterByExistance(bands);
    },

    async artists(favourites: Favourites, args: any, { dataSources }) {
      const artists = await Promise.all(
        favourites.artistsIds.map((artistId) => dataSources.artistsAPI.getArtist(artistId)),
      );

      return filterByExistance(artists);
    },

    async tracks(favourites: Favourites, args: any, { dataSources }) {
      const tracks = await Promise.all(
        favourites.tracksIds.map((trackId) => dataSources.tracksAPI.getTrack(trackId)),
      );

      return filterByExistance(tracks);
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
      return dataSources.favouritesAPI.addGenreToFavourites(genresId);
    },
  },
};

export default favouritesResolver;
