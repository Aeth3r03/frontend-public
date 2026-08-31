# Compilar Angular
FROM node:22-slim AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Ahora servir con Nginx
FROM nginx:alpine
COPY --from=build /app/dist/frontend-publico/browser /usr/share/nginx/html
EXPOSE 80
