# docker rm $(docker ps -a -q)  stop all images running
# docker rmi $(docker images -q)  delete all images not running

FROM node:14.16.0-alpine3.10
WORKDIR /usr/app
COPY package*.json ./
RUN npm ci
COPY . .
CMD npm run build && node dist/src/index.js
EXPOSE 5001
