/*
 * https://github.com/5orenso
 *
 * Copyright (c) 2015 Øistein Sørensen
 * Licensed under the MIT license.
 */

'use strict';

let opts;

function MyReplacer(opt) {
    opts = opt || { regexp: /\s+(@)([a-z_\-0-9.]+)/gi };
}

MyReplacer.prototype.set = function set(key, value) {
    opts[key] = value;
    return true;
};

MyReplacer.prototype.get = function get(key) {
    return opts[key];
};

MyReplacer.prototype.replacer = function replacer(match, p1, p2) {
    return `<span class="user">${p1}<a href="https://twitter.com/${p2}">${p2}</a></span>`;
};

module.exports = MyReplacer;
