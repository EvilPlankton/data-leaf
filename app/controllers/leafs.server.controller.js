var mongoose = require('mongoose'),
    Leaf = mongoose.model('Leaf');

var csv = require('express-csv')
var dbWrapper = require('node-dbi').DBWrapper;

var jsonToHtmlTable = require('json-to-htmltable');

var getErrorMessage = function(err) {
    if (err.errors) {
        for (var errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].message;
        }
    } else {
        return 'Unknown server error';
    }
};

exports.create = function(req, res) {
    var leaf = new Leaf(req.body);
    leaf.creator = req.user;
    leaf.save(function(err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(leaf);
        }
    });
};

exports.list = function(req, res) {
    Leaf.find().sort('-created').populate('creator', 'name username').exec(function(err, leafs) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(leafs);
        }
    });
};

exports.read = function(req, res) {
    res.json(req.leaf);
};

exports.leafByID = function(req, res, next, id) {
    Leaf.findById(id).populate('creator', 'name username').exec(function(err, leaf) {
        if (err)
            return next(err);

        if (!leaf)
            return next(new Error('Failed to load leaf ' + id));

        req.leaf = leaf;
        next();
    });
};

exports.exec = function(req, res) {

    var dbWrapper = require('node-dbi').DBWrapper;

    var leaf = req.leaf;
    var dsn = leaf.dsn;

    var dbConnectionConfig = {
        'host': dsn.host + ':' + dsn.port,
        'user': dsn.user,
        'password': dsn.pwd,
        'database': dsn.dbname };

    // Replace the adapter name with "mysql", "mysql-libmysqlclient", "sqlite3" or "pg" on the following line :
    dbWrapper = new dbWrapper( dsn.dbtype, dbConnectionConfig );
    //dbWrapper.connect();
    dbWrapper.connect( function (err) {
      if (err) {
        res.status(400).send('Connection error: ' + err);
      }
    })

    dbWrapper.fetchAll(leaf.query, [], function(err, result) {
        if (err) {
          res.status(400).send('Fetch error: ' + err);
        } else {
          if (req.query.format == 'json') {
            res.send(result);
          } else if (req.query.format == 'csv') {
            res.csv(result);
          } else if (req.query.format == 'html') {
            res.send(jsonToHtmlTable(result));
          } else {
            res.send('SQL Results in ' + req.query.format + ' format: ' + JSON.stringify(result));
          }
        }
    });

};

exports.update = function(req, res) {

    var leaf = req.leaf;
    leaf.query = req.body.query;
    leaf.name = req.body.name;
    leaf.dsn.host = req.body.dsn.host;
    leaf.dsn.port = req.body.dsn.port;
    leaf.dsn.user = req.body.dsn.user;
    leaf.dsn.pwd = req.body.dsn.pwd;
    leaf.dsn.dbname = req.body.dsn.dbname;
    leaf.dsn.dbtype = req.body.dsn.dbtype;
    leaf.created = Date.now();

    leaf.save(function(err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(leaf);
        }
    });
};

exports.delete = function(req, res) {
    var leaf = req.leaf;
    leaf.remove(function(err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(leaf);
        }
    });
};

exports.hasAuthorization = function(req, res, next) {
    if (req.leaf.creator.id !== req.user.id) {
        return res.status(403).send({
            message: 'User is not authorized'
        });
    }
    next();
};

exports.isLocal = function(req, res, next) {
    var hostmachine = req.headers.host.split(':')[0];
    if(hostmachine !== 'localhost')
         return res.send(401);
    next();
};
