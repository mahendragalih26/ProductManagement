# INTRO TO BACKEND

![](https://img.shields.io/badge/Code%20Style-Standard-informational.svg)
![](https://img.shields.io/badge/Dependencies-Express-success.svg)
![](https://img.shields.io/badge/License-ISC-orange.svg)

<p align="center">
  <a href="https://nodejs.org/">
    <img alt="restfulapi" title="Restful API" src="https://cdn-images-1.medium.com/max/871/1*d2zLEjERsrs1Rzk_95QU9A.png">
  </a>
</p>

----
## Table of contents
* [Prerequiste](#prerequiste)
* [Installation](#installation)
* [Documentation](#documentation)
* [License](#license)

## Prerequiste
- Node.js - Download and Install [Node.js](https://nodejs.org/en/) with [NVM](https://github.com/creationix/nvm) (Node Version Manager) - Simple bash script to manage multiple active node.js versions.
- MySQL - Download and Install [MySQL](https://www.mysql.com/downloads/) - Make sure it's running on the default port.
- Postman - Download and Install [Postman](https://www.getpostman.com/downloads) - Implementation with postman latest version.

## Installation
### Clone

$ git clone https://github.com/fastaman993/intro-to-js.git
$ cd intro-to-js
$ npm install


### Create Environment Variable

$ cp .env.example .env
$ nano .env



SERVER_PORT = YOUR-PORT

DB_HOST = "YOU-DB-HOST"
DB_USER = "YOUR-DB-USER"
DB_PASSWORD = "YOUR-DB-PASSWORD"
DB_NAME = "YOUR-DB-NAME"
DB_SOCKET = "YOUR-DB-SOCKET" //optional

### Start Development Server

$ npm start


## Documentation

### Books Routes

#### GET Request

 - "/product" => display all product, with default pagination {page:1, limit:5}. Query params:
	- page -> page to display (default 1),
	- limit -> number of product displayed in a page (default 5).

 - "/main/product/{id}" => display one product with the id specified by id parameter.
 - "/main/product?field={name}" => display product specified by name parameter.
 - "/main/product?search={sawi}&sort={branch}" => display product specified by search and sort parameter.

#### POST Request

 - "/main/product" => Inserting a new bike to bikes tables. Data required = name, type, branch, price.

#### PATCH Request

 - "/main/product/update/{productID}" => Updating a existing product in tables. Data required = ID and parameter that needs to update.

#### DELETE Request

 - "/main/product/delete/{productID}" => Deleting a existing product in tables. Data required = productID.


### License
----
[ISC](https://en.wikipedia.org/wiki/ISC_license "ISC")
