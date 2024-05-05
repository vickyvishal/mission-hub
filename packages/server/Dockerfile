FROM node:latest

# Set the working directory in the container
WORKDIR /app/server

COPY package.json .

RUN npm install

COPY . .



EXPOSE 3000

CMD ["npm","run", "start"]
