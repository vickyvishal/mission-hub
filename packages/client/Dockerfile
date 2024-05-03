
FROM node:latest





WORKDIR /app/client

COPY package.json .

RUN npm install


COPY . .

EXPOSE 8080


CMD ["npm","run", "dev"]