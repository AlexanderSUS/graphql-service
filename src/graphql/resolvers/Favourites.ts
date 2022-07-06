import { Resolvers } from '../../types/resolvers';
import { Track } from '../../types/tracks';
import { List } from '../../types/list';
import { Genre } from '../../types/genres';
import { Band } from '../../types/bands';
import { Favourites } from '../../types/favourites';
import { Artist } from '../../types/artists';
import { QueryParams } from '../../types/queryParams';

const favouritesResolver: Resolvers = {
  Favourites: {
    async genres(favourites: Favourites, args: any, { dataSources }) {
      const genres = await dataSources.genresAPI.getGenres() as List<Genre>;
      return favourites.genresIds.map((id) => genres.items.find((genre) => genre._id === id));
    },
    async bands(favourites: Favourites, args: any, { dataSources }) {
      const bands = await dataSources.bandsAPI.getBands() as List<Band>;
      return favourites.bandsIds.map((id) => bands.items.find((band) => band._id === id));
    },
    async artists(favourites: Favourites, args: any, { dataSources }) {
      const artists = await dataSources.artistsAPI.getArtists() as List<Artist>;
      return favourites.artistsIds.map((id) => artists.items.find((artist) => artist._id === id));
    },
    async tracks(favourites: Favourites, args: any, { dataSources }) {
      const tracks = await dataSources.tracksAPI.getTracks() as List<Track>;
      return favourites.tracksIds.map((id) => tracks.items.find((track) => track._id === id));
    },
  },

  Query: {
    async favourites(_: any, queryParams: QueryParams, { dataSources }) {
      return dataSources.favouritesAPI.getFavourites(queryParams);
    },
  },

  Mutation: {
    async addTrackToFavourites(_: any, { tracksId }: { tracksId: string }, { dataSources }) {
      return dataSources.favouritesAPI.addTrackToFavourites(tracksId);
    },
    async addBandToFavourites(_: any, { bandsId }: { bandsId: string }, { dataSources }) {
      return dataSources.favouritesAPI.addBandToFavourites(bandsId);
    },
    async addArtistToFavourites(_: any, { artistsId }: { artistsId: string }, { dataSources }) {
      return dataSources.favouritesAPI.addArtistToFavourites(artistsId);
    },
    async addGenreToFavourites(_: any, { genresId }: { genresId: string }, { dataSources }) {
      return dataSources.favouritesAPI.addArtistToFavourites(genresId);
    },
  },
};

export default favouritesResolver;
