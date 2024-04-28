FROM node:latest

# Set the working directory in the container
WORKDIR /app/backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000



CMD ["node", "server.js"]
