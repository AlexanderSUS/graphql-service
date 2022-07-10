# graphql-service

This application is GraphQL API that use apollo server under hood and unite [Musicify microservices](https://github.com/rolling-scopes-school/node-graphql-service) at one endpoint and provide a comfortable and convenient service for users to manage and retrieve data for different entities.

#### Queries:
- artist
- artists
- genre
- genres
- track
- tracks
- band
- bands
- album
- albums
- jwt
- user
- favourites (available only for logged in user)

#### Mutations:
- Artists
  - createArtist
  - deleteArtist
  - updateArtist
- Genres
  - createGenre
  - deleteGenre
  - updateGenre
- Bands
  - createBand
  - deleteBand
  - updateBand
- Tracks
  - createTrack
  - deleteTrack
  - updateTrack
- Albums
  - createAlbum
  - deleteAlbum
  - updateAlbum
- Users
  - register
- Favourites
  - addTrackToFavourites
  - addBandToFavourites
  - addArtistToFavourites
  - addGenreToFavourites

**Mutation requests available only for logged in users. (except Users.register)**

### Instalation
####   microservices
  1. Clone repo with [Musicify microservices](https://github.com/rolling-scopes-school/node-graphql-service)
  ```sh
  git clone git@github.com:rolling-scopes-school/node-graphql-service.git
  ```
  2. Perfom installation of [Musicify microservices](https://github.com/rolling-scopes-school/node-graphql-service)   according it documentation.
#### graphql-service  
  1. Clone this repo 
  ```sh
  git clone git@github.com:AlexanderSUS/graphql-service.git
  ```
  2. Go to graphql-service folder
  ```sh
  cd graphql-service
  ```
  3. Switch branch to develop 
  ```sh 
  git checkout develop
  ```
  6. Install dependencies with command 
  ```sh
  npm install
  ```
  8. To start service run 
  ```sh
  npm run dev
  ```
  After that application start on 4000 port
  
## How to test
 - You can use **Apollo Studio** via your browser, just go to the http://localhost:4000 
 - You can use **Postman**, see insructions below:
 
 This repo contain postman collections and environment 
  1. Install postman client `https://www.postman.com/downloads/`
  2. Import `Graphql-service.postman_collection.json` to collections from `graphql-service` forlder
  3. Import `graphql-service.postman_environment.json` to environment  from `graphql-service` forlder
  4. Set `graphlq-service` to environment and `Graphql-service` to collection
  5. Find `User` forlder and send `register` request
  6. Send `jwt` request 
 
Now are registred and authorized for any requests.
  
  **Additional info:**
  - Collection `User` has embeded script for **automaticaly adding jwt token to header** after `jwt` request, **but** you must **send `register` query before that** 
  - Collectiions has scripts that automatically sets all IDs of newly created instances to variables that used in mutations, **so you don't need to copy and paste any values to variables,** just send requests for creation, and scripts will pull new IDs to variables.
  - Collections has scripts that automatically increment name indexes, releases etc. to be each newly created (or updated) instanse has different value.
