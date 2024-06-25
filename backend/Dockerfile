FROM node:18.19.0
ENV NODE_OPTIONS=--max_old_space_size=10240
WORKDIR /usr/src
COPY package*.json ./
COPY . /usr/src

RUN npm install

CMD ["node", "src/app.js"]

EXPOSE 5000