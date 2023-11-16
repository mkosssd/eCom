const functions = require('firebase-functions');
const express = require('express');
const { ngExpressEngine } = require('@nguniversal/express-engine');

const app = express();

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModule,
}));

app.set('view engine', 'html');
app.set('views', 'dist');

app.get('*.*', express.static('dist', { maxAge: '1y' }));

app.get('*', (req, res) => {
  res.render('index', { req });
});

exports.ssr = functions.https.onRequest(app);
