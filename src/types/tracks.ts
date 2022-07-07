export type Track = {
  _id: string;
  title: string;
  albumId: string;
  bandsIds: string[];
  duration: number;
  released: number;
  genresIds: string[];
};

export type CreateTrackArgs = Partial<Omit<Track, '_id'>>;

export type UpdateTrackArgs = CreateTrackArgs & {
  id: string;
};
