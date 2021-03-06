'use strict';

const router = require('express').Router();
const wrap = require('../../middleware/wrap');

router.get('/search', wrap(require('./get-search.js')));
router.get('/iot/', wrap(require('./get-iot.js')));

router.get('/:category/:title/:id', wrap(require('./get-article.js')));
router.get('/:category/:filename', wrap(require('./get-article.js')));
router.get('/:category/', wrap(require('./get-article.js')));
router.get('/', wrap(require('./get-article.js')));

module.exports = router;
