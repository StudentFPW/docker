# Download the image for our react.
FROM node:latest

# Create a directory to store application code inside the image.
RUN mkdir /usr/src/app

# To link your application source code to a Docker image, use the COPY statement.
COPY ./app /usr/src/app/

# Then we set the directory to be the working directory for your application.
WORKDIR /usr/src/app

# To install npm dependencies from package.json run the following command.
RUN npm install

# Our application binds to port 3000, so we will use the EXPOSE statement to have the docker daemon map it.
EXPOSE 3000

# Finally, we define a command to run the application inside the container.
ENTRYPOINT [ "npm" , "start" ]
