export type CreateGenreArgs = {
  name: string;
  description?: string;
  country?: string;
  year?: string;
};

export type UpdateGenreArgs = {
  _id: string;
  name?: string;
  description?: string;
  country?: string;
  year?: string;
};
