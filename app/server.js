/*
 * https://github.com/5orenso
 *
 * Copyright (c) 2014 Øistein Sørensen
 * Licensed under the MIT license.
 */
'use strict';

var _ = require('underscore'),
    express = require('express'),
    bodyParser = require('body-parser'),
    commander = require('commander'),
    app_path = __dirname + '/../',
    logger = require(app_path + 'lib/logger')({
        workerId: 1 //cluster.worker.id
    }),
    local_util = require(app_path + 'lib/local-util')();

var app = express();

commander
    .option('-c, --config <file>', 'configuration file path', './config/config.js')
    .parse(process.argv);
var config = require(commander.config);
if (config) {
    if (_.isObject(config) && _.isObject(config.log)) {
        logger.set('log', config.log);
    }
}

app.use(bodyParser.json());

// Include route handlers ------------------------
var rss_router = require('./routes/rss');
rss_router.set_config(config, {
    workerId: 1 //cluster.worker.id,
});
var api_router = require('./routes/api');
api_router.set_config(config, {
    workerId: 1 //cluster.worker.id,
});
var web_router = require('./routes/web');
web_router.set_config(config, {
    workerId: 1 //cluster.worker.id,
});
var image_router = require('./routes/image');
image_router.set_config(config, {
    workerId: 1, //cluster.worker.id,
    photo_path: config.adapter.markdown.photo_path,
    photo_cache_path: config.blog.domain
});
var search_router = require('./routes/search');
search_router.set_config(config, {
    workerId: 1 //cluster.worker.id,
});

// Register routes -------------------------------
app.use('/api', api_router);
app.use('/rss', rss_router);
app.use('/static', local_util.set_cache_headers);
app.use('/static', express.static(config.blog.static_files_path));
app.use('/.well-known/', express.static(config.blog.text_files_path));
app.use('/pho/', image_router);
app.use('/search/', search_router);
app.use('/', web_router);

// Start the server ------------------------------
var server = app.listen(config.app.port, function () {
        var host = server.address().address;
        var port = server.address().port;
        logger.log('info', 'Something happens at http://' + host + ':' + port + '/');
    });
