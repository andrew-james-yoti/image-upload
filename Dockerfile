FROM node:lts-alpine3.11

# Need to specify volume so certs can be read locally
# Perhaps specify certs path env var

WORKDIR /src

COPY ./package.json /src/package.json

RUN npm install

COPY . /src

EXPOSE 3000

CMD ["npm", "start"]
