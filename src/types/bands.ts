import { UpdateGenreArgs } from './genres';
import { Member } from './member';

export type CreateBandArgs = {
  name?: string;
  origin?: string;
  members?: Member[];
  website?: string;
  genres?: UpdateBandArgs[];
};

export type UpdateBandArgs = {
  _id: string;
  name?: string;
  origin?: string;
  members?: Member[];
  website?: string;
  genres?: UpdateGenreArgs[];
};
