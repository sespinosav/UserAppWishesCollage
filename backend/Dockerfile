# Use a lighter version of Node as a parent image
FROM mhart/alpine-node:8.11.4
WORKDIR /backend 
COPY package*.json /backend/
RUN npm install
COPY . /backend/
EXPOSE 3050
CMD ["npm", "start"]
