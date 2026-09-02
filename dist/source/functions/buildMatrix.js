'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
var _matrix = _interopRequireDefault(require('../objects/matrix.js'))
var _updateMatrixPoints = _interopRequireDefault(require('./updateMatrixPoints.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
const buildMatrix = (x = {
  coordinate: 0,
  props: []
}, y = {
  coordinate: 0,
  props: []
}, z = {
  coordinate: 1,
  props: []
}, matrixProps = []) => (0, _updateMatrixPoints.default)((0, _matrix.default)(x, y, z, matrixProps))
var _default = exports.default = buildMatrix
