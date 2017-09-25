const express = require('express')
const app = express()
const hogan = require('hogan-express')
const http_module = require('http')
const http = http_module.Server(app)
app.engine('html', hogan)
app.set('port', (process.env.PORT || 3000))
app.use('/', express.static(__dirname + '/public/'))
const Cosmic = require('cosmicjs')
const helpers = require('./helpers')
const bucket_slug = process.env.COSMIC_BUCKET || 'bitblog'
const read_key = process.env.COSMIC_READ_KEY
const write_key = process.env.COSMIC_WRITE_KEY
const partials = {
  header: 'partials/header',
  footer: 'partials/footer'
}
app.use('/', (req, res, next) => {
  if (req.path === '/favicon.ico')
    return res.end('no favi dude');
  res.locals.year = new Date().getFullYear()
  next()
})
// Home
app.get('/', (req, res) => {
  Cosmic.getObjects({ bucket: { slug: bucket_slug, read_key: read_key } }, (err, response) => {
    const cosmic = response
    if (cosmic.objects.type.posts) {
      cosmic.objects.type.posts.forEach(post => {
        const friendly_date = helpers.friendlyDate(new Date(post.created))
        post.friendly_date = friendly_date.month + ' ' + friendly_date.date
        if (post)
          post.metadata.hashes = numberWithCommas(post.metadata.hashes)
      })
    } else {
      cosmic.no_posts = true
    }
    res.locals.cosmic = cosmic
    res.render('index.html', { partials })
  })
})
// Single Post
app.get('/:slug', (req, res) => {
  Cosmic.getObjects({ bucket: { slug: bucket_slug, read_key: read_key } }, (err, response) => {
    const cosmic = response
    if (cosmic.objects.type.posts) {
      cosmic.objects.type.posts.forEach(post => {
        const friendly_date = helpers.friendlyDate(new Date(post.created))
        post.friendly_date = friendly_date.month + ' ' + friendly_date.date
        // Get current post
        if (post.slug === req.params.slug)
          res.locals.current_post = post
      })
    } else {
      cosmic.no_posts = true
    }
    res.locals.cosmic = cosmic
    res.locals.read_key = read_key
    res.locals.write_key = write_key
    res.locals.bucket_slug = bucket_slug
    res.locals.current_post.metadata.hashes = numberWithCommas(res.locals.current_post.metadata.hashes)
    res.locals.coin_hive_key = cosmic.object['coin-hive'].metadata.public_site_key
    if (!res.locals.current_post)
      res.status(404)
    res.render('post.html', { partials })
  })
})
// Author Posts
app.get('/author/:slug', (req, res) => {
  Cosmic.getObjects({ bucket: { slug: bucket_slug, read_key: read_key } }, (err, response) => {
    const cosmic = response
    if (cosmic.objects.type.posts) {
      let author_posts = []
      cosmic.objects.type.posts.forEach(post => {
        const friendly_date = helpers.friendlyDate(new Date(post.created))
        post.friendly_date = friendly_date.month + ' ' + friendly_date.date
        if (post.metadata.author.slug === req.params.slug) {
          res.locals.author = post.metadata.author
          author_posts.push(post)
        }
      })
      cosmic.objects.type.posts = author_posts
    } else {
      cosmic.no_posts = true
    }
    res.locals.author
    res.locals.cosmic = cosmic
    res.render('author.html', { partials })
  })
})
http.listen(app.get('port'), () => {
  console.info('==> 🌎  Go to http://localhost:%s', app.get('port'));
})

function numberWithCommas(x) {
  if (!x)
    return 0;
  x = x.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x))
      x = x.replace(pattern, "$1,$2");
  return x;
}