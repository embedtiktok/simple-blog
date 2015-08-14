'use strict';

var buster = require('buster'),
    assert = buster.assert,
    Plugin = require('../../../lib/replacers/twitterUsers'),
    plugin = new Plugin();

buster.testCase('lib/replacers/twitterUsers', {
    setUp: function () {
    },
    tearDown: function () {
    },
    'Test plugin flot:': {
        'set/get': function () {
            assert(plugin.set('simple', 'blog is fun'));
            assert.equals(plugin.get('simple'), 'blog is fun');
        }

    }
});
