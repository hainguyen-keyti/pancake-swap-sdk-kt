
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./pancakeswap-kt.cjs.production.min.js')
} else {
  module.exports = require('./pancakeswap-kt.cjs.development.js')
}
