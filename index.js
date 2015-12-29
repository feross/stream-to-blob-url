/* global Blob, URL */

var streamToBuffer = require('stream-with-known-length-to-buffer')

module.exports = function getBlobURL (stream, length, mimeType, cb) {
  streamToBuffer(stream, length, function (err, buf) {
    if (err) return cb(err)
    var blob = mimeType ? new Blob([ buf ], { type: mimeType }) : new Blob([ buf ])
    var url = URL.createObjectURL(blob)
    cb(null, url)
  })
}
