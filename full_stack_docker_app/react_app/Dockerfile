# NOTE :
# Create new docker images for frontend using this docker file with image name in pattern as follows
# Pattern : ankitrajput/frontend-app-react:<version>
# Check and increase version by 1
# Sample Pattern : ankitrajput/frontend-app-react:2.0.0

# Base Image ubuntu
FROM ubuntu:18.04

# Installing dependencies
RUN apt-get update
RUN apt-get install -y curl 
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash
RUN apt-get install -y nodejs

# coping the required application files
COPY . /react_app
WORKDIR /react_app/react_app

# installing npm dependencies
RUN npm install

# running the react program
CMD ["npm", "run", "kubernetes"]
