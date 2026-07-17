'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _point = _interopRequireDefault(require('./point.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * MatrixTile is an Object which stores a reference a {@link Point} and can be populated with additionally associated
 * fields.
 * @typedef {Object.<string, module:matrixObjects~Point>} module:matrixObjects~MatrixTile
 * @property {module:matrixObjects~Point} point - a reference to its location in a {@link module:matrixObjects~Matrix}
 */

/**
 * A default tile in the {@link module:matrixObjects~Matrix}
 * @function
 * @returns {module:matrixObjects~MatrixTile}
 */
const tile = () => ({
  point: {}
})
var _default = exports.default = tile
