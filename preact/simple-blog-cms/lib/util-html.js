'use strict';

import util from './util';
const marked = require('marked');
const hljs = require('highlight.js');
import 'highlight.js/styles/atom-one-dark.css';
const renderer = new marked.Renderer();

hljs.configure({
  tabReplace: '    ',      // 4 spaces
  classPrefix: 'hljs-',     // don't append class prefix
                           // … other options aren't changed
});

// Markdown setup.
marked.setOptions({
    renderer: renderer,
    highlight: function(code, language) {
        // console.log(code, language);
        // if (language) {
        //     return hljs.highlight(language, code).value;
        // }
        return hljs.highlightAuto(code).value;
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
    return `<h${level} class='toc-${level}'><a name='${
        escapedText
    }' class='anchor' href='#${
        escapedText
    }'><span class='header-link'></span></a>${
        text}</h${level}>`;
};

renderer.table = function table(header, body) {
    return `<table class='table table-striped table-hover'>
        <thead class='thead-dark'>${header}</thead>
        <tbody>${body}</tbody>
    </table>`;
};

renderer.blockquote = function blockquote(quote) {
    return `<blockquote class='blockquote text-muted ml-5'>
        <span class='display-4 float-left mr-4'>
            <i class="fas fa-quote-right"></i>
        </span>
        <p class='mb-0'>${quote}</p>
    </blockquote>`;
};

renderer.code = function code(code, infostring, escaped) {
    return `<pre>
        <code class="language-${infostring} hljs rounded-lg">${
            infostring ? hljs.highlight(infostring, code).value : hljs.highlightAuto(code).value
        }</code>
    </pre>`;
};

renderer.image = function image($href, title, text) {
    if ($href.match(/youtube.com/)) {
        const regexp = /(^|[\s\t\n]+)https*:\/\/(www\.)*youtube\.com\/(.*?v=([^&\s]+)(&[^\s]+)*)/gi;
        const youtubeVideo = $href.replace(regexp, (match, p0, p1, p2, p3) => {
            return p3;
        });
        // <iframe class='embed-responsive-item' src='https://www.youtube.com/embed/${youtubeVideo}?rel=0' allowfullscreen  width='1900' height='1200'></iframe>
        return `
            <div class='youtube' data-embed='${youtubeVideo}'>
                <div class='play-button'></div>
                <img src='https://img.youtube.com/vi/${youtubeVideo}/sddefault.jpg'>
            </div>
            <div class='image_inline_text'><strong>${text || ''}</strong> ${title || ''}</div>
        `;
    }
    let serverName = '';
    if (document.domain === 'localhost' && !$href.match(/^http/)) {
        serverName = 'http://localhost:8080';
    }
    const src = `${serverName}${$href}`;
    const href = $href.replace(/(w=[0-9]+)/, 'w=1800');
    const mediaClass = [];
    const result = src.match(/#([a-z0-9,]+)$/);
    if (result) {
        const allClasses = result[1].split(',');
        if (allClasses[0] === 'card') {
            return `
                <div class='card float-right col-lg-4 col-md-6 col-sm-12 p-0 ml-2 mb-2 mt-2'>
                    <img class='card-img-top' src='${src}' alt='${title || text}'>
                    <div class='card-body'>
                        <h5 class='card-title'>${text || ''}</h5>
                        <p class='card-text'>${title || ''}</p>
                    </div>
                </div>`;
        } else if (allClasses[0] === 'card2') {
            return `
                <div class='float-right card col-lg-7 col-md-7 col-sm-12 p-0 ml-2 mb-2 mt-2'>
                    <div class='row no-gutters'>
                        <div class='col-md-4'>
                            <img class='card-img img-fluid' src='${src}' alt='${title || text}'>
                        </div>
                        <div class='col-md-8'>
                            <div class='card-body'>
                                <h5 class='card-title'>${text || ''}</h5>
                                <p class='card-text'>${title || ''}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
        for (let i = 0, l = allClasses.length; i < l; i += 1) {
            mediaClass.push(allClasses[i]);
        }
    }
    return `
        <p class='image_inline ${mediaClass.join(' ')}'>
            <a href='${href}' data-smoothzoom='group1' title='${title || text}'>
                <img src='${src}' alt='${title || text}' title='${title || text}' class='img-fluid'>
            </a>
            <div class='image_inline_text'><strong>${text || ''}</strong> ${title || ''}</div>
        </p>`;
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
class HtmlUtilities {
    static replaceMarked(input) {
        if (typeof input === 'string') {
            const fixedInput = HtmlUtilities.fixImageLinksWhiteSpace(input);
            return marked(fixedInput);
        }
    }

    static fixImageLinksWhiteSpace(input) {
        function replacerImageWhiteSpace(match, p1, p2, p3) {
            const imageSrc = p2.replace(/ /g, '%20');
            const result = `![${p1}](${imageSrc}${p3})`;
            return result;
        }
        const reg = /\!\[(.+?)\]\((.+?\.[a-z]{3,4})(.*?)\)/gi;
        return input.replace(reg, replacerImageWhiteSpace);
    }

    static inlineImageSize($input, $size) {
        const input = $input.replace(/(<img.+?)\?w=[0-9]+/gi, `$1?w=${$size}`);
        return input;
    }

    static replaceAt(string, index, replace) {
        return string.substring(0, index) + replace + string.substring(index + 1);
    }

    static dropFirstLetter($string) {
        let mode = 0;
        for (let i = 0, l = $string.length; i < l; i += 1) {
            const letter = $string.charAt(i);
            if (letter === '<') {
                mode = 1;
            } else if (letter === '>') {
                mode = 0;
            }
            if (mode === 0 && letter.match(/\w/)) {
                return HtmlUtilities.replaceAt($string, i, `<span class='blog-drop-letter'>${letter}</span>`);
            }
        }
        return $string;
    }

    static dropFirstLetterAfterHr($string) {
        const stringParts = $string.split('<hr>');
        for (let i = 0, l = stringParts.length; i < l; i += 1) {
            stringParts[i] = HtmlUtilities.dropFirstLetter(stringParts[i]);
        }
        return stringParts.join('<hr>');
    }

    static cleanHtml($input) {
        const input = $input.replace(/<(h[1-9]).+?>.+?<\/\1>/gi, '');
        return input.replace(/<.+?>/g, ' ');
    }

    static replaceDataTags($content, article) {
        if (typeof $content !== 'string') {
            return $content;
        }
        let content = $content;
        function replacerTags(match, $p1, $p2) {
            const p1 = $p1.replace(/\+/g, ' ');
            // console.log('replacerTags', match, p1, p2);
            if (p1.match(/^fa-/)) {
                let result = `<span class='fa ${p1}'></span>`;
                if (typeof p2 !== 'undefined') {
                    const count = parseInt(p2.trim(), 10);
                    if (typeof count === 'number') {
                        result = new Array(count + 1).join(result);
                    }
                }
                return result;
            } else if (typeof $p2 !== 'undefined') {
                const p2 = $p2.replace(/\+/g, ' ');
                const command = p2.trim();
                let result = util.getString(article, p1.split('.')) || '';
                if (command === 'size') {
                    result = util.formatBytes(result, 2);
                } else if (command === 'date') {
                    result = util.isoDateNormalized(result);
                } else if (command === 'dim') {
                    result = util.formatDim(result);
                } else if (command === 'position') {
                    result = util.formatPosition(result);
                }

                return result;
            }
            return util.getString(article, p1.split('.')) || '';
        }

        const reg = /\[:([a-z_\-0-9.\+]+)(\s[a-z_\-0-9.\+]+)*?\]/gi;
        content = content.replace(reg, replacerTags);
        return content;
    }

    static mapNorwegianLetter(match, letter) {
        switch (letter) {
            case 'æ': return 'a';
            case 'ø': return 'o';
            case 'å': return 'a';
            default: return letter;
        }
    }

    static asUrlSafe($input) {
        return encodeURIComponent(
            HtmlUtilities.stripTags($input),
        );
    }

    static asLinkPart($input) {
        let input = String($input).toLowerCase();
        input = input.replace(/([æøå])/gi, HtmlUtilities.mapNorwegianLetter);
        input = input.replace(/[^a-z0-9_-]/g, '-');
        input = input.replace(/-+/g, '-');
        return input;
    }

    static stripTags($input) {
        return String($input).replace(/<[^>]*>/g, '');
    }

    static uc($input) {
        return String($input).toUpperCase();
    }
}

export default HtmlUtilities;
