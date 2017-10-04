'use strict'

var request = require('request');

/*
Function will call the tokenService dyno to retrieve a valid access token for the given org_id
*/
exports.fetchToken = (org_id, callback) => {

   var json = {
      "org_id": org_id
   };

   var options = {
      url: process.env.TOKEN_SERVICE,
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      json: json
   };

   request(options, (err, res, body) => {
      if (err) {
         console.log(err);
         callback(err, null);
      }
      if (res && (res.statusCode === 200 || res.statusCode === 201)) {
         callback(err, body);
      }
   });
}