var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var data = [];

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.json());
app.use(bodyParser.raw());

app.get('/data', function (req, res) {
    if (data.length >= 10) {
        res.send(data.slice(data.length - 10, data.length));
    } else {
        res.send(data);
    }
});

app.post('/data', function (req, res) {
    var body = req.body;
    if (body.value) {
        data.push(body.value);
        var baseUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
        res.location(baseUrl + '/' + (data.length - 1)).send();
    } else {
        res.sendStatus(404);
    }
});

app.delete('/data/:id', function(req, res) {
    if (req.params.id && req.params.id >= 0 && req.params.id < data.length) {
        data.slice(req.params.id, req.params.id + 1);
        res.sendStatus(200);
    } else {
        res.sendStatus(404).send('The provided id is out of range.');
    }
});

app.listen(app.get('port'), function () {
    console.log('Example app listening on port ' + app.get('port'));
});