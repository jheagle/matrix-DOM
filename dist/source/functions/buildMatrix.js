'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
var _matrix = _interopRequireDefault(require('../objects/matrix.js'))
var _updateMatrixPoints = _interopRequireDefault(require('./updateMatrixPoints.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
const buildMatrix = function () {
  const x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    coordinate: 0,
    props: []
  }
  const y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    coordinate: 0,
    props: []
  }
  const z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    coordinate: 1,
    props: []
  }
  const matrixProps = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : []
  return (0, _updateMatrixPoints.default)((0, _matrix.default)(x, y, z, matrixProps))
}
var _default = exports.default = buildMatrix
