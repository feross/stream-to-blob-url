var str = require('string-to-stream')
var test = require('tape')
var toBlobURL = require('../')
var xhr = require('xhr')

test('basic usage', function (t) {
  t.plan(3)
  var stream = str('0123456789')
  toBlobURL(stream, 10, 'text/plain', function (err, url) {
    t.error(err)
    xhr(url, function (err, res, buf) {
      t.error(err)
      t.deepEqual(buf, '0123456789')
    })
  })
})
