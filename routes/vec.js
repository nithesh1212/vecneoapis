var express = require('express');
var router = express.Router();
var Store = require("jfs");
var db = new Store("data",{pretty:true});



router.post('/vec', function(req, res, next) {
	
	var ticketNumber = req.body.ticketNumber;
	
	//var returndate = req.query.returndate;
	var obj = db.getSync("ticketDetails");
	var result = {
        "data":[]
    };		
    	obj.data.map(function(data){
    		if(data.ticket_number === ticketNumber){
    			//flight.type = "going";
    			result.data.push(data);
    		} /*else if(flight.date === date && flight.departureairport.code === to && flight.arrivalairport.code === from){
               flight.type = "return";
               result.flights.push(flight);
    		}*/
    	});

    res.send(result);
    	
});

	
	
module.exports = router;
