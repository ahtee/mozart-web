# Dockerfile
FROM node:8.11.3-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install --production --quiet

COPY . /usr/src/app

EXPOSE 3000

USER node

CMD [ "npm", "start" ]