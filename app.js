/* 
Setear variables de entorno para NODEjs en CONSOLA:
WINDOWS: set NODE_ENV=production
UBUNTU: NODE_ENV=production o export NODE_ENV=production
*/
// var createError = require('http-errors');
var express = require('express');
var path = require('path');
var morgan = require('morgan');
var cors = require('cors');
var helmet = require('helmet');
var app = express();
const util = require('util');
const exec = util.promisify(require('child_process').exec);
var bodyParser = require('body-parser');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
// app.use(helmet());
app.use(bodyParser.json());


async function ls() {
    const { stdout, stderr } = await exec('ls');
    console.log('stdout:', stdout);
    console.log('stderr:', stderr);
}

app.post('/', function (req, res) {
  console.log('hola');
    // let headers = req.headers;
    // console.log(headers['x-github-event']);
    // let body = req.body;
    // console.log(body.action)
    // ls();
    res.send('OK')
})

app.get('/', function(req, res) {
  res.send('hello world');
});

module.exports = app;






