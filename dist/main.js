'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _functions = _interopRequireDefault(require('./source/functions'))
var _objects = _interopRequireDefault(require('./source/objects'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * All of the Matrix DOM functions and objects necessary to create DOM Matrices
 * @file
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module matrixDom
 */

/**
 * Store a reference to this scope which will be Window if rendered via browser
 */
const root = void 0 || window || global || {}

/**
 * Store reference to any pre-existing module of the same name
 * @type {module|*}
 */
const previousMatrixDom = root.jsonDom || {}

/**
 * All methods exported from this module are encapsulated within jsonDom.
 * @typedef {module:matrixDom} matrixDom
 */
const matrixDom = {}
root.matrixDom = matrixDom

/**
 * Return a reference to this library while preserving the original same-named library
 * @function
 * @returns {module:matrixDom~matrixDom|module:matrixFunctions|module:matrixObjects}
 */
const noConflict = () => {
  root.jsonDom = previousMatrixDom
  return matrixDom
}
matrixDom.noConflict = noConflict
var _default = exports.default = root.matrixDom = Object.assign(matrixDom, _functions.default, _objects.default)
