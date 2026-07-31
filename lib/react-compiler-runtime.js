// Polyfill for react/compiler-runtime (React 19) running under React 18
const $empty = Symbol.for('react.memo_cache_sentinel')
const React = require('react')

exports.c = function (size) {
  return React.useState(() => {
    const $ = new Array(size)
    for (let ii = 0; ii < size; ii++) {
      $[ii] = $empty
    }
    $[$empty] = true
    return $
  })[0]
}
