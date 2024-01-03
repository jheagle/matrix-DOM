'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/modules/esnext.async-iterator.reduce.js')
require('core-js/modules/esnext.iterator.constructor.js')
require('core-js/modules/esnext.iterator.reduce.js')
require('core-js/stable')
var _getPointsLine = _interopRequireDefault(require('./getPointsLine'))
function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }
/**
 * Takes an array of arrays containing two points each. Calls getPointsLine for each array of points. Returns an
 * array of all points captured for each line segment
 * @function
 * @param {Array.<Array.<module:matrixObjects~Point>>} lines - An array of lines only containing start and end.
 * @returns {Array.<Array.<module:matrixObjects~Point>>}
 */
const getPointsLines = lines => lines.reduce((pointsArray, line) => pointsArray.concat((0, _getPointsLine.default)(...line)), [])
var _default = exports.default = getPointsLines
