const metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdown');
const collections = require('metalsmith-collections');
const permalinks = require('metalsmith-permalinks');
const layouts = require('metalsmith-layouts');
const autoprefixer = require('metalsmith-autoprefixer');
const cleanCSS = require('metalsmith-clean-css');
const sitemap = require('metalsmith-sitemap');
const Handlebars = require('handlebars');
const moment = require('moment');

Handlebars.registerHelper('is', function (value, test, options) {
    if (value === test) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

Handlebars.registerHelper('date', function (date) {
    return moment(date, "MM-DD-YYYY").format('Do MMM \'YY');
});

metalsmith(__dirname)
    .metadata({
        site: {
            name: 'cave',
            description: "My humble homepage of sorts.",
            generatorname: "Metalsmith",
            generatorurl: "http://metalsmith.io/"
        }
    })
    .source('./src')
    .destination('./dist')
    .clean(true)
    .use(collections({
        posts: {
            pattern: 'thoughts/*.md',
            sortBy: 'date',
            reverse: true
        },
        pages: {
            pattern: '*.md',
            sortBy: 'menu-order'
        }
    }))
    .use(markdown())
    // Generate ToC
    // .use(tableOfContentsTask())
    .use(permalinks())
    .use(layouts({
        engine: 'handlebars',
        directory: 'layouts',
        default: 'default.hbs',
        partials: 'layouts/partials'
    }))
    .use(autoprefixer())
    .use(cleanCSS({
        files: 'assets/css/*.css',
        cleanCSS: {
            rebase: true
            // level: 2
        }
    }))
    .use(sitemap({
        hostname: "https://andreasvirkus.me"
    }))
    .build(function (err) {
        if (err) throw err;
    });
