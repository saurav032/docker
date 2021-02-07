# to change permission

- sudo chmod 777 /var/run/docker.sock

# sample docker file

- # Dockerfile

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

docker run -p 8000:80 -d --rm image_name

# to inspect an image

    docker image inspect image_id

# to copy a file into docker container

    docker cp dummy/. container_name:/test

# to copy a file from docker container

    docker cp conatiner_name:/test dummy

# naming a container (myapp)

    docker run -p 8000:3000 -d --rm --name myapp image_name

# naming and tagging a image (name -> myimage, tag -> latest)

    docker build -t myimage:latest .

    docker build -t myimage:1 .

# naming a container (myapp)

    docker run -p 8000:3000 -d --rm --name myapp myimage:latest

# to rename an image

    docker tag myimage:latest saurav032/firstimage:latest

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
