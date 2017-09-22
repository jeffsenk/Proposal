'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');

  admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
 });

 exports.addGroup = functions.https.onRequest((req,res) => {
    const newGroup  = req.query.text;
    admin.database().ref('/Groups/'+ newGroup).set({
      Founded: "default",
      Style: "default"
    });
    res.send("add group requested");
  });
