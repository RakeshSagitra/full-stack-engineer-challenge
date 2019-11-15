FROM node:13.1.0-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install -g react-scripts@3.2.0 --silent
RUN npm install

COPY . /usr/src/app
RUN npm run build

EXPOSE 3000
CMD [ "npm", "start" ]