var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var lastValue = null;

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.json());
app.use(bodyParser.raw());

app.get('/data', function (req, res) {
    res.send('' + lastValue);
});

app.post('/data', function (req, res) {
    var body = req.body;
    if (body.value) {
        lastValue = body.value;
        var baseUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
        res.location(baseUrl + '/data').send();
    } else {
        res.sendStatus(404);
    }
});

app.delete('/data', function(req, res) {
    lastValue = null;
    res.sendStatus(200);
});

app.listen(app.get('port'), function () {
    console.log('App listening on port ' + app.get('port'));
});