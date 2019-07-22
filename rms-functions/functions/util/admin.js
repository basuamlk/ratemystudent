const serviceAccount = require('../test-39c64-firebase-adminsdk-qlo2n-8d58853080.json');

const admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://test-39c64.firebaseio.com"
});

const db = admin.firestore();

module.exports = { admin, db };