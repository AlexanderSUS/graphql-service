import { Album } from './albums';
import { Artist } from './artists';
import { Band } from './bands';
import { Genre } from './genres';
import { Track } from './tracks';

export type AppInstanse = Genre | Band | Artist | Album | Track;

export type DeleteResponse = {
  acknowledged: boolean
  deletedCound: number;
};

export type List<T> = {
  items: T[];
  limit: number;
  offset: number
  total: number;
};

export type QueryParams = {
  limit?: number;
  offset?: number;
};
