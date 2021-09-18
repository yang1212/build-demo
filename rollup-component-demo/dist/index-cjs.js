
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _ = require('lodash');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var ___default = /*#__PURE__*/_interopDefaultLegacy(_);

function add1(a, b) {
  return a + b;
}

function add(a, b) {
  return a + b;
}

function mul(a, b) {
  return a * b;
}

var sum = add1(1, 4);

var value = ___default['default'].concat([1, 3], 4);

console.log(sum, value);

exports.add = add;
exports.mul = mul;
//# sourceMappingURL=index-cjs.js.map
