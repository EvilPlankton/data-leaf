# :herb: Data Leaf
### *_Dynamic data sharing made simple._*

The Data Leaf app allows users to share results of SQL queries by associating them with a URL that can be easily shared and embedded into reports, spreadsheet and dashboards. When the URL is requested, the query is executed and results returned in CSV format.

  - The Data Leaf URL can be embedded into Excel and Google Sheets
  - Lightweight interface
  - Supports Postgres and MySQL targets
  - Individual user accounts
  - Duplicate & Edit Leaf definitions for quick customization
  - The Data Leaf URL contains only the domain name and ID of the Leaf definition

### Tech

Data Leaf uses a number of open source projects to work properly:

* [AngularJS] - HTML enhanced for web apps!
* [Bootstrap] - great UI boilerplate for modern web apps
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework
* [node-dbi] - Database package wrapper to support multiple RDBMS engines
* [MongoDB] - JSON document data store
* [ngclipboard] - Easy Angular access to the clipboard for copying the Data Leaf URL
* [mongoose] - ORM for node access to MongoDB
* [mongoose-encryption] - encrypt documents/fields in MongoDB on the fly
* [Passport] - For local user account support, authentication, and OAUTH support
* [angular-better-placeholders] - Maintains better placeholder visibility

Supplemental Tech worth mentioning:

* [npm] - Node package manager
* [bower] - Client package manager
* [connect-flash] - Passport/Express access to browser Flash area
* [jQuery] - for Bootstrap support only
* [pg] - Node Postgres driver, required by node-dbi
* [mysql] - Node MySQL driver, required by node-dbi
* [ejs] - Express rendering engine
* [npm-check-updates] - Node package updater
* [nodemon] - Node runner with automatic restarts

### Installation

Prerequisites:

Node
NPM
Bower
MongoDB

Install package
```sh
$ npm install data-leaf
```

Set ENV variable for document encryption secret key <— *Do NOT lose this key*
```sh
$ export SK=someUnguessableString
```

Start the server
```sh
$ cd data-leaf
$ node server.js
```

Use the app
http://localhost:3000

### Todos

 - Move MongoDB credentials to env-specific config file
 - Add timeout for blocked/hung SQL requests
 - Add/test Google OATH strategy via Passport
 - Dynamic Passport strategies on login/register pages

### Special Thanks

 - [Cloud9] - Online IDE

License
----

MIT


   [node.js]: <http://nodejs.org>
   [Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [Express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [node-dbi]: <https://github.com/DrBenton/Node-DBI>
   [MongoDB]: <https://www.mongodb.com/>
   [ngclipboard]: <https://sachinchoolur.github.io/ngclipboard/>
   [mongoose]: <http://mongoosejs.com/>
   [mongoose-encryption]: <https://www.npmjs.com/package/mongoose-encryption>
   [Passport]: <http://passportjs.org/>
   [angular-better-placeholders]: <http://dmackerman.github.io/angular-better-placeholders/#/>
   [npm]: <https://www.npmjs.com/>
   [bower]: <http://bower.io/>
   [connect-flash]: <https://www.npmjs.com/package/connect-flash>
   [pg]: <https://github.com/brianc/node-postgres>
   [mysql]: <https://github.com/felixge/node-mysql>
   [ejs]: <https://www.npmjs.com/package/ejs>
   [npm-check-updates]: <https://www.npmjs.com/package/npm-check-updates>
   [nodemon]: <http://nodemon.io/>
