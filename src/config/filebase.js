const firebase = require('firebase-admin');

const params = {
  type: process.env.TYPE,
  projectId: process.env.PROJECT_ID,
  privateKeyId: process.env.PRIVATE_KEY_ID,
  privateKey: process.env.PRIVATE_KEY,
  clientEmail: process.env.CLIENT_EMAIL,
  clientId: process.env.CLIENT_ID,
  authUri: process.env.AUTH_URL,
  tokenUri: process.env.TOKEN_URL,
  authProviderX509CertUrl: process.env.AUTH_PROVIDER_X509_CERT_URL,
  clientC509CertUrl: process.env.CLIENT_X509_CERT_URL,
}

const FirebaseApp = firebase.initializeApp({
  credential: firebase.credential.cert(params),
  storageBucket: "larmloso.appspot.com"
});

// const storage = FirebaseApp.storage();
// const bucket = storage.bucket();

module.exports = {
  FirebaseApp
}