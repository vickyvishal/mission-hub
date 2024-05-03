FROM node:latest

# Set the working directory in the container
WORKDIR /app/server

COPY package.json .

RUN npm install

COPY . .





CMD ["npm","run", "start"]
