FROM node:alpine AS build

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app

COPY package*.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn build
RUN yarn install --production
RUN npm i -g pm2

USER node

EXPOSE 8080

ENV NODE_ENV production

ENTRYPOINT [ "pm2-runtime", "dist" ]
