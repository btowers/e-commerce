FROM node:16.13.1-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

RUN ./node_modules/.bin/tsc

EXPOSE 8080

CMD ["node", "./dist/index.js"]
