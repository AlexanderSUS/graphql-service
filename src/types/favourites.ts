export type Favourites = {
  _id: string;
  userId: string;
  bandsIds: string[];
  genresIds: string[];
  artistsIds: string[];
  tracksIds: string[];
};

export type FavouritesArgs = {
  type: 'tracks' | 'bands' | 'artists' | 'genres';
  id: string;
};
