'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _point = _interopRequireDefault(require('../objects/point'))
function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }
/**
 * Retrieve the point associated with the provided element.
 * @function
 * @param {Node|HTMLElement} elem - Provide an element associated with
 * a point.
 * @returns {module:matrixObjects~Point}
 */
const getPointFromElement = elem => (0, _point.default)(Array.from(elem.parentNode.childNodes).indexOf(elem), Array.from(elem.parentNode.parentNode.childNodes).indexOf(elem.parentNode), Array.from(elem.parentNode.parentNode.parentNode.childNodes).indexOf(elem.parentNode.parentNode))
var _default = exports.default = getPointFromElement
