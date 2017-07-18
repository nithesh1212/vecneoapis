var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://52.71.161.217:27017/verizon_neo';
var str = "";

router.post('/', function(req, res, next) {
    
   

    
        MongoClient.connect(url, function(err, db) {
            var cursor = db.collection('Tickets').find();
            //noinspection JSDeprecatedSymbols
            cursor.each(function(err, item) {

                if (item != null) {
                    str = str + "    ticket_number  " + item.ticket_number + "</br>";
                }
            });
            res.send(str);
            db.close();
        });
    });

