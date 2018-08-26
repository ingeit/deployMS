var express = require('express')
var bodyParser = require('body-parser');
var app = express()
const util = require('util');
const exec = util.promisify(require('child_process').exec);

app.use(bodyParser.json());

async function ls() {
    const { stdout, stderr } = await exec('ls');
    console.log('stdout:', stdout);
    console.log('stderr:', stderr);
}

app.post('/', function (req, res) {
    let headers = req.headers;
    console.log(headers['x-github-event']);
    let body = req.body;
    console.log(body.action)
    ls();
    res.send('OK')
})

app.listen(8080, function () {
    console.log('listening on port 8080')
})
