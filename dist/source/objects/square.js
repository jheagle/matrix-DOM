'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/stable')

const _matrix = _interopRequireDefault(require('./matrix'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * Return a single layer matrix where x and y are equal
 * @function
 * @param {Array.<module:matrixObjects~MatrixTile>} [x=[]] - All the data to be presented as part of the
 * specified point, requires MatrixTile base
 * @param {Array.<module:matrixObjects~MatrixRow>} [y=[]] - Additional data to append to the MatrixRow
 * @param {Array.<module:matrixObjects~MatrixLayer>} [z=[]] - Additional data to append to the MatrixLayer
 * @param {Array.<module:matrixObjects~Matrix>} [matrixProps=[]] - Additional data to append to the Matrix
 * @param {number} size - Used to define height and width as equal values (depth is set to 1)
 * @returns {module:matrixObjects~Matrix}
 */
const square = function square () {
  const _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
  const _ref$x = _ref.x
  const x = _ref$x === void 0 ? [] : _ref$x
  const _ref$y = _ref.y
  const y = _ref$y === void 0 ? [] : _ref$y
  const _ref$z = _ref.z
  const z = _ref$z === void 0 ? [] : _ref$z
  const _ref$matrixProps = _ref.matrixProps
  const matrixProps = _ref$matrixProps === void 0 ? [] : _ref$matrixProps

  const size = arguments.length > 1 ? arguments[1] : undefined
  return (0, _matrix.default)({
    coordinate: size,
    props: x
  }, {
    coordinate: size,
    props: y
  }, {
    coordinate: 1,
    props: z
  }, matrixProps)
}

const _default = square
exports.default = _default
