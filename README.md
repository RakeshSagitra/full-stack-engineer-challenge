# Introduction

This project is a sample application created with respect to full-stack-engineer-challenge (https://github.com/guardrailsio/full-stack-engineer-challenge)

## Main components of  the project

- **Nodejs back-end app**: The backend is createe using node and expressjs. It uses Postgres as Database and sequelize as an ORM layer.
- **Reactjs front-end app**: React app is using react hooks feature for state management. It also uses React material UI library for UI styling 
- **Docker compose file**: This file spins up the containers of each of the above application and sets up the database

## Assumptions

Docker and docker compose version 3 is already installed on the system on which you are trying to run the application.

## Steps to run the application

1. Clone the repository
```
cd full-stack-engineer-challenge/
```

2. Run docker compose to spin up th containers
```
sudo docker-compose up --build
```

3. Hit `localhost:3000` on the browser to access the web application

## Stopping the application

Run below command to stop the running containers
```
docker-compose down
```
## Using the application

- Once the application is up it shows list of Security Scan Reports. Initially, it will not contain any reports as the application is just set up.
- You can create your first Security Scan Report clicking on the add scan button on the top left corner.
- Once you add your scan report it will redirect you to listing page.
- There you can see the list now has one entry (that you just created)
- you can also see the details of the scan by clicking on the Details button.
- On the details page, we have in-depth details of the security scans.