'use strict'

const cheerio       = require('cheerio');
const PluginError   = require('plugin-error');
const hljs          = require('highlight.js');
const through       = require('through2');

const packageName   = require('./package.json').name;
const defaultConfig = {
    selector: 'pre code',
    ignoreClass: 'nohighlight',
    cheerio: {
        decodeEntities: false,
    }
}

function highlight (text, config) {
    const $ = cheerio.load(text, config.cheerio);
    $(config.selector)
        .not((i, el) => $(el).hasClass(config.ignoreClass))
        .each((i, el) => {
            const codeBlock = $(el).html();
            const language = $(el).attr('data-lang') ? $(el).attr('data-lang').toLower : '';
            const result = (language && hljs.getLanguage(language))
                ? hljs.highlight(language, codeBlock, true)
                : hljs.highlightAuto(codeBlock);
                
            $(el).text(result.value).addClass('hljs');
        });

    return $.html() || text;
}

module.exports = (options) => {
    const config = Object.assign({}, defaultConfig, options)

    return through.obj(function (file, encoding, done) {
        if (file.isNull()) {
            return done(null, file);
        }

        if (file.isStream()) {
            this.emit('error', new PluginError(packageName, 'Streams not supported!'));
            return done();
        }

        try {
            const text = file.contents.toString();
            file.contents = Buffer.from(highlight(text, config));
        } catch (error) {
            this.emit('error', new PluginError(packageName, error));
        }

        done(null, file);
    })
}
