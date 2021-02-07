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

    docker ps / docker ps -a

# to stop docker conatiner

    docker stop container_name
