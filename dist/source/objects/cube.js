'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _matrix = _interopRequireDefault(require('./matrix'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Return a matrix where x, y, and z are equal
 * @function
 * @param {Array.<module:matrixObjects~MatrixTile>} [x=[]] - All the data to be presented as part of the
 * specified point, requires MatrixTile base
 * @param {Array.<module:matrixObjects~MatrixRow>} [y=[]] - Additional data to append to the MatrixRow
 * @param {Array.<module:matrixObjects~MatrixLayer>} [z=[]] - Additional data to append to the MatrixLayer
 * @param {Array.<module:matrixObjects~Matrix>} [matrixProps=[]] - Additional data to append to the Matrix
 * @param {number} size - Used to define height, width, and depth as equal values
 * @returns {module:matrixObjects~Matrix}
 */
const cube = function () {
  const {
    x = [],
    y = [],
    z = [],
    matrixProps = []
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
  const size = arguments.length > 1 ? arguments[1] : undefined
  return (0, _matrix.default)({
    coordinate: size,
    props: x
  }, {
    coordinate: size,
    props: y
  }, {
    coordinate: size,
    props: z
  }, matrixProps)
}
var _default = exports.default = cube
