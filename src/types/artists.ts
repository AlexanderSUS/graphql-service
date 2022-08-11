export type Artist = {
  _id: string;
  firstName: string;
  secondName: string;
  middleName: string;
  birthDate: string;
  birthPlace: string;
  country: string;
  bandsIds: string[]
  instruments: string[];
};

export type CreateArtistArgs = Partial<Omit<Artist, '_id'>>;

export type UpdateArtistArgs = CreateArtistArgs & {
  id: string;
};
