FROM public.ecr.aws/docker/library/node:lts-alpine

WORKDIR /usr/src
COPY . .
RUN npm install
EXPOSE 80
CMD ["node", "index.js"]
