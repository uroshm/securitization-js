FROM node:18.19.0
ENV NODE_OPTIONS=--max_old_space_size=10240
WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install @angular/cli
RUN npm install @angular/material
RUN npm install @angular/router

CMD ["npm", "run", "start"]

EXPOSE 4200