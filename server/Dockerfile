FROM node:lts-alpine

WORKDIR /usr/src
COPY package*.json .
RUN npm install
COPY . .

EXPOSE 4444

CMD ["npm", "run", "dev:server"]
