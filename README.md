# Docker, Mongo, React and Node with Typescript

## Requirements

-  Docker (if you do not have the database installed locally)
-  Yarn

## How to

-  Get started:
   -  Type `yarn` to install its dependencies.
-  Configure the .env:
   -  Copy the `.env.example` from `server` to `.env`
   -  Copy the `.env.example` from `web` to `.env.production` and `.env.development`
   -  Change your variable environments.
-  Start for development:
   -  Type `docker-compose -f docker-compose.dev.yml up --build` to build and run the database.
   -  Type `yarn start` to start the web and server.
   -  Access `http://localhost:3000` on the browser.
-  Use product build:
   -  Type `docker-compose -f docker-compose.dev.yml up --build` to build and run the database.
   -  Type `yarn build` to build the packages.
   -  Type `yarn server:production` to start the production build of server.
   -  Type `yarn web:production` to start the production build of web.
   -  Access `http://localhost:5000` on the browser.

## Using Docker

-  Configuring the .env:
   -  Copy the `.env.example` from `server` to `.env`
      -  Replace the `localhost` from `MONGO_URL` to `database` (or the container's name)
   -  Copy the `.env.example` from `web` to `.env.production` and `.env.development`
   -  Make your changes
-  Type `docker-compose up --build`
-  Access `http://localhost:5000` on the browser.

## Possible Errors

-  MongooseServerSelectionError: connect ECONNREFUSED 127.0.0.1:27017
   -  Be sure your `MONGO_URL` on `server .env` has the container's name instead of `localhost` (e.g: `mongodb://database/test`)
-  MongooseServerSelectionError: getaddrinfo ENOTFOUND database
   -  Be sure your `MONGO_URL` on `server .env` has the localhost instead of container's name (e.g: `mongodb://localhost/test`)
-  ENOSPC: System limit for number of file watchers reached
   -  Run `echo 65536 | sudo tee -a /proc/sys/fs/inotify/max_user_watches` (Linux, re-run when needed)

## Author

| [<img src="https://avatars3.githubusercontent.com/u/13838273?v=3&s=115"><br><sub>@lucasgdb</sub>](https://github.com/lucasgdb) |
| :----------------------------------------------------------------------------------------------------------------------------: |
