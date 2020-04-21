# Docker, Mongo, React and Node

## Requirements

-  Docker
-  Yarn

## How to

-  Clone this repo.
   -  Type `yarn` to install its dependencies.
   -  Type `docker-compose up --build` to build and run the database.
-  Configuring the .env:
   -  Copy the `.env.example` from `server` to `.env`
   -  Copy the `.env.example` from `web` to `.env.production` and `.env.development`
   -  Make your changes
-  Starting for development:
   -  Type `yarn start` to start the web and server.
   -  Access the `http://localhost:3000` on the browser.
-  Starting for production:
   -  Type `yarn build` to build the packages.
   -  Type `yarn server:production` to start the production build of server.
   -  Type `yarn web:production` to start the production build of web.
   -  Access the `http://localhost:5000` on the browser.

## Author

| [<img src="https://avatars3.githubusercontent.com/u/13838273?v=3&s=115"><br><sub>@lucasgdb</sub>](https://github.com/lucasgdb) |
| :----------------------------------------------------------------------------------------------------------------------------: |

