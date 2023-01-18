FROM node:14.9.0 AS build-step
WORKDIR /src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 4300
CMD ng serve