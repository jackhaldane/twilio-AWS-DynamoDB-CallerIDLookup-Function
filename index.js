exports.handler = function(context, event, callback) {

const endpointURL = 'https://testendpointREPLACEME.execute-api.eu-west-2.amazonaws.com/items/'; // define aws gateway endpoint url
const phoneNumber = event.callFrom; // get phone number from Twilio param

var got = require('got'); // required for got function
got(endpointURL + phoneNumber, {responseType: 'json'}) // send a https get request to aws api
  .then(function(response) {
     console.log(response.body) // debug
     console.log('request from ' + phoneNumber)
     
     if (response.body.Item.isAllowed === true) { // check if the isAllowed api response from AWS is true
        console.log('success. number is already allowed')
         callback(null, "OK"); // return success response to API - allow call to connect without call guard prompt
     } else {
         callback(null, false); // return fail - fail response - either caller doesn't exist in db table or isAllowed is false and caller must go via call guard
         
     }
    
  })
  .catch(function(error) {
    callback(error) // return eror if timeout or other http error
  });



};


