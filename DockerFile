FROM node:latest as build
WORKDIR /app
COPY package.json package.json
RUN npm install
COPY . .
RUN ng build --prod --aot