FROM node:14.19.1

WORKDIR /app
COPY ./ ./
RUN cd training_vue && rm -rf node_modules package-lock.json && npm install

VOLUME ["/app/training_vue/node_modules"]
