/**
 * @dbFinder Used to search in the db
 */
(function() {
    // we use it for creation of new object ids
    var ObjectId = require('mongodb').ObjectID;
    var mongoose = require('mongoose');
    var config = require('./config').getConfig();
    var cache = null;

    /**
     * @setCache set the cache as local variable
     * @cache {Object} The cache object
     */
    function setCache(cacheModule) {
        cache = cacheModule;
    }
    /**
     * @getUnknownWord It returns one of the unknown words from the back-end
     * @req {Object} The query from the front-end
     * @res {Object} The res to the front-end
     */
    function getUnknownWord(req, res) {
        var differentWords = getUnknownWords(req.body['knownWords']);
        // TODO: get one of the differentWords by random
        var word = 'test';
        res.json({
            word: word.word,
            score: word.score,
            level: word.level
        });
    }
    /**
     * @buildResponse We gather the data and build the response structure that is expected in the front-end
     * @docs {Object} The results from the db
     * @resource {Object} The response object
     */
    function buildResponse(docs, resource) {
        var result = buildResponseStructure(docs);
        resource.json(result);
    }
    /**
     * @getUnknownWords Return all of the unknown words
     * @knownWords {Array} The known words
     */
    function getUnknownWords(knownWords) {
        debugger;
    }

    /**
     * @connectDb Used to make the connection to the Database
     */
    function connectDb() {
        // we cache the product list when we open the back-end for faster working speed
        mongoose.connection.on('connected', function() {
            console.log('[dbConnector]Mongoose default connection open');
            mongoose.connection.db.collection('words', function(err, collection) {
                collection.find().toArray(function(err, words) {
                    cache.setWords(words);
                });
            });
        });

        // If the connection throws an error
        mongoose.connection.on('error', function(err) {
            console.log('[dbConnector]Mongoose default connection error: ' + err);
        });

        // When the connection is disconnected
        mongoose.connection.on('disconnected', function() {
            console.log('[dbConnector]Mongoose default connection disconnected');
        });

        // If the Node process ends, close the Mongoose connection
        process.on('SIGINT', function() {
            mongoose.connection.close(function() {
                console.log('[dbConnector]Mongoose default connection disconnected through app termination');
                process.exit(0);
            });
        });
        // get database
        mongoose.connect(config.dbAddress);
    }

    module.exports = {
        setCache: setCache,
        connectDb: connectDb,
        getUnknownWord: getUnknownWord
    };
}());
