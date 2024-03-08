FROM node:16-alpine
WORKDIR /site
COPY package.json /site
RUN npm install
COPY . /site
EXPOSE 80
CMD ["node", "main.js"]