'use strict';

const util = require('./util');
const marked = require('marked');

const renderer = new marked.Renderer();

// Markdown setup.
marked.setOptions({
    renderer: renderer,
    highlight: function(code) {
        return require('highlight.js').highlightAuto(code).value;
    },
    pedantic: false,
    gfm: true,
    tables: true,
    breaks: true,
    sanitize: false,
    smartLists: true,
    smartypants: true,
    xhtml: false,
});

renderer.heading = function heading(text, level) {
    const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
    return `<h${level} class="toc-${level}"><a name="${
        escapedText
    }" class="anchor" href="#${
        escapedText
    }"><span class="header-link"></span></a>${
        text}</h${level}>`;
};

renderer.image = function image($href, title, text) {
    let serverName;
    if (document.domain === 'localhost') {
        serverName = 'http://localhost:8080';
    }
    const src = `${serverName}${$href}`;
    const href = $href.replace(/(w=[0-9]+)/, 'w=1800');
    const mediaClass = [];
    const result = src.match(/#([a-z,]+)$/);
    if (result) {
        const allClasses = result[1].split(',');
        for (let i = 0, l = allClasses.length; i < l; i += 1) {
            mediaClass.push(allClasses[i]);
        }
    }
    return `<p class="image_inline ${mediaClass.join(' ')}"><a href="${href}" data-smoothzoom="group1" title="${title
        || text}"><img src="${src}" alt="${text}" title="${title || text}" class="img-fluid">` +
        `</a><span class="image_inline_text">${title || text}</span></p>`;
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function htmlUtilities() {
    function replaceMarked(input) {
        if (typeof input === 'string') {
            const fixedInput = fixImageLinksWhiteSpace(input);
            return marked(fixedInput);
        }
    }

    function fixImageLinksWhiteSpace(input) {
        function replacerImageWhiteSpace(match, p1, p2, p3) {
            const imageSrc = p2.replace(/ /g, '%20');
            const result = `![${p1}](${imageSrc}${p3})`;
            return result;
        }
        const reg = /\!\[(.+?)\]\((.+?\.[a-z]{3,4})(.*?)\)/gi;
        return input.replace(reg, replacerImageWhiteSpace);
    }

    function inlineImageSize($input, $size) {
        const input = $input.replace(/(<img.+?)\?w=[0-9]+/gi, `$1?w=${$size}`);
        return input;
    }

    function replaceAt(string, index, replace) {
        return string.substring(0, index) + replace + string.substring(index + 1);
    }

    function dropFirstLetter($string) {
        let mode = 0;
        for (let i = 0, l = $string.length; i < l; i += 1) {
            const letter = $string.charAt(i);
            if (letter === '<') {
                mode = 1;
            } else if (letter === '>') {
                mode = 0;
            }
            if (mode === 0 && letter.match(/\w/)) {
                return replaceAt($string, i, `<span class="blog-drop-letter">${letter}</span>`);
            }
        }
        return $string;
    }

    function dropFirstLetterAfterHr($string) {
        const stringParts = $string.split('<hr>');
        for (let i = 0, l = stringParts.length; i < l; i += 1) {
            stringParts[i] = dropFirstLetter(stringParts[i]);
        }
        return stringParts.join('<hr>');
    }

    function cleanHtml($input) {
        const input = $input.replace(/<(h[1-9]).+?>.+?<\/\1>/gi, '');
        return input.replace(/<.+?>/g, ' ');
    }

    function replaceDataTags($content, article) {
        if (typeof $content !== 'string') {
            return $content;
        }
        let content = $content;
        function replacerTags(match, p1, p2) {
            // console.log('replacerTags', match, p1, p2);
            if (p1.match(/^fa-/)) {
                let result = `<span class="fa ${p1}"></span>`;
                if (typeof p2 !== 'undefined') {
                    const count = parseInt(p2.trim(), 10);
                    if (typeof count === 'number') {
                        result = new Array(count + 1).join(result);
                    }
                }
                return result;
            } else if (typeof p2 !== 'undefined') {
                const command = p2.trim();
                let result = util.getString(article, p1.split('.')) || '';
                if (command === 'size') {
                    result = util.formatBytes(result, 2);
                } else if (command === 'date') {
                    result = util.isoDateNormalized(result);
                }

                return result;
            }
            return util.getString(article, p1.split('.')) || '';
        }

        const reg = /\[:([a-z_\-0-9.]+)(\s[a-z_\-0-9]+)*?\]/gi;
        content = content.replace(reg, replacerTags);
        return content;
    }

    return {
        replaceMarked,
        inlineImageSize,
        replaceAt,
        dropFirstLetter,
        dropFirstLetterAfterHr,
        cleanHtml,
        replaceDataTags,
    };
};

module.exports = htmlUtilities();