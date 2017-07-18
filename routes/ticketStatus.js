var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://52.71.161.217:27017/verizon_neo';
var str = "";




router.post('/', function(req, res, next) {

    MongoClient.connect(url, function(err, db) {

           
            var ticketNumber = req.body.ticketNumber;
            var serviceId = req.body.serviceId;

            var query = {};

            if (ticketNumber )
                query.ticket_number = ticketNumber;

            var cursor = db.collection('Tickets').find(query).toArray();
            cursor.then(function(result){
                console.log(result);
                res.send(result);
                db.close();
            });
	
    });
});

	
	
module.exports = router;
