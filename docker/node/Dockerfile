FROM node:8.9.4-alpine

ENV LANG C.UTF-8
ENV APP_HOME /app
RUN apk update &&\
    apk add bash vim &&\
    npm install -g npm@5.6.0 &&\
    mkdir $APP_HOME
RUN adduser -S app && echo "app ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

COPY package.json npm-shrinkwrap.json $APP_HOME/
RUN chown -R app $APP_HOME/*
WORKDIR $APP_HOME
RUN npm install

USER app
COPY . $APP_HOME