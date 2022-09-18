FROM node:10

WORKDIR /src

ENV PORT 8080
ENV HOST 0.0.0.0

COPY package.json ./
RUN npm install

COPY . .
RUN npm run build

CMD [ "npm", "run", "start" ]
