FROM node:latest as build
WORKDIR /app
COPY . .

FROM nginx:1.15.8-alpine
COPY --from=builder /app/dist/ratp/ /usr/share/nginx/html