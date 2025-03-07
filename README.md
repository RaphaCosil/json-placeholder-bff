# BFF NestJS with JSONPlaceholder

## Overview

This is a Backend for Frontend (BFF) project developed with NestJS, which consumes the JSONPlaceholder API to handle posts, comments, albums and photos. The application is organized into separate modules of `publication`, `comment`, `album` and `photo`.

## Technologies Used

- [NestJS](https://nestjs.com/)
- [Axios](https://github.com/axios/axios) for HTTP requests
- [RxJS](https://rxjs.dev/) for handling asynchronous requests
- [ConfigService](https://docs.nestjs.com/techniques/configuration) for managing environment variables
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) as an external API

## Project Structure

```
src/
|-- publication/
|   |-- controllers/
|   |-- dto/
|   |-- interfaces/
|   |-- mapper/
|   |-- services/
|   └-- publication.module.ts
|
|-- comment/
|   |-- controllers/
|   |-- dto/
|   |-- interfaces/
|   |-- mapper/
|   |-- services/
|   └-- comment.module.ts
|
|-- album/
|   |-- controllers/
|   |-- dto/
|   |-- interfaces/
|   |-- mapper/
|   |-- services/
|   └-- album.module.ts
|
|-- photo/
|   |-- controllers/
|   |-- dto/
|   |-- interfaces/
|   |-- mapper/
|   |-- services/
|   └-- photo.module.ts
|
|-- app.module.ts
|-- main.ts
|
└-- test/

```

## Endpoints

### Publications (`/publication`)

- POST `/publication` - Create a new publication
- GET `/publication` - Search all publications
- GET `/publication/:id` - Search a publication by ID
- GET `/publication/user/:userId` - Search publications from a user

### Comments (`/comment`)

- POST `/comment` - Create a new comment
- GET `/comment` - Search all comments
- GET `/comment/:id` - Search a comment by ID
- GET `/comment/publication/:publicationId` - Search comments from a publication

### Albums (`/album`)

- POST `/album` - Create a new album
- GET `/album` - Search all albums
- GET `/album/:id` - Search an album by ID
- GET `/album/user/:userId` - Search for albums from a user

### Photos (`/photo`)

- POST `/photo` - Create a new photo
- GET `/photo` - Search for all photos
- GET `/photo/:id` - Search for a photo by ID
- GET `/photo/album/:albumId` - Search for photos from an album

## Configuration and Execution

1. Clone the repository:
    
    ```
    git clone <https://github.com/RaphaCosil/server-bff>
    cd server-bff
    
    ```
    
2. Install the dependencies:
    
    ```
    npm install
    
    ```
    
3. Configure environment variables:
    
    ```
    cp .env.example .env
    
    ```
    

Edit the `.env` file and set `API_KEY` with the JSONPlaceholder API URL.

1. Run the application:
    
    ```
    npm run start
    
    ```
    
2. To run in development mode:
    
    ```
    npm run start:dev
    
    ```
