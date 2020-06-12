# :rocket: Template for ReactJS and NodeJS using Docker and MongoDB :blue_heart:

## :exclamation: Requirements

-  Docker (if you do not have the database installed locally)
-  Yarn

## :question: How to

-  Get started:
   -  Type `yarn` to install its dependencies.
-  Configure the .env:
   -  Copy the `.env.example` from `packages/server` to `.env.development`
   -  Copy the `.env.example` from `packages/web` to `.env.development`
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

## :whale: Using Docker

-  Configuring the .env:
   -  Copy the `.env.example` from `packages/server` to `.env.production`
      -  Replace the `localhost` from `MONGO_URL` to `database` (or the service name)
   -  Copy the `.env.example` from `packages/web` to `.env.production`
   -  Make your changes
-  Type `docker-compose up -d`
-  Access `http://localhost:5000` on the browser.

## :cloud: Hosting (AWS EC2)

-  Create a new EC2 instance on AWS Console Management
   -  Get the `aws_deploy.pem` file and move it here.
   -  Get the public DNS from AWS of your new instance (OS@DNS), for example: `ubuntu@ec2-18-228-24-132.sa-east-1.compute.amazonaws.com`
-  Configure the .env:
   -  Copy the `.env.example` from `packages/api` to `.env.production`
   -  Copy the `.env.example` from `packages/web` to `.env.production`
   -  Change the environment variables.
-  Type `ssh -i "aws_deploy.pem" OS@AWS_DNS`
-  Type `mkdir app`
-  Type `ctrl + D`
-  Type `rsync -avr -e "ssh -l user -i aws_deploy.pem" --exclude '**/*/node_modules' --exclude '**/*/dist' --exclude '**/*/build' packages docker-compose.yml OS@AWS_DNS:/home/OS/app`
-  Type `ssh -i "aws_deploy.pem" OS@AWS_DNS`
-  Type `cd app`
-  Type `docker-compose down` to down and stop the running application (if it exists).
-  Type `docker-compose up --build -d` to up and run the application.
-  Access `IP:5000` or `DNS:5000` in the browser.

## :interrobang: Possible Errors

-  MongooseServerSelectionError: connect ECONNREFUSED 127.0.0.1:27017
   -  Be sure your `MONGO_URL` on `server .env` has the container's name instead of `localhost` (e.g: `mongodb://database/template`)
-  MongooseServerSelectionError: getaddrinfo ENOTFOUND database
   -  Be sure your `MONGO_URL` on `server .env` has the `localhost` instead of container's name (e.g: `mongodb://localhost/template`)
-  ENOSPC: System limit for number of file watchers reached
   -  Run `echo 65536 | sudo tee -a /proc/sys/fs/inotify/max_user_watches` (Linux, re-run when needed)

## :boy: Author

| [<img src="https://avatars3.githubusercontent.com/u/13838273?v=3&s=115"><br><sub>@lucasgdb</sub>](https://github.com/lucasgdb) |
| :----------------------------------------------------------------------------------------------------------------------------: |


## :octocat: Contributors

[//]: contributor-faces

<a href="https://github.com/lucasgdb"><img src="https://avatars3.githubusercontent.com/u/13838273?v=4" title="lucasgdb" width="80" height="80"></a>

[//]: contributor-faces
