FROM node:alpine AS build

COPY package*.json yarn.lock ./
RUN yarn --pure-lockfile --non-interactive

COPY public public
COPY src src
COPY config-overrides.js jsconfig.json nginx.conf .env.production ./
RUN yarn build

FROM nginx:alpine

COPY --from=build /build /usr/share/nginx/html/
COPY --from=build /nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 5000

ENTRYPOINT ["nginx", "-g", "daemon off;"]
