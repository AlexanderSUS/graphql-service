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

export type CreateArtistArgs = {
  firstName?: string;
  secondName?: string;
  middleName?: string;
  birthDate?: string;
  birthPlace?: string;
  country?: string;
  bandsIds?: string[]
  instruments?: string[];
};

export type UpdateArtistArgs = {
  _id: string;
  firstName?: string;
  secondName?: string;
  middleName?: string;
  birthDate?: string;
  birthPlace?: string;
  country?: string;
  bandsIds?: string[]
  instruments?: string[];
};
