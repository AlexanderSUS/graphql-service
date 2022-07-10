export type Album = {
  _id: string;
  name: string;
  released: number;
  artistsIds: string[];
  bandsIds: string[];
  trackIds: string[];
  genresIds: string[];
  image: string;
};

export type CreateAlbumArgs = Partial<Omit<Album, '_id'>>;

export type UpdateAlbumArgs = CreateAlbumArgs & {
  id: string;
};
