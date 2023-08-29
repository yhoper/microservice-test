FROM node:16-alpine

ARG BASE_DIR=backend1

WORKDIR /application

COPY ${BASE_DIR}/package.json .

RUN yarn install

COPY ${BASE_DIR}/. . 

CMD ["yarn","run",  "start" ]