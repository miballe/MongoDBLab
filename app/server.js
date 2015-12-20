var express = require('express'),
    mblg = require('./mblog');
 
var app = express();
var path = require('path');

app.get('/mblog/uniqueusers/', mblg.uniqueUsers);
app.get('/mblog/top10users/', mblg.top10Users);
app.get('/mblog/firstlastmsg/', mblg.firstLastMsg);
app.get('/mblog/meantimedelta/', mblg.meanTimeDelta);
app.get('/mblog/meanlengthmsg/', mblg.meanLengthMsg);
app.get('/mblog/top10unibigram/', mblg.top10UniBigram);
app.get('/mblog/avgnumhashtag/', mblg.avgNumHashtag);
app.get('/mblog/lgstukpubarea/', mblg.lgstUKPubArea);
app.use('/client/', express.static(path.join(__dirname, '/client')));
app.use('/', express.static(path.join(__dirname, '/client')));

app.configure(function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.listen(5454);
console.log('Listening on port 5454...');
