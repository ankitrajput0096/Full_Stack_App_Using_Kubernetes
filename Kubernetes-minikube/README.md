# Full Stack Application Using Kubernetes Minikube

Full Stack Application using Spring boot, React, Redux, Material-ui, PostgreSQL and Docker using Kubernetes Minikube

## Getting Started
* Install minikube in your local system.
    * `Please follow this page for installation : https://minikube.sigs.k8s.io/docs/start/  `
* Install kubectl cli for connecting and deploying apps in kubernetes cluster
    * `Please follow this page for installation : https://kubernetes.io/docs/tasks/tools/install-kubectl/   `
* Once installation is complete, follow these commands : 
    * minikube start   => To start minikube kubernetes cluster
    * minikube addons enable ingress => To enable `ingress` addon in kubernetes cluster
    * kubectl apply -f kubernetes-minikube-scripts/  => To deploy all the services and deployments in kubernetes cluster of full stack application
    * kubectl get pods -w  => Wait till all the pods are in `Running` state
    * kubectl get ingress -w  => Wail till `ADDRESS` has IP of the ingress
    * Add `this IP` (which is under `ADDRESS`) to `/etc/host` file as
        *  127.0.0.1	localhost
        *  <This IP>    springapp.com
    * Open browser and search for : http://springapp.com/
    * That's All, your application is running

## DockerHub repositories 
The dockerhub repositories used in this project for backend and frontend docker images are as follows : 
* Backend Docker Image repository : https://hub.docker.com/repository/docker/ankitrajput/springboot_app_with_db
* Frontend Docker Image repository : https://hub.docker.com/r/ankitrajput/frontend-app-react

## Built With

* [Spring Boot](https://spring.io/projects/spring-boot) - Spring Boot 2
* [Maven](https://maven.apache.org/) - Dependency Management
* [Docker](https://www.docker.com/) - For containerization of application
* [PostgreSQL](https://www.postgresql.org/) - Database
* [React](https://reactjs.org/) - React
* [Redux](https://redux.js.org/) - Redux
* [Material-Ui](https://material-ui.com/) - Material-Ui
* [Kubernetes](https://kubernetes.io/) - Kubernetes

## Contributing

If you have any improvement suggestions please create a pull request and I'll review it.


## Authors

* **Ankit Rajput** - *Initial work* - [Github](https://github.com/ankitrajput0096)

## License

This project is licensed under the MIT License
