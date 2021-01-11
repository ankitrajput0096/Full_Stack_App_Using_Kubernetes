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

