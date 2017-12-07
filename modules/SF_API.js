"use strict";
var bodyParser = require('body-parser');
var nForceAuth = require('nforce'),
Promise = require('promise'),
//SFclientId ='3MVG9d8..z.hDcPIiJoaFcNQCdDyqq1f3adQwoqOsXEy74V5w4npSVjEP5NmM79Ik2Kpap14NB2zvZzp2E4eZ',
//SFSecret ='3105483709603369657',
//SFusername ='feuji@connect123.com.dev',
//SFpassword ='login@123'
SFclientId ='3MVG982oBBDdwyHi3JLlKlcc4phUZoR0jaa8yh.Acj4i.fJInCiyO3114uoyxfaUjxEu9V___EMxe.kNJ3GST',
SFSecret ='4936589941981617380',
SFusername ='steven1@connect-123.com.dev',
SFpassword ='backpack23@'

;

var AccessToken = '';
var connection = nForceAuth.createConnection({
	clientId: SFclientId,
	clientSecret: SFSecret,
	redirectUri: 'https://feuji-testing.herokuapp.com/facebook',
	mode: 'single',
	autoRefresh:true});

connection.authenticate({ username: SFusername, password: SFpassword }, function(err,resp){
	 if (err) {
         console.log("Authentication error - " + err);
     } else {
         console.log('Authentication successful. Cached Token: ' + connection.oauth.access_token);
         AccessToken = resp.access_token;
         console.log('Authentication Access: ' + AccessToken);
     }
});

 var IntialIntract = function(Id)
{
	return new Promise(function(resolve, reject){
	//connection.query({query: "SELECT Name, Amount FROM Opportunity where Id ='0067F000004YR3c'" }, function(err, res)
	connection.query({query: "SELECT Name, Id,mobilephone  FROM User Where Division = '"+Id+"'" }, function(err, res)	
			{
	    if(err)
	    { console.error(err);
	    	reject("AnError Occured");}
	    	    else { 
	    	    	var contact = res;
	    	    	console.log("QUERY RESULT IS");
	    	    	console.log(contact);
	   resolve(res.records);
	   }
	   });
	});
};



exports.IntialIntract = IntialIntract;
exports.connection = connection;
exports.AccessToken = AccessToken;

