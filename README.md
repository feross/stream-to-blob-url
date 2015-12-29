# stream-to-blob-url [![Build Status][travis-image]][travis-url] [![NPM Version][npm-image]][npm-url] [![NPM Downloads][downloads-image]][downloads-url]

#### Convert a Readable Stream to a Blob URL

[![Sauce Test Status](https://saucelabs.com/browser-matrix/stream-to-blob-url.svg)](https://saucelabs.com/u/stream-to-blob-url)

This package converts a Readable Stream into a Blob URL, with just one Buffer
allocation (excluding allocations done internally by the streams implementation).

The length of the stream should be known in advance.

This module is used by [WebTorrent](https://webtorrent.io).

### install

```
npm install stream-to-blob-url
```

### usage

```js
var toBlobURL = require('stream-to-blob-url')

toBlobURL(fs.createReadStream('file.txt'), 1000, 'file.txt', function (err, url) {
  if (err) return console.error(err.message)
  console.log(url)
})
```

### license

MIT. Copyright (c) [Feross Aboukhadijeh](http://feross.org).

[travis-image]: https://img.shields.io/travis/feross/stream-to-blob-url.svg?style=flat
[travis-url]: https://travis-ci.org/feross/stream-to-blob-url
[npm-image]: https://img.shields.io/npm/v/stream-to-blob-url.svg?style=flat
[npm-url]: https://npmjs.org/package/stream-to-blob-url
[downloads-image]: https://img.shields.io/npm/dm/stream-to-blob-url.svg?style=flat
[downloads-url]: https://npmjs.org/package/stream-to-blob-url
