export type User = {
  _id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type RegisterUserArgs = {
  email: string
  password: string;
  firstName?: string;
  lastName?: string;
};

export type LoginArgs = {
  email: string;
  password: string;
};

export type Jwt = {
  jwt: string;
};
