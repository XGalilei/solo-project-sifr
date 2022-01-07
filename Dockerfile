FROM node
RUN mkdir -p /usr/app/first-docker-run
WORKDIR /usr/app/first-docker-run
COPY package.json /usr/app/first-docker-run/
RUN npm install
COPY . /usr/app/first-docker-run/
CMD ["npm", "run", "server"]