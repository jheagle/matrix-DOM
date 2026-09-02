'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _buildMatrix = _interopRequireDefault(require('../functions/buildMatrix.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Return a single layer matrix where x and y are equal
 * @function
 * @param {Array.<module:matrixObjects~MatrixTile>} [x=[]] - All the data to be presented as part of the
 * specified point, requires MatrixTile base
 * @param {Array.<module:matrixObjects~MatrixRow>} [y=[]] - Additional data to append to the MatrixRow
 * @param {Array.<module:matrixObjects~MatrixLayer>} [z=[]] - Additional data to append to the MatrixLayer
 * @param {Array.<module:matrixObjects~Matrix>} [matrix=[]] - Additional data to append to the Matrix
 * @param {number} size - Used to define height and width as equal values (depth is set to 1)
 * @returns {module:matrixObjects~Matrix}
 */
const square = function () {
  const _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
  const _ref$x = _ref.x
  const x = _ref$x === void 0 ? [] : _ref$x
  const _ref$y = _ref.y
  const y = _ref$y === void 0 ? [] : _ref$y
  const _ref$z = _ref.z
  const z = _ref$z === void 0 ? [] : _ref$z
  const _ref$matrix = _ref.matrix
  const matrix = _ref$matrix === void 0 ? [] : _ref$matrix
  const size = arguments.length > 1 ? arguments[1] : undefined
  return (0, _buildMatrix.default)({
    x: size,
    y: size,
    z: 1
  }, {
    x: x,
    y: y,
    z: z,
    matrix: matrix
  })
}
var _default = exports.default = square
