FROM node:18-alpine

WORKDIR /src
COPY package.json /src/
RUN npm i

COPY . /src

EXPOSE 3000

# CMD ["node", "index.js"]
CMD ["npm", "start"]
