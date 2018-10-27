var express = require('express');
var path = require('path');
var morgan = require('morgan');
var cors = require('cors');
var helmet = require('helmet');
var app = express();
const util = require('util');
const exec = require('child_process').spawn;
var bodyParser = require('body-parser');
const shell = require('shelljs');


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
  const bat = exec('sh', ['/home/deployMS/commands.sh']);

  bat.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  bat.stderr.on('data', (data) => {
    console.log(data.toString());
  });

  bat.on('exit', (code) => {
    console.log(`Child exited with code ${code}`);
  });
}

function ejecutar() {
  shell.exec('/home/deployMS/./commands.sh', { async: true })
}

app.post('/', function (req, res) {
  console.log('hola');
  let headers = req.headers;
  console.log(headers['x-github-event']);
  let body = req.body;
  console.log('mostrando el body', body.action)
  ejecutar();
  res.send('OK')
})

app.get('/', function (req, res) {
  res.send('hello world');
});

module.exports = app;






