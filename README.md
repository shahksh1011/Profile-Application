# Profile Application

This application lets you perform operation like signin, signup, view profile and edit profile. All these operations are performed in  an Android app accessed through custom built api's.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Android Studio
Node.js
Java
```

### Installing

There are two folders to this project
1. ProfileApplication - It contains an android project.
2. webapp - Nodejs web application

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Clone the repo and open ProfileApplication folder inside android studio.
```

### API Routes
Application is hosted on a heroku app server.
Domain Link: [https://profile-application.herokuapp.com/](https://profile-application.herokuapp.com/)

All the routes takes header as:
Content-Type: application/json

#### Authentication Routes
1. /auth/signin - post
This api takes two parameters.
	1.	username
	2.	password
this api check for the user's authentication and returns the jwt token.

2. /auth/signup - post
This api takes following parameters.
	1. firstName
	2. lastName
	3. email - unique
	4. username - unique
	5. password - more than 7 characters
	6. city
	7. gender
It check for the user. If user already present then it won't sign up with that username. Once all the criteria are met it signup the new user and returns the jwt token

3. /user/profile - get
header:
Authorization: Bearer __Token__
It check for the provided user token and return the user data.

4. /user/edit - post
Api takes following parameters
	1. firstName
	2. lastName
	3. city
	4. gender
It updates the user data for the logged in user. If the request is successful it returns with the success message.
