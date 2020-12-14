FROM node:latest as build
WORKDIR /app
COPY package.json package.json
RUN npm install
RUN npm install -g @angular/cli
COPY . .