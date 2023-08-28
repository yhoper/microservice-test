FROM node:16-alpine

WORKDIR /application

COPY package.json .

RUN yarn install

COPY . . 

CMD ["yarn","run",  "start" ]