'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
/**
 * Test if the provided point exists in the matrix.
 * @function
 * @param {module:matrixObjects~Point} pnt - Provide a point to validate.
 * @param {module:matrixObjects~Matrix} matrix - The matrix that contains valid points.
 * @returns {boolean}
 */
const checkValidPoint = (pnt, matrix) => !!matrix.children[pnt.z] && !!matrix.children[pnt.z].children[pnt.y] && !!matrix.children[pnt.z].children[pnt.y].children[pnt.x] && !!matrix.children[pnt.z].children[pnt.y].children[pnt.x].point
var _default = exports.default = checkValidPoint
