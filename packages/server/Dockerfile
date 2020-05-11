FROM node AS build

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app

COPY package*.json yarn.lock ./
RUN yarn install --pure-lockfile --non-interactive

COPY src src
COPY .babelrc .env.production ./

RUN npx -p @babel/cli -p @babel/core babel src --out-dir dist --copy-files --extensions '.js'
RUN npm i -g pm2

USER node
# RUN yarn build

EXPOSE 8080

ENV NODE_ENV production

ENTRYPOINT [ "pm2-runtime", "dist" ]
