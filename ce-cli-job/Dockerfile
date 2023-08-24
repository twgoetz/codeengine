FROM public.ecr.aws/docker/library/node:lts-alpine

WORKDIR /usr/src
COPY . .
RUN chmod +x ./run.sh
CMD ["./run.sh"]
