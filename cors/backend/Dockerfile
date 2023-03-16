FROM public.ecr.aws/docker/library/node:lts-alpine

WORKDIR /usr/src/backend
COPY . .
RUN npm install
EXPOSE 8080
CMD ["node", "index.js"]
