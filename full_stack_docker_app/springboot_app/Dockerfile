# NOTE :
# Create new docker images for backend using this docker file with image name in pattern as follows
# Pattern : ankitrajput/springboot_app_with_db:<version>
# Check and increase version by 1
# Sample Pattern : ankitrajput/springboot_app_with_db:4.0.0

# Base Image ubuntu
FROM ubuntu:18.04

# Installing dependencies
RUN apt-get update
RUN apt-get install -y openjdk-8-jdk maven 

# coping the required application files
COPY . /springboot_app
WORKDIR /springboot_app/springboot

# building the spring boot app
RUN mvn clean install

WORKDIR /springboot_app/springboot/target


# running the spring boot app
CMD ["java", "-jar", "Spring_Boot_Application-0.0.1-SNAPSHOT.jar"]

