FROM node:16-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm i -D @sveltejs/adapter-node@1.0.0-next.82
RUN npm ci


COPY . .

RUN npm run build

FROM node:16-alpine

WORKDIR /app

COPY --from=build /app/package*.json /app/build ./
COPY --from=build /app/node_modules ./node_modules
COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
