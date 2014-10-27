/*
 * https://github.com/5orenso
 *
 * Copyright (c) 2014 Øistein Sørensen
 * Licensed under the MIT license.
 */
'use strict';
var when          = require('when'),
    _             = require('underscore'),
    fs            =  require('fs'),
    path          = require('path'),
    walk          = require('walk'),
    app_path      = __dirname + '/../../',
    article_util  = require(app_path + 'lib/article-util')(),
    local_util    = require(app_path + 'lib/local-util')();


var Markdown = function (options, mock_services) {
    var opts = options || {};
    var logger = opts.logger;
    mock_services = mock_services || {};

    var config = {};
    if (_.isObject(opts.config) && _.isObject(opts.config.adapter)) {
        config = opts.config.adapter.markdown;
    }
//    console.log('adapter->config: ', config);


    function check_if_article_exists (filename, artlist) {
        // Should this function return the first article in the list
        // if the input does not exist inside the list?
        var base_filename = filename.replace(/^(.+\/)/, '');
        if (base_filename.match(/^_/)) {
            return filename;
        }
        function article_exists (el, index, array) {
            return el.filename === filename;
        }
        if (base_filename.match(/^index\.(md|html|htm)$/)) {
            if (_.isArray(artlist) && artlist.length > 0) {
                if (!artlist.some(article_exists)) {
                    return artlist[0].filename;
                }
            }
        }
        return filename;
    }


    function load_file (opt) {
//        console.log('load_article: ', opt);
        return when.promise( function (resolve, reject) {
            var request_url = opt.request_url;
            if (!request_url.match(/\.md$/)) {
                request_url += '.md';
            }
            var filename = check_if_article_exists(path.normalize(config.content_path + request_url), opt.artlist);
//            console.log('---> load_article->filename: ', filename);
            fs.readFile(filename, { encoding: 'utf8'}, function (err, data) {
                var article = article_util.populateArticleSections(data);
                var file = article_util.getArticleFilename(opt.request_url);

//                console.log('--> load_article->opt.file: ', file, err);
//                console.log('--> load_article->opt.base_href: ', article_util.getArticlePathRelative(opt.base_href, config.content_path));

                article.file = file;
//                article.filename = filename;
                article.filename = path.normalize(filename);
//                article.base_href = article_util.getArticlePathRelative(opt.base_href, config.content_path);
                article.base_href = article_util.getArticlePathRelative(article.filename, config.content_path);

//                article.filename = path.normalize(filename);
//                article.base_href = article_util.getArticlePathRelative(opt.filename, config.content_path);

                if (err) {
//                    logger.err(404, 'File not found: ' + filename);
                    reject({ status: 404, article: article});
                } else {
                    resolve(article);
                }
            });
        });
    }



    function list_files (relative_path) {
        return when.promise( function (resolve, reject) {
            logger.log('load_article_list->relative_path: ', relative_path);
//            console.log('load_article_list->relative_path: ', relative_path);
            var selected_content_folder = path.normalize(config.content_path + relative_path);
            var walker = walk.walk(selected_content_folder, { followLinks: true });
            var files = [];
            walker.on("file", function (root, stat, next) {
//                console.log('load_article_list->stat.name: ', stat.name);
                if (stat.name.match(/^[^\._]/)) {
                    stat.base_href = article_util.getArticlePathRelative(root + '/' + stat.name, config.content_path);
//                    console.log('load_article_list->stat.base_href: ', stat.base_href);
                    var re = new RegExp(config.content_path, "g");
                    root = root.replace(re, '');
                    stat.name = stat.name.replace(/\.md$/, '');
                    stat.filename = path.normalize(root + '/' + stat.name);
                    //                stat.base_href = article_util.getArticlePathRelative(stat.filename, config.content_path);
                    files.push(stat);
                }
                next();
            });
            walker.on('end', function () {
                var array = [];
                files = local_util.sortByKey(files, 'mtime');

                function loadAllArticles(resolve, reject) {
//                    console.log('loadAllArticles->request_url: ', base_href + file);
//                    when(load_article({
                    when(load_file({
                        request_url: base_href + file,
//                        file: file,
//                        base_href: base_href
                    }))
//                       .then(loadAllImages)
                        .done(resolve, reject);
                }

                var file_cnt = 0;
                for (var i in files) {
                    if (files[i] && file_cnt < config.max_articles) {
                        file_cnt++;
                        var file = files[i].name,
                            base_href = files[i].base_href;
                        array.push(when.promise(loadAllArticles));
                    }
                }
                when.all(array)
                    .then(function (artlist) {
                        artlist = local_util.sortByKey(artlist, 'published', '1900-01-01');
                        resolve(artlist);
                    });
            });
            walker.on('error', function (err, entry, stat) {
                reject(err);
            });
        });
    }



    function load_article_images (article) {
        return when.promise( function (resolve, reject) {
//            console.log(article);
            if (!_.isObject(article) || !article.hasOwnProperty('images') || !_.isString(config.photo_path)) {
                resolve(article);
            } else {
                var photo_path = path.normalize(config.photo_path + article.images);
//                console.log('photo_path: ', photo_path);
                var base_href = article.images;
                logger.log('loadAllImages->photo_path: ', photo_path);
                var walker = walk.walk(photo_path, { followLinks: true });
                var files = [];
                walker.on("file", function (root, stat, next) {
                    if (stat.name.match(/^[^\._]/)) {
                        var re = new RegExp(photo_path, "g");
                        root = root.replace(re, '');
                        stat.filename = path.normalize(root + article_util.getArticleFilename(stat.name));
                        stat.base_href = '/';
                        files.push(stat);
                    }
                    next();
                });
                walker.on('end', function () {
                    var array = [];
                    files = local_util.sortByKey(files, 'mtime');
                    article.image_list = files;
                    for (var i in files) {
                        if (files[i]) {
                            if (!_.isArray(article.img)) {
                                article.img = [];
                            }
                            var image_url = base_href + files[i].filename;
                            image_url = image_url.replace(/^\//, '');
                            article.img.push(image_url);
                        }
                    }
                    resolve(article);
                });
                walker.on('error', function (err, entry, stat) {
                    resolve(article);
                });
            }
        });
    }



    return {
        load: function (opt) {
            return when.promise(function (resolve, reject) {
                when(load_file(opt))
                    .done(resolve, reject);
            });
        },

        list_articles: function (opt) {
            return when.promise(function (resolve, reject) {
                when(list_files(opt))
                    .done(function (artlist) {
                        resolve(artlist);
                    });
            });
        },

        list_categories: function () {

        },

        list_images: function (article) {
            return when.promise(function (resolve, reject) {
                when(load_article_images(article))
                    .done(resolve, reject);
            });
        }




    };
};

module.exports = Markdown;