'use strict';

var buster     = require('buster'),
    assert     = buster.assert,
    refute     = buster.refute,
    when       = require('when'),
    fs         = require('fs'),
    express    = require('express'),
    request    = require('request'),
    stats      = {
        meter: function () {
            return {
                mark: function () {}
            };
        },
        toJSON: function () {}
    },
    activeConn = {
        inc: function () {},
        dec: function () {},
        toJSON: function () {}
    },
    timer      = {
        start: function () {
            return {
                end: function () {}
            };
        },
        toJSON: function () {}
    },
    gauge      = {
        toJSON: function () {}
    },
    stats_router = require(__dirname + '/../../../app/routes/stats');
var content_path     = __dirname + '/../../content/articles/';


var config = require(__dirname + '/../../../config/config-dist.js');
stats_router.set_config(config, {
    content_path: content_path,
    workerId: 1,
    stats: stats,
    activeConn: activeConn,
    timer_web: timer,
    timer_api: timer,
    timer_image: timer,
    gauge: gauge
});

var port = 4321;
var app = express();
app.use('/api', stats_router);
var server;

var responses = {
    endpoints : {"message":"hooray! welcome to our api!"}
};



buster.testCase('stats', {
    setUp: function () {
        // TODO: Start webserver and use routes.
//        console.log('web: setup');
        this.timeout = 2000;
        server = app.listen(port);
    },
    tearDown: function (done) {
//        console.log('web: tearDown');
        // TODO: Shutdown webserver.
        server.close(function() {
            done();
        });
    },
    'Test stats routes:': {
        '/stats': function (done) {
            request('http://127.0.0.1:' + port + '/api/', function (error, response, body) {
//                console.log(body);
//                console.log(error);
//                console.log(response.statusCode);
                assert.equals(200, response.statusCode);
                done();
            });

        },

        '/api/this-should-not-be-found': function (done) {
            request('http://127.0.0.1:' + port + '/api/this-should-not-be-found', function (error, response, body) {
                assert.equals(404, response.statusCode);
                done();
            });

        },


    }
});