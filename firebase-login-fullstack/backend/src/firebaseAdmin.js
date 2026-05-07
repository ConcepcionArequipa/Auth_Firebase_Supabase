const admin = require("firebase-admin");
const serviceAccount = require("../serviceAccountKey.json"); // Asegúrate de que el nombre coincida

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;