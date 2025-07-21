FROM node:20-slim

RUN yarn global add firebase-tools


# firebase-tools と git をインストール
RUN apt-get update && apt-get install -y git bash
RUN yarn global add firebase-tools

WORKDIR /app
COPY . .

CMD [ "sh" ]