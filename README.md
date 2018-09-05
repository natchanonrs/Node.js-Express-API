# Node.js-Express-API

RESTful API for CRUD operation using Node.js, Express framwork and MongoDB.

## Prerequisites

Node.js and npm
```
  sudo apt install nodejs
  sudo apt install npm
```
MongDB
```
  sudo apt install -y mongodb
```

## Installation

1. clone this git
```
  git clone https://github.com/natchanonrs/Node.js-Express-API.git
```

2. run npm install
```
  cd ./Node.js-Express-API
  npm install
```

3. create Mongo database via mongo shell
```
  use mongojs
  db.createCollection("employees")
```

## Usage
run the server
```
  node index.js
```

provide RESTful API functions:
* GET /employees          get list of all employees
* GET /employees/{id}     get employee with id
* POST /employees         create employee
* PUT /employees/{id}     update employee data with id
* DELETE /employees/{id}  delete employee with id

## Built With
Node.js package:
* Express - Web framwork
* Cors - Used to enable CORS
* Body-parser - Parsing body html to json
* Morgan - Logger
* Mongojs - Used to connect to Mongodb server
