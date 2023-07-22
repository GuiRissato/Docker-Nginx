FROM node:latest AS builder

WORKDIR /usr/src/app

COPY . .

RUN npm install

FROM node:alpine

WORKDIR /usr/src/app
RUN rm -rf /usr/src/app/*

COPY --from=builder /usr/src/app .

EXPOSE 3000

CMD [ "node", "app.js" ]