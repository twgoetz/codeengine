FROM node:12-alpine
RUN addgroup -S testuser && adduser -S testuser -G testuser -u 1007
USER testuser
WORKDIR /home/testuser
COPY package*.json .
RUN npm install
COPY server.js .
EXPOSE 8080
CMD [ "node", "server.js" ]
