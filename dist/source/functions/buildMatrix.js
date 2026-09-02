'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
var _matrix = _interopRequireDefault(require('../objects/matrix.js'))
var _updateMatrixPoints = _interopRequireDefault(require('./updateMatrixPoints.js'))
var _jsonDom = _interopRequireDefault(require('json-dom'))
var _siFunciona = _interopRequireDefault(require('si-funciona'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Create the matrix and assign the correct points to each tile.
 * @function
 * @param {module:matrixObjects~Point} dimensions - The dimensions of the matrix to be created
 * @param {module:matrixObjects~coordinate} dimensions.x - The width of the matrix
 * @param {module:matrixObjects~coordinate} dimensions.y - The height of the matrix
 * @param {module:matrixObjects~coordinate} dimensions.z - The depth of the matrix
 * @param {Object} props - Additional properties to be added to the matrix
 * @param {Array.<module:matrixObjects~MatrixTile>} props.x - Additional properties to be added to the x axis
 * @param {Array.<module:matrixObjects~MatrixRow>} props.y - Additional properties to be added to the y axis
 * @param {Array.<module:matrixObjects~MatrixLayer>} props.z - Additional properties to be added to the z axis
 * @param {Array.<module:matrixObjects~Matrix>} props.matrix - Additional properties to be added to the matrix
 * @returns {module:matrixObjects~Matrix}
 */
const buildMatrix = function () {
  const dimensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    x: 0,
    y: 0,
    z: 1
  }
  const props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    x: [],
    y: [],
    z: [],
    matrix: []
  }
  return _siFunciona.default.pipe(_jsonDom.default.setParentItemReferences, _updateMatrixPoints.default)((0, _matrix.default)(dimensions, props))
}
var _default = exports.default = buildMatrix
