FROM node:10

# エラーがでたので追加 22/12/01
RUN apk add --no-cache python make g++

# コンテナ内のwork dirを設定
WORKDIR /src

ENV PORT 8080
ENV HOST 0.0.0.0

# package.jsonをコピーして、パッケージのインストール
COPY package.json ./
RUN npm install

# ソースをコピーして、ビルド
COPY . .
RUN npm run build

# コンテナが起動したら、nuxtを起動するよう指定
CMD [ "npm", "run", "start" ]
