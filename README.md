# Introduction

This project is a sample application created with respect to full-stack-engineer-challenge (https://github.com/guardrailsio/full-stack-engineer-challenge)

## Main components of  the project

Nodejs back-end app,
Reactjs front-end app,
Docker compose file

## Assumptions

Docker installation exists on the system on which you are trying to run the application.

## Steps to run the application

```python
Clone the repository
cd full-stack-engineer-challenge/
sudo docker-compose up --build
hit localhost:3000 on your browser
```
## Using the application

Once the application is up it shows list of Security Scan Reports. Initially, it will not contain any reports as the application is just set up.

You can create your first Security Scan Report clicking on the add scan button on the top left corner.

Once you add your scan report it will redirect you to listing page, there you can see the list now has one entry (that you just created), you can also see the details of the scan by clicking on the Details button.

On the details page, we have in-depth details of the security scans.