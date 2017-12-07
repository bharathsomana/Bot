"use strict";
var request = require('request');
var SF = require('./SF_API');
var ST = require('./SetTemplate');

exports.sf = SF;
function firstEntity(nlp, name) {
	console.log('reached firstentity'+JSON.stringify(nlp));
  return nlp && nlp.entities && nlp.entities && nlp.entities[name] && nlp.entities[name][0];
}

function handleMessage(message,sender) {
  // check greeting is here and is confident
	if(message.text == 'Commands' || message.text == 'commands'){
		botResponse( { text: 'here are the list of commands  available. \n Todo \n Documents \n Events \n Info \n Weather \n PhoneBook \n Setup \n Person' },sender);
		return;
	}
  const greeting = firstEntity(message.nlp, 'greetings');
  const greetingamount = firstEntity(message.nlp, 'amount_of_money');
  const courseDetails = firstEntity(message.nlp, 'intent');
  console.log('hellooooooooooo'+JSON.stringify(courseDetails));
  /*
  if (greeting && greeting.confidence > 0.8) {
	  //botResponse();
	  console.log('came to greeting');
	  botResponse({ text: 'Hi Good Morning'},sender);
  } else if(greetingamount.confidence > 0.8){ 
	  botResponse( { text: '20USD' },sender);
	  console.log('came to greeting amount');
  }*/
  if(courseDetails && courseDetails.confidence > 0.8){
	  console.log('came to courses'+courseDetails.value);
	  if(courseDetails.value == "courses"){
		  botResponse( { text: 'here are the list of courses available' },sender);
	  }
	  if(courseDetails.value == "contact for Barcelona"){
		  var cMessage = ""	;	
		  SF.IntialIntract('Barcelona').then(function(results)
					{
					console.log("BEFORE ST CALL");	
					cMessage = ST.formatContact(results); 
					//botResponse({text:cMessage},sender);
					console.log("formatted response is "+cMessage);
					botResponse( { text: cMessage },sender);
				
					});
			//console.log("formatted response outsude  "+cMessage);
		  		//botResponse( { text: cMessage },sender);
	  }
	  if(courseDetails.value == "contact for Cape Town"){
		  var cMessage = ""	;	
		  SF.IntialIntract('Cape Town').then(function(results)
					{
					console.log("BEFORE ST CALL");	
					cMessage = ST.formatContact(results); 
					//botResponse({text:cMessage},sender);
					console.log("formatted response is "+cMessage);
					botResponse( { text: cMessage },sender);
				
					});
			//console.log("formatted response outsude  "+cMessage);
		  		//botResponse( { text: cMessage },sender);
	  }
	  if(courseDetails.value == "contact for Buenos Aires"){
		  var cMessage = ""	;	
		  SF.IntialIntract('Buenos Aires').then(function(results)
					{
					console.log("BEFORE ST CALL");	
					cMessage = ST.formatContact(results); 
					//botResponse({text:cMessage},sender);
					console.log("formatted response is "+cMessage);
					botResponse( { text: cMessage },sender);
				
					});
			//console.log("formatted response outsude  "+cMessage);
		  		//botResponse( { text: cMessage },sender);
	  }
	  if(courseDetails.value == "contact for Shanghai"){
		  var cMessage = ""	;	
		  SF.IntialIntract('Shanghai').then(function(results)
					{
					console.log("BEFORE ST CALL");	
					cMessage = ST.formatContact(results); 
					//botResponse({text:cMessage},sender);
					console.log("formatted response is "+cMessage);
					botResponse( { text: cMessage },sender);
				
					});
			//console.log("formatted response outsude  "+cMessage);
		  		//botResponse( { text: cMessage },sender);
	  }
	  if(courseDetails.value == "Destinations"){
		  var subBody1 = 
		  '{'+
		      '"media_type": "image",'+
		      '"url": "https://www.facebook.com/527608537575978/photos/a.542585452744953.1073741825.527608537575978/542585466078285/?type=1&theater",'+
		      '"buttons": ['+
		        '{'+
		            '"type": "web_url",'+
		            '"url": "https://www.connect-123.com/destinations/barcelona-spain/",'+
		            '"title": "View Barcelona in Website",'+
		         '}'+
		      ']'+
		   '}';  
		  var subBody2 = '{'+
			      '"media_type": "image",'+
			      '"url": "https://www.facebook.com/527608537575978/photos/a.542585452744953.1073741825.527608537575978/542585462744952/?type=1&theater",'+
			      '"buttons": ['+
			        '{'+
			            '"type": "web_url",'+
			            '"url": "https://www.connect-123.com/destinations/buenos-aires-argentina/",'+
			            '"title": "View Buenos Aires in Website",'+
			         '}'+
			      ']'+
			   '}'; 
		  var subBody3 = '{'+
	      '"media_type": "image",'+
		      '"url": "https://www.facebook.com/527608537575978/photos/a.542585452744953.1073741825.527608537575978/542585512744947/?type=1&theater",'+
		      '"buttons": ['+
		        '{'+
		            '"type": "web_url",'+
		            '"url": "https://www.connect-123.com/destinations/dublin-ireland/",'+
		            '"title": "View Dublin in Website",'+
		         '}'+
		      ']'+
		   '}';
		  var subBody4 = '{'+
	      '"media_type": "image",'+
		      '"url": "https://www.facebook.com/527608537575978/photos/a.542585452744953.1073741825.527608537575978/542585469411618/?type=1&theater",'+
		      '"buttons": ['+
		        '{'+
		            '"type": "web_url",'+
		            '"url": "https://www.connect-123.com/destinations/shanghai-china/",'+
		            '"title": "View Shanghai in Website",'+
		         '}'+
		      ']'+
		   '}';
		  var subBody5 ='{'+
	      '"media_type": "image",'+
		      '"url": "https://www.facebook.com/527608537575978/photos/a.542585452744953.1073741825.527608537575978/542592852744213/?type=3&theater",'+
		      '"buttons": ['+
		        '{'+
		            '"type": "web_url",'+
		            '"url": "https://www.connect-123.com/destinations/cape-town-south-africa/",'+
		            '"title": "View Cape Town in Website",'+
		         '}'+
		      ']'+
		   '}';
		  var bodyString1 = '{'
			   	+'"type":"template",'
			      +'"payload":{'
			        +'"template_type":"media",'
			        +'"elements":['
			          +subBody1
			        +']'
			      +'}'
			    +'}';
		  var bodyString2 = '{'
			   	+'"type":"template",'
			      +'"payload":{'
			        +'"template_type":"media",'
			        +'"elements":['
			          +subBody2
			        +']'
			      +'}'
			    +'}'; 
		  var bodyString3 = '{'
			   	+'"type":"template",'
			      +'"payload":{'
			        +'"template_type":"media",'
			        +'"elements":['
			          +subBody3
			        +']'
			      +'}'
			    +'}'; 
		  var bodyString4 = '{'
			   	+'"type":"template",'
			      +'"payload":{'
			        +'"template_type":"media",'
			        +'"elements":['
			          +subBody4
			        +']'
			      +'}'
			    +'}'; 
		  var bodyString5 = '{'
			   	+'"type":"template",'
			      +'"payload":{'
			        +'"template_type":"media",'
			        +'"elements":['
			          +subBody5
			        +']'
			      +'}'
			    +'}'; 
		 
		  botResponse( { attachment: bodyString1 },sender);
		  botResponse( { attachment: bodyString2 },sender);
		  botResponse( { attachment: bodyString3 },sender);
		  botResponse( { attachment: bodyString4 },sender);
		  botResponse( { attachment: bodyString5 },sender);
	  }
	  else if(courseDetails.value == "volunteer"){
		  var subBody = "";
		  subBody =  '{'
	          +'"title":"Welcome to Connect123",'
	          +'"image_url":"https://www.connect-123.com/wp-content/themes/connect123/images/connect123-logo.jpg",'
	          +'"subtitle":"We\'ve got the right Volunteer Programs for you.",'
	          +'"default_action": {'
	            +'"type": "web_url",'
	            +'"url": "https://www.connect-123.com/programs/volunteer/",'
	            +'"messenger_extensions": true,'
	            +'"webview_height_ratio": "tall",'
	            +'"fallback_url": "https://www.connect-123.com/programs/volunteer/"'
	          +'},'
	          +'"buttons":['
	            +'{'
	              +'"type":"web_url",'
	              +'"url":"https://connect-123.com",'
	              +'"title":"View Website"'
	            +'}'              
	          +']'   
	        +'},'
	        +'{'
	          +'"title":"Volunteer in Barcelona",'
	          +'"image_url":"https://www.connect-123.com/wp-content/uploads/2016/02/Barcelona-Mercat-de-La-Boqueria-de.jpg",'
	          +'"subtitle":"VOLUNTEER IN BARCELONA",'
	          +'"default_action": {'
	            +'"type": "web_url",'
	            +'"url": "https://www.connect-123.com/programs/volunteer/barcelona-spain/",'
	            +'"messenger_extensions": true,'
	            +'"webview_height_ratio": "tall",'
	            +'"fallback_url": "https://www.connect-123.com/programs/volunteer/barcelona-spain/"'
	          +'},'
	          +'"buttons":['
	            +'{'
	              +'"type":"web_url",'
	              +'"url":"https://www.connect-123.com/programs/volunteer/barcelona-spain/",'
	              +'"title":"View Website"'
	            +'}'              
	          +']'   
	        +'},'
	        +'{'
	        +'"title":"Volunteer in Buenos Aires",'
	        +'"image_url":"https://www.connect-123.com/wp-content/uploads/2016/02/Cape-Town-South-Africa-20_960x261_crop_90.jpg",'
	        +'"subtitle":"The Paris of South America. VOLUNTEER IN BUENOS AIRES",'
	        +'"default_action": {'
	          +'"type": "web_url",'
	          +'"url": "https://www.connect-123.com/programs/volunteer/buenos-aires-argentina/",'
	          +'"messenger_extensions": true,'
	          +'"webview_height_ratio": "tall",'
	          +'"fallback_url": "https://www.connect-123.com/programs/volunteer/buenos-aires-argentina/"'
	        +'},'
	        +'"buttons":['
	          +'{'
	            +'"type":"web_url",'
	            +'"url":"https://www.connect-123.com/programs/volunteer/buenos-aires-argentina/",'
	            +'"title":"View Website"'
	          +'}'              
	        +']'   
	      +'},'
	      +'{'
	      +'"title":"Volunteer in Cape Town",'
	      +'"image_url":"https://www.connect-123.com/wp-content/uploads/2016/02/Cape-Town-South-Africa-.jpg",'
	      +'"subtitle":"Wind Surfing in front of spectacular Table Mountain",'
	      +'"default_action": {'
	        +'"type": "web_url",'
	        +'"url": "https://www.connect-123.com/programs/volunteer/cape-town-south-africa/",'
	        +'"messenger_extensions": true,'
	        +'"webview_height_ratio": "tall",'
	        +'"fallback_url": "https://www.connect-123.com/programs/volunteer/cape-town-south-africa/"'
	      +'},'
	      +'"buttons":['
	        +'{'
	          +'"type":"web_url",'
	          +'"url":"https://connect-123.com",'
	          +'"title":"View Website"'
	        +'}'              
	      +']'   
	    +'}';
		  if(message.text.includes('Barcelona')) 
			  subBody = '{'
		          +'"title":"Volunteer in Barcelona",'
		          +'"image_url":"https://www.connect-123.com/wp-content/uploads/2016/02/Barcelona-Mercat-de-La-Boqueria-de.jpg",'
		          +'"subtitle":"Volunteer in Barcelona",'
		          +'"default_action": {'
		            +'"type": "web_url",'
		            +'"url": "https://www.connect-123.com/programs/volunteer/barcelona-spain/",'
		            +'"messenger_extensions": true,'
		            +'"webview_height_ratio": "tall",'
		            +'"fallback_url": "https://www.connect-123.com/programs/volunteer/barcelona-spain/"'
		          +'},'
		          +'"buttons":['
		            +'{'
		              +'"type":"web_url",'
		              +'"url":"https://www.connect-123.com/programs/volunteer/barcelona-spain/",'
		              +'"title":"View Website"'
		            +'}'              
		          +']'   
		        +'}';
		  if(message.text.includes('Buenos Aires'))
			  subBody = '{'
		          +'"title":"Volunteer in Buenos Aires",'
		          +'"image_url":"https://www.connect-123.com/wp-content/uploads/2016/02/Cape-Town-South-Africa-20_960x261_crop_90.jpg",'
		          +'"subtitle":"the Paris of South America",'
		          +'"default_action": {'
		            +'"type": "web_url",'
		            +'"url": "https://www.connect-123.com/programs/volunteer/buenos-aires-argentina/",'
		            +'"messenger_extensions": true,'
		            +'"webview_height_ratio": "tall",'
		            +'"fallback_url": "https://www.connect-123.com/programs/volunteer/buenos-aires-argentina/"'
		          +'},'
		          +'"buttons":['
		            +'{'
		              +'"type":"web_url",'
		              +'"url":"https://www.connect-123.com/programs/volunteer/buenos-aires-argentina/",'
		              +'"title":"View Website"'
		            +'}'              
		          +']'   
		        +'}';
		  if(message.text.includes('Cape Town'))
			  subBody = '{'
		          +'"title":"Volunteer in Cape Town",'
		          +'"image_url":"https://www.connect-123.com/wp-content/uploads/2016/02/Cape-Town-South-Africa-.jpg",'
		          +'"subtitle":"Wind Surfing in front of spectacular Table Mountain",'
		          +'"default_action": {'
		            +'"type": "web_url",'
		            +'"url": "https://www.connect-123.com/programs/volunteer/cape-town-south-africa/",'
		            +'"messenger_extensions": true,'
		            +'"webview_height_ratio": "tall",'
		            +'"fallback_url": "https://www.connect-123.com/programs/volunteer/cape-town-south-africa/"'
		          +'},'
		          +'"buttons":['
		            +'{'
		              +'"type":"web_url",'
		              +'"url":"https://www.connect-123.com/programs/volunteer/cape-town-south-africa/",'
		              +'"title":"View Website"'
		            +'}'              
		          +']'   
		        +'}';
		  
		  if(message.text.includes('Dublin'))
			  subBody = '{'
		          +'"title":"Volunteer in Dublin",'
		          +'"image_url":"https://www.connect-123.com/wp-content/uploads/2016/02/Dublin-Malahide-Castle-Ireland_960x261_crop_90.jpg",'
		          +'"subtitle":"Volunteer In Dublin, Ireland",'
		          +'"default_action": {'
		            +'"type": "web_url",'
		            +'"url": "https://www.connect-123.com/programs/volunteer/dublin-ireland/",'
		            +'"messenger_extensions": true,'
		            +'"webview_height_ratio": "tall",'
		            +'"fallback_url": "https://www.connect-123.com/programs/volunteer/dublin-ireland/"'
		          +'},'
		          +'"buttons":['
		            +'{'
		              +'"type":"web_url",'
		              +'"url":"https://www.connect-123.com/programs/volunteer/dublin-ireland/",'
		              +'"title":"View Website"'
		            +'}'              
		          +']'   
		        +'}';
		  var bodyString = '{'
				   	+'"type":"template",'
				      +'"payload":{'
				        +'"template_type":"generic",'
				        +'"elements":['
				          +subBody
				        +']'
				      +'}'
				    +'}';
		  
		  botResponse( { attachment: bodyString },sender);
	  }
	  else if(courseDetails.value == "intership"){
		  var subBody = "";
		  subBody =  '{'
          +'"title":"Welcome to Connect123",'
          +'"image_url":"https://www.connect-123.com/wp-content/themes/connect123/images/connect123-logo.jpg",'
          +'"subtitle":"We\'ve got the right Interships for you.",'
          +'"default_action": {'
            +'"type": "web_url",'
            +'"url": "https://www.connect-123.com/programs/internships/",'
            +'"messenger_extensions": true,'
            +'"webview_height_ratio": "tall",'
            +'"fallback_url": "https://connect-123.com"'
          +'},'
          +'"buttons":['
            +'{'
              +'"type":"web_url",'
              +'"url":"https://connect-123.com",'
              +'"title":"View Website"'
            +'}'              
          +']'   
        +'},'
        +'{'
          +'"title":"Internships in Barcelona",'
          +'"image_url":"https://www.connect-123.com/wp-content/uploads/2016/03/90-La-Sagrada-Familia-Barcelona-531x716.jpg",'
          +'"subtitle":"El Poble Espanyol at Sunset, near Montjuic in Barcelona",'
          +'"default_action": {'
            +'"type": "web_url",'
            +'"url": "https://www.connect-123.com/programs/internships/barcelona-spain/",'
            +'"messenger_extensions": true,'
            +'"webview_height_ratio": "tall",'
            +'"fallback_url": "https://www.connect-123.com/programs/internships/barcelona-spain/"'
          +'},'
          +'"buttons":['
            +'{'
              +'"type":"web_url",'
              +'"url":"https://connect-123.com",'
              +'"title":"View Website"'
            +'}'              
          +']'   
        +'},'
        +'{'
        +'"title":"Internships in Buenos Aires",'
        +'"image_url":"https://www.connect-123.com/wp-content/uploads/2016/03/Buenos_Aires_D--cembre_2007_-_Avenida_5_de_Mayo-e1475876066425-531x716.jpg",'
        +'"subtitle":"the Paris of South America",'
        +'"default_action": {'
          +'"type": "web_url",'
          +'"url": "https://www.connect-123.com/programs/internships/buenos-aires-argentina/",'
          +'"messenger_extensions": true,'
          +'"webview_height_ratio": "tall",'
          +'"fallback_url": "https://www.connect-123.com/programs/internships/buenos-aires-argentina/"'
        +'},'
        +'"buttons":['
          +'{'
            +'"type":"web_url",'
            +'"url":"https://connect-123.com",'
            +'"title":"View Website"'
          +'}'              
        +']'   
      +'},'
      +'{'
      +'"title":"Internships in Cape Town",'
      +'"image_url":"https://www.connect-123.com/wp-content/uploads/2016/03/Cape-Town-Overview-531x716.jpg",'
      +'"subtitle":"Wind Surfing in front of spectacular Table Mountain",'
      +'"default_action": {'
        +'"type": "web_url",'
        +'"url": "https://www.connect-123.com/programs/internships/cape-town-south-africa/",'
        +'"messenger_extensions": true,'
        +'"webview_height_ratio": "tall",'
        +'"fallback_url": "https://www.connect-123.com/programs/internships/cape-town-south-africa/"'
      +'},'
      +'"buttons":['
        +'{'
          +'"type":"web_url",'
          +'"url":"https://connect-123.com",'
          +'"title":"View Website"'
        +'}'              
      +']'   
    +'}';
		  if(message.text.includes('Barcelona')) 
			  subBody = '{'
		          +'"title":"Internships in Barcelona",'
		          +'"image_url":"https://www.connect-123.com/wp-content/uploads/2016/03/90-La-Sagrada-Familia-Barcelona-531x716.jpg",'
		          +'"subtitle":"El Poble Espanyol at Sunset, near Montjuic in Barcelona",'
		          +'"default_action": {'
		            +'"type": "web_url",'
		            +'"url": "https://www.connect-123.com/programs/internships/barcelona-spain/",'
		            +'"messenger_extensions": true,'
		            +'"webview_height_ratio": "tall",'
		            +'"fallback_url": "https://www.connect-123.com/programs/internships/barcelona-spain/"'
		          +'},'
		          +'"buttons":['
		            +'{'
		              +'"type":"web_url",'
		              +'"url":"https://connect-123.com",'
		              +'"title":"View Website"'
		            +'}'              
		          +']'   
		        +'}';
		  if(message.text.includes('Buenos Aires'))
			  subBody = '{'
		          +'"title":"Internships in Buenos Aires",'
		          +'"image_url":"https://www.connect-123.com/wp-content/uploads/2016/03/Buenos_Aires_D--cembre_2007_-_Avenida_5_de_Mayo-e1475876066425-531x716.jpg",'
		          +'"subtitle":"the Paris of South America",'
		          +'"default_action": {'
		            +'"type": "web_url",'
		            +'"url": "https://www.connect-123.com/programs/internships/buenos-aires-argentina/",'
		            +'"messenger_extensions": true,'
		            +'"webview_height_ratio": "tall",'
		            +'"fallback_url": "https://www.connect-123.com/programs/internships/buenos-aires-argentina/"'
		          +'},'
		          +'"buttons":['
		            +'{'
		              +'"type":"web_url",'
		              +'"url":"https://connect-123.com",'
		              +'"title":"View Website"'
		            +'}'              
		          +']'   
		        +'}';
		  if(message.text.includes('Cape Town'))
			  subBody = '{'
		          +'"title":"Internships in Cape Town",'
		          +'"image_url":"https://www.connect-123.com/wp-content/uploads/2016/03/Cape-Town-Overview-531x716.jpg",'
		          +'"subtitle":"Wind Surfing in front of spectacular Table Mountain",'
		          +'"default_action": {'
		            +'"type": "web_url",'
		            +'"url": "https://www.connect-123.com/programs/internships/cape-town-south-africa/",'
		            +'"messenger_extensions": true,'
		            +'"webview_height_ratio": "tall",'
		            +'"fallback_url": "https://www.connect-123.com/programs/internships/cape-town-south-africa/"'
		          +'},'
		          +'"buttons":['
		            +'{'
		              +'"type":"web_url",'
		              +'"url":"https://connect-123.com",'
		              +'"title":"View Website"'
		            +'}'              
		          +']'   
		        +'}';
		  
		  
		  var bodyString = '{'
				   	+'"type":"template",'
				      +'"payload":{'
				        +'"template_type":"generic",'
				        +'"elements":['
				          +subBody
				        +']'
				      +'}'
				    +'}';
		  
		  botResponse( { attachment: bodyString },sender);
	  }
  }
  if(greetingamount == undefined && greeting == undefined && courseDetails == undefined){
	  botResponse( { text: 'sorry i dont know what you mean.' },sender);
  }
}
function botResponse(message, recipient)
{
	console.log(message);
	
	request({
		url: 'https://graph.facebook.com/v2.6/me/messages',
		qs: {access_token:process.env.FB_TOKEN},
        method: 'POST',
        json: {
            recipient: {id: recipient},
            message: message
        	}
		},function(error, response, body) {
            if (error) {
                console.log('Error sending message: ', error);
              } else if (response.body.error) {
                console.log('Error: ', response.body.error);
              }
	});
}



