export const enum API {
  users = 'http://localhost:3004/v1',
  genres = 'http://localhost:3001/v1',
  artists = 'http://localhost:3002/v1',
  bands = 'http://localhost:3003/v1',
  albums = 'http://localhost:3005/v1',
  tracks = 'http://localhost:3006/v1',
  favourites = 'http://localhost:3007/v1',
}

export const enum UserAPIEndpoint {
  users = 'users',
  register = 'users/register',
  login = 'users/login',
}

export const enum BandsAPIEndpoint {
  bands = 'bands',
}

export const enum GenresAPIEndpoint {
  genres = 'genres',
}

export const enum ArtistsAPIEndpoint {
  artists = 'artists',
}

export const enum TracksAPIEndpoint {
  tracks = 'tracks',
}

export const enum AlbumsAPIEndpoint {
  albums = 'albums',
}

export const enum FavouritesAPIEndpoint {
  favourites = 'favourites',
  add = 'favourites/add',
}
