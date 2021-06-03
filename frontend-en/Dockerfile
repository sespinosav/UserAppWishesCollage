# Use a lighter version of Node as a parent image
FROM mhart/alpine-node:8.11.4 
WORKDIR /frontend-en 
COPY package*.json /frontend-en/
RUN npm install
COPY . /frontend-en/ 
EXPOSE 3001
CMD ["npm", "start"]
