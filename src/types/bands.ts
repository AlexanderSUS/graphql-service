export type Member = {
  _id: string;
  firstName: string;
  secondName: string;
  middleName: string;
  instrument: string
  years:string[];
};

export type MemberInput = {
  artist: string
  instrument: string
  years: string
};

export type Band = {
  _id: string,
  name: string;
  origin: string;
  members: MemberInput[];
  website: string;
  genresIds: string[];
};

export type CreateBandArgs = Partial<Omit<Band, '_id'>>;

export type UpdateBandArgs = CreateBandArgs & {
  id: string;
};
