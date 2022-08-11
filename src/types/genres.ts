export type Genre = {
  _id: string;
  name: string;
  description: string;
  country: string;
  year: string;
};

export type CreateGenreArgs = Partial<Omit<Genre, '_id'>>;

export type UpdateGenreArgs = CreateGenreArgs & {
  id: string;
};
