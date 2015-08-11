'use strict';

var buster       = require('buster'),
    assert       = buster.assert,
    when         = require('when'),
    config       = require(__dirname + '/../../../config/config-integration.js');

var article = {
    tag_values: { toc: '', fact: '', artlist: '' },
    published: '2014-01-01',
    title: 'Simple blog 2',
    img: [ 'simple-blog.jpg' ],
    body: 'This is content number 2.',
    file: 'index',
    filename: 'my-path-to-the-files/content/articles/simple-blog/simple-blog.md',
    base_href: '/simple-blog/'
};

var es = null;

buster.testCase("Elasticsearch", {
    setUp: function() {
        es = require('../../../lib/adapter/elasticsearch')({
            logger: {
                log: function () { },
                err: function () { }
            },
            config: {
                adapter: {
                    elasticsearch: {
                        server: '127.0.0.1',
                        port: 9200,
                        index: 'twitter',
                        type: 'tweet'
                    }
                }
            }
        }, {
            elasticsearch: config.adapter.mock_services.elasticsearch.elasticsearch
        });


    },

    tearDown: function () {
        delete require.cache[require.resolve('../../../lib/adapter/elasticsearch')];
    },

    'missing config input. Should blow up': function () {
        assert.exception(function () {
            var _es = require('../../../lib/adapter/elasticsearch')({});
            console.log(_es);
        });
    },

    'search for existing word and expect one hit': function (done) {
        when( es.query({_all:'one-hit'}, {}) )
            .done(function (obj) {
                assert.isArray(obj);
                assert.equals(obj[0].title, article.title);
                assert.equals(obj[0].published, article.published);
                assert.equals(obj[0].img, article.img);
                assert.equals(obj[0].body, article.body);
                assert.equals(obj[0].file, article.file);
                assert.equals(obj[0].base_href, article.base_href);
                done();
            }, function (err) {
                console.log(err);
                done();
            });
    },

    'search for existing word and expect two hits': function (done) {
        when( es.query({_all:'two-hit'}, {}) )
            .done(function (obj) {
                assert.isArray(obj);
                assert.equals(obj[1].title, article.title);
                assert.equals(obj[1].published, article.published);
                assert.equals(obj[1].img, article.img);
                assert.equals(obj[1].body, article.body);
                assert.equals(obj[1].file, article.file);
                assert.equals(obj[1].base_href, article.base_href);
                done();
            }, function (err) {
                console.log(err);
                done();
            });
    },

    'search for non existing word': function (done) {
        when( es.query({_all:'no-hit'}, {}) )
            .done(function (obj) {
                assert.isArray(obj);
                assert.equals(obj, []);
                done();
            }, function (err) {
                console.log(err);
                done();
            });
    },

    'ping server': function (done) {
        when( es.ping() )
            .done(function (obj) {
                assert.equals(obj, 'all is well');
                done();
            }, function (err) {
                console.log(err);
                done();
            });
    },


    'index object': function (done) {
        when( es.index(article) )
            .done(function (obj) {
                assert.equals(obj, { status: 'ok' });
                done();
            }, function (err) {
                console.log(err);
                done();
            });
    },

    'index object with wrong input': function (done) {
        when( es.index({}) )
            .done(function (obj) {
                console.log(obj);
                done();
            }, function (err) {
                assert.match(err, 'obj.base_href');
                assert.match(err, 'obj.file');
                done();
            });
    },


});

