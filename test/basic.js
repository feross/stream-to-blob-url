/* global fetch */

const test = require('tape')
const toBlobURL = require('../')
const toStream = require('string-to-stream')

test('basic usage', function (t) {
  t.plan(1)
  const str = '0123456789'
  const stream = toStream(str)
  toBlobURL(stream, 'text/plain')
    .then(blobUrl => fetch(blobUrl))
    .then(res => res.text())
    .then(text => {
      t.deepEqual(text, str)
    })
    .catch(err => t.fail(err))
})

test('basic usage (without mimeType)', function (t) {
  t.plan(1)
  const str = '0123456789'
  const stream = toStream(str)
  toBlobURL(stream)
    .then(blobUrl => fetch(blobUrl))
    .then(res => res.text())
    .then(text => {
      t.deepEqual(text, str)
    })
    .catch(err => t.fail(err))
})

test('stress test usage', function (t) {
  t.plan(1)
  const str = new Array(1000000).join('0123456789')
  const stream = toStream(str)
  toBlobURL(stream, 'text/plain')
    .then(blobUrl => fetch(blobUrl))
    .then(res => res.text())
    .then(text => {
      t.deepEqual(text, str)
    })
    .catch(err => t.fail(err))
})

test('invalid usage (pass function as mimeType argument)', function (t) {
  t.plan(1)
  const str = '0123456789'
  const stream = toStream(str)
  toBlobURL(stream, () => {})
    .then(() => t.fail('Promise should reject'))
    .catch(() => t.ok('Promise rejected'))
})
