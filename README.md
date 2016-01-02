# :herb: Data Leaf
### *_Dynamic data sharing made simple._*

The Data Leaf app allows users to share results of SQL queries by associating them with a URL that can be easily shared and embedded into reports, spreadsheet and dashboards. When the URL is requested, the query is executed and results returned in CSV format.

  - The Data Leaf URL can be embedded into Excel and Google Sheets
  - Lightweight interface
  - Supports Postgres and MySQL targets
  - Individual user accounts
  - Duplicate & Edit Leaf definitions for quick customization
  - The Data Leaf URL contains only the domain name and ID of the Leaf definition

The Data Leaf project was created to enhance the process of sharing data between analysts with SQL expertise and folks interested in reports and dashboards, such as those in Senior Management, Finance or HR departments.

Manual steps in the typical report-request process can be removed, and turn-around time for the report request can be considerably reduced and, in many cases, eliminated.

### Version
0.5.0

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
* [angular-better-placeholders] - Normal placeholders are short-lived

Supplemental Tech worth mentioning:

* [npm] - Node package manager
* [bower] - Client package manager
* [connect-flash] - Passport/Express access to browser Flash area
* [jQuery] - for Bootstrap support only
* [pg] - Node Postgres driver, required by node-dbi
* [mysql] - Node MySQL driver, required by node-dbi
* [ejs] - Express rendering engine
* [npm-check-updates] - Node package updater

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

Set ENV variable for document encryption secret key <— Do NOT lose this key
```sh
$ SK=someUnguessableString
```

Start the server
```sh
$ cd data-leaf
$ node server.js
```

Use the app
http://localhost:3000

### Todos

 - Write Tests
 - Move MongoDB credentials to env-specific config file
 - Add timeout for blocked/hung SQL requests
 - Add/test Google OATH strategy via Passport

### Special Thanks

 - Cloud9 - The Online IDE that changed everything for me

License
----

MIT

[//]:

   [node.js]: <http://nodejs.org>
   [Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
