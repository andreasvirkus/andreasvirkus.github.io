# andreasvirkus.github.io
### A humble landing page of sorts...

Metalsmith setup for my current portfolio-ish site.

Since Github doesn't let you use a subdir for your static site
(and the gh-pages hack `git subtree push --prefix dist origin gh-pages`
doesn't work with user pages), this is hosted on [Netlify](https://netlify.com).

----------
### TODO:

- Content
- ~~Sitemap & robots.txt~~
- First posts
- Link to status page (https://ajv-personal-site-status.netlify.com/ || status.andreasvirkus.me)

----------
### Roadmap

- ~~Dynamic navigation (Pjax)~~
    - ~~History API support~~
    - Smooth page transitions (menu overlay into the next page's solid white background)
- ~~Offline support & manifest.json~~
- Syntax highlighting if posts get code-heavy
- Analytics & dashboard (visitor statistics & performance metrics)
- Theming? Since the site is built on CSS custom properties, wouldn't be too much of an effort.
    - LocalStorage/IndexedDB for saving themes
- Set up Webpack, since I miss my ES6 modules


[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/andreasvirkus/netlify-metalsmith)
