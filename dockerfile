FROM node:18-alpine

WORKDIR /src
COPY package.json /src/
RUN yarn install

COPY . /src

EXPOSE 3000

# CMD ["node", "server.js"]
CMD ["yarn", "start"]
