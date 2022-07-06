export type Member = {
  id: string;
  firstName?: string;
  secondName?: string;
  middleName?: string;
  instrument?: string
  years?: string
};

export type Band = {
  _id: string,
  name: string;
  origin: string;
  members: Member[];
  website: string;
  genresIds: string[];
};

export type CreateBandArgs = {
  name?: string;
  origin?: string;
  members?: Member[];
  website?: string;
  genresIds?: string[];
};

export type UpdateBandArgs = {
  _id: string;
  name?: string;
  origin?: string;
  members?: Member[];
  website?: string;
  genresIds?: string[];
};
