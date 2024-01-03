'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/modules/esnext.async-iterator.map.js')
require('core-js/modules/esnext.iterator.map.js')
require('core-js/stable')
var _siFunciona = _interopRequireDefault(require('si-funciona'))
var _point = _interopRequireDefault(require('../objects/point'))
function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }
/**
 * Generate point data for each item in the matrix
 * WARNING: This is a recursive function.
 * @function
 * @param {module:matrixObjects~MatrixColumn|module:matrixObjects~MatrixRow} item - A special DomItem
 * which is either a layer, row, or column in a matrix.
 * @param {module:matrixObjects~Point} pnt - A point to be added to a specific Matrix Column
 * @returns {module:matrixObjects~MatrixColumn|module:matrixObjects~MatrixRow}
 */
const bindPointData = function (item) {
  const pnt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _point.default)(0, 0, 0)
  return _siFunciona.default.mergeObjects(item, item.point ? {
    point: _siFunciona.default.cloneObject(pnt)
  } : {
    children: item.children.map((el, i) => bindPointData(el, Object.assign({}, pnt, {
      [el.axis]: i
    })))
  })
}
var _default = exports.default = bindPointData
