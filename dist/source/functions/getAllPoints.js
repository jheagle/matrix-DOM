'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/modules/esnext.async-iterator.reduce.js')
require('core-js/modules/esnext.iterator.constructor.js')
require('core-js/modules/esnext.iterator.reduce.js')
require('core-js/stable')
/**
 * Return an array of all the points in the matrix
 * @function
 * @param {module:matrixObjects~Matrix|module:matrixObjects~MatrixColumn} matrix - The matrix to retrieve
 * points from.
 * @param {Array.<module:matrixObjects~Point>} [allPoints=[]] - The array of points to be returned
 * @returns {Array.<module:matrixObjects~Point>}
 */
const getAllPoints = function (matrix) {
  const allPoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : []
  return matrix.point ? allPoints.concat([matrix.point]) : matrix.children.reduce((allPoints, child) => allPoints.concat(getAllPoints(child, [])), [])
}
var _default = exports.default = getAllPoints
