export type RegisterUserArgs = {
  email: string
  password: string,
  firstName?: string,
  lastName?: string,
};

export type LoginArgs = {
  email: string
  password: string,
};
