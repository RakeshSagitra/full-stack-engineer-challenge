FROM node:13.1.0-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 4000
ENTRYPOINT ["bin/create_db.sh"]
CMD [ "npm", "start" ]
