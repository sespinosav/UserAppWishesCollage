# Use a lighter version of Node as a parent image
FROM mhart/alpine-node:8.11.4 
WORKDIR /frontend 
COPY package*.json /frontend/
RUN npm install
COPY . /frontend/ 
EXPOSE 80
CMD ["npm", "start"]
