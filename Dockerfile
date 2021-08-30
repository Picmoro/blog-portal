FROM node:alpine
WORKDIR /app
COPY ./app/package.json ./
COPY ./app/package-lock.json ./
COPY ./app ./
RUN npm i
CMD ["npm", "run", "start"]
