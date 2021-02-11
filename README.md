# to change permission

sudo chmod 777 /var/run/docker.sock

# sample docker file

# Dockerfile

FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]

# to Build image

    docker build .

# to run docker image

    docker run -d -p 8000:3000 image_name

# to run docker image in interactive mode

    docker run -it node

# to check running process

    docker ps

# to check all process

    docker ps -a

# to stop docker conatiner

    docker stop container_name

# to start a docker container

    docker start container_name

    docker start -a container_name -> attached mode

    docker start -d container_name -> deattached mode

    docker start -a -i container_name -> attached mode interactive

# to remove a docker conatiner

    docker rm container_name

# to see docker images

    docker images

# to remove a stop container docker image

    docker rmi image_id

# to remove all unused docker image

    docker image prune

# to remove a conatiner automatically

docker run -p 8000:3000 -d --rm image_name

# to inspect an image

    docker image inspect image_id

# to copy a file into docker container

    docker cp dummy/. container_name:/test

# to copy a file from docker container

    docker cp conatiner_name:/test dummy

# naming a container (myapp)

    docker run -p 8000:3000 -d --rm --name myapp image_name

# naming and tagging a image (name -> myappimage, tag -> latest)

    docker build -t myappimage:latest .

    docker build -t myappimage:1 .

# naming a container (myapp)

    docker run -p 8000:3000 -d --rm --name myapp myappimage:latest

# to rename an image

    docker tag myappimage:latest saurav032/firstimage:latest

# to build an image with name

    docker build -t saurav032/firstimage .

# docker login

    docker login

# docker logout

    docker logout

# to push an image to docker hub

    docker push saurav032/firstimage

# to pull an image from docker hub

    docker pull saurav032/firstimage

# to run a conatiner with annonymous voluemes

    FROM node:14

    WORKDIR /app

    COPY package.json .

    RUN npm install

    COPY . .

    EXPOSE 3000

    VOLUME ["/app/node_modules"]

    CMD ["node", "server.js"]

# to run a container with named volumes

    docker run -d -p 8000:3000 --rm --name myapp -v data:/app/data myappimage:latest

# volume list

    docker volume ls

# inspect docker volume

    docker volume inspect vol_name

# remove volume

    docker volume rm vol_name
    docker volume prune

# bind mounts (run time edit the code)

    docker run -d -p 8000:3000 --rm --name myapp -v data:/app/data -v "/home/saurav/docker/p1:/app" -v /app/node_modules myappimage:latest
    docker run -d -p 8000:3000 --rm --name myapp -v data:/app/data -v $(pwd):/app -v /app/node_modules myappimage:latest

# read only volumes

    docker run -d -p 8000:3000 --rm --name myapp -v data:/app/data -v "/home/saurav/docker/p1:/app:ro" -v /app/temp myappimage:latest

# logs

    docker logs myapp

# .dockerignore file

    node_modules
    Dockerfile
    .git

# argument & env variables

    FROM node:14

    WORKDIR /app

    COPY package.json .

    RUN npm install

    COPY . .

    ENV PORT 3000

    EXPOSE $PORT

    VOLUME ["/app/node_modules"]

    CMD ["node", "server.js"]

    =====================

    docker run -d -p 8000:5000 --env PORT=5000 --rm --name myapp -v data:/app/data -v "/home/saurav/docker/p1:/app" -v /app/node_modules myappimage:latest

    docker run -d -p 8000:5000 --env PORT=5000 --rm --name myapp -v data:/app/data -v "/home/saurav/docker/p1:/app" -v /app/node_modules myappimage:latest

    docker run -d -p 8000:5000 --env-fle ./.env --rm --name myapp -v data:/app/data -v "/home/saurav/docker/p1:/app" -v /app/node_modules myappimage:latest

    =====================

    FROM node:14

    ARG DEFAULT_PORT=3000

    WORKDIR /app

    COPY package.json .

    RUN npm install

    COPY . .

    ENV PORT $DEFAULT_PORT

    EXPOSE $PORT

    VOLUME ["/app/node_modules"]

    CMD ["node", "server.js"]

    =======================

    docker build -t myappimage:latest --build-arg DEFAULT_PORT=5000

# to connect to host database

    mongodb://host.docker.internal:27017/mydb

# to craete a network

    docker network create mynetwork

# network listing

    docker network ls

# to run mongodb in a container

    docker run -d --name mongodb --netowrk mynetwork mongo

# to connect to container database

    mongodb://mongodb:27017/mydb

# to run docker image in a network

    docker run --name myapp --network mynetwork -d --rm -p 8000:3000 myappimage

# to start a react app in dev mode

    docker run --name my-frontend-app --rm -p 3000:3000 -i myappimage

# to run mongodb with named volume to persiste data

    docker run --name mongodb -v data:/data/db --rm -d --network mynetwork mongo

# to run mongodb with username, passowrd and named volume to persiste data

    docker run --name mongodb -v data:/data/db --rm -d --network mynetwork --env MONGO_ININTBD_ROOT_USERNAME=saurav --env MONGO_INITDB_ROOT_PASSWORD=secret mongo

    "momgodb://saurav:secret@mongodb:27017/mydb?authSource=admin"

# to start a react app in dev mode with live source code update

    docker run -v /home/saurav/app/src:/app/src  --name my-frontend-app --rm -p 3000:3000 -i myappimage

# docker-composer

```
version: "3.8"
services:
  mongodb:
    image: "mongo"
    volumes:
      - data:/data/db
    # environment:
    #   MONGO_INITDB_ROOT_USERNAME: saurav
    #   MONGO_INITDB_ROOT_PASSWORD: secret

        # - MONGO_INITDB_ROOT_USERNAME=saurav
    env_file:
      - ./env/mongo.env
    # networks:
    #  - my-network

  backend:

  frontend:

volumes:
  data:

```
