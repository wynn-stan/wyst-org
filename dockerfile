FROM node:lts-slim

WORKDIR /usr/src/app

COPY package.json .

RUN yarn install

EXPOSE 2102

COPY . .

CMD ["npm", "run", "start-wrapped"]