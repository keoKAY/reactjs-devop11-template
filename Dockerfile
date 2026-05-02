FROM node:alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm i

# COPY  . . 
COPY src ./src
COPY public ./public 
RUN npm run build 


# Stage:2 production 
FROM nginx:latest
#FROM nginx:1.19
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]