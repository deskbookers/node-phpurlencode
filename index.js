"use strict";
var encode = function(str) {
  return encodeURIComponent(str + '')
    .replace(/[!'()]/g, escape)
    .replace(/\*/g, "%2A")
    .replace(/\%20/g, "+")
    .replace(/~/g, '%7E');
};

var decode = function(str) {
  return decodeURIComponent(
    (str + '')
    .replace(/%(?![\da-f]{2})/gi, function () {
      return '%25';
    })
    .replace(/\+/g, '%20')
  );
};

var definePrototypes = function () {
  if (!String.prototype.urlencode) {
    global.String.prototype.urlencode = function () {
      return encode(this);
    };
  }
  if (!String.prototype.urldecode) {
    global.String.prototype.urldecode = function () {
      return decode(this);
    };
  }
};

module.exports = encode;
module.exports.encode = encode;
module.exports.decode = decode;
module.exports.definePrototypes = definePrototypes;