function sInterpret(text, sender){
	//var salutation = text.match(/Hello/i); 
	//if(text.match(/Hello/i) || text.match(/hello/i) || text.match(/Hi/i) || text.match(/hi/i)){
	
	handleMessage(text,sender);
	//}
}

exports.webhookGet = function(req,res)
{
	if (
		    req.param
		    ('hub.mode') == 'subscribe' &&
		    req.param('hub.verify_token') == 'token'
		  ) {
		    res.send(req.param('hub.challenge'));
		  } else {
		    res.sendStatus(400);
		    
		  }
	console.log("Get method first");
};

exports.webhookPost = function(req,res)
{	
	var messaging_events = req.body.entry[0].messaging;
	//console.log(messaging_events);
	
	for(var i = 0; i < messaging_events.length; i++){
		var event = messaging_events[i];
		var sender = event.sender.id;
		var postBackMessage = event.postback;
		if(event.message && event.message.text){
			console.log(JSON.stringify(event.message));
			//console.log("FACEBOOK ID IS:" +sender);
			//botResponse({text:'Hello I am AWESOME BOT to help you'}, sender);
			sInterpret(event.message, sender);
		}else if(event.postback){
			console.log("FACEBOOK ID in PostBack:" +JSON.stringify(event.postback));
			 if (event.postback.payload === 'Hello_Get_Started'){
				 botResponse( { text: 'Welcome to Connect-123.' },sender);
			 }
		}
	}
	res.sendStatus(200);
};

