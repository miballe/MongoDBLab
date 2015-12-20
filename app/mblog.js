var MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    db;

var mongoClient = new MongoClient(new Server('localhost', 27017));
mongoClient.open(function(err, mongoClient) {
    db = mongoClient.db("courseworks");
    db.collection('mblog', {strict:true}, function(err, collection) {
        if (err) {
            console.log("Database or collection not found...");
        }
    });
});

// UniqueUsers. OK.
exports.uniqueUsers = function(req, res) {
    console.log(" ==> UniqueUsers");
    db.collection('mblog', function(err, collection) {
        collection.distinct('idmember', function(err, items) {
            res.jsonp(items.length);
        });
        if(err) {
           console.log("Error in UniqueUsers!");
        }
    });
	console.log("     UniqueUsers ==> ")
};

// Top 10 users. TODO, check the aggregate error
exports.top10Users = function(req, res) {
    console.log(" ==>  top10Users");
	var items = [];
	var mblogcol = db.collection('mblog');
	var cur10 = mblogcol.aggregate(
		[
			{ $group: { idmember : "$idmember", count: { $sum: 1 } } },
			{ $sort: { count: -1 } },
			{ $limit: 10 }
		]);
	cur10.on('data', function(item) {
		items.push(item);
	});
	res.jsonp(items);
	console.log("      top10Users ==>");
};

// Earlist and latest date. TODO
exports.firstLastMsg = function(req, res) {
    console.log(" ==>  firstLastMsg");
	var mblogcol = db.collection('mblog');
	var curmax = mblogcol.find( {}, { timestamp : 1 }).sort({ timestamp : -1 }).limit( 1);
	var curmin = mblogcol.find( {}, { timestamp : 1 }).sort({ timestamp : 1 }).limit(1);
	curmax.each( function(err, maxi) {
		curmin.each( function(err, mini){
			if(maxi !== null && mini !== null) {
				var arr = [{
					"max": maxi.timestamp.toISOString(),
					"min": mini.timestamp.toISOString()
				}];
				res.jsonp(arr);
			}
		});
	});
	console.log("      firstLastMsg ==>");
};

// Mean time delta. TODO
exports.meanTimeDelta = function(req, res) {
    console.log("meanTimeDelta");
    db.collection('mblog', function(err, collection) {
        collection.find().toArray(function(err, items) {
            if(err) {
                console.log("Error in meanTimeDelta!");
            }
            res.jsonp(items);
        });
    });
};

// Mean length message. TODO.
exports.meanLengthMsg = function(req, res) {
    console.log("meanLengthMsg");
    db.collection('mblog', function(err, collection) {
        collection.find().toArray(function(err, items) {
            if(err) {
                console.log("Error in meanLengthMsg!");
            }
            res.jsonp(items);
        });
    });
};

// 10 most common Unigram and bigram strings. TODO.
exports.top10UniBigram = function(req, res) {
    console.log("top10UniBigram");
    db.collection('mblog', function(err, collection) {
        collection.find().toArray(function(err, items) {
            if(err) {
                console.log("Error in top10UniBigram!");
            }
            res.jsonp(items);
        });
    });
};

// Average number hashtag used. TODO.
exports.avgNumHashtag = function(req, res) {
    console.log("avgNumHashtag");
    db.collection('mblog', function(err, collection) {
        collection.find().toArray(function(err, items) {
            if(err) {
                console.log("Error in avgNumHashtag!");
            }
            res.jsonp(items);
        });
    });
};

// UK area largest published msg
exports.lgstUKPubArea = function(req, res) {
    console.log("lgstUKPubArea");
    db.collection('mblog', function(err, collection) {
        collection.find().toArray(function(err, items) {
            if(err) {
                console.log("Error in lgstUKPubArea!");
            }
            res.jsonp(items);
        });
    });
};
