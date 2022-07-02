export const enum API {
  users = 'http://localhost:3004/v1',
  genres = 'http://localhost:3001/v1/genres',
  artists = 'http://localhost:3002/v1/artists',
  bands = 'http://localhost:3003/v1/bands',
  albums = 'http://localhost:3005/v1/albums',
  tracks = 'http://localhost:3006/v1/tracks',
  favourites = 'http://localhost:3007/v1/favourites ',
}

export const enum UserAPIEndpoint {
  users = 'users',
  register = 'users/register',
  login = 'users/login',
}
