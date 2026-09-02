'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
var _point = _interopRequireDefault(require('../objects/point'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Retrieve the point associated with the provided DomItem.
 * @function
 * @param {DomItem} domItem - Provide a DomItem associated with a point.
 * @param {boolean} useIfExists - Whether to use the existing point if it exists.
 * @returns {module:matrixObjects~Point}
 */
const getPointFromDomItem = function (domItem) {
  var _domItem$parentItem
  const useIfExists = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true
  if (typeof (domItem === null || domItem === void 0 || (_domItem$parentItem = domItem.parentItem) === null || _domItem$parentItem === void 0 || (_domItem$parentItem = _domItem$parentItem.parentItem) === null || _domItem$parentItem === void 0 || (_domItem$parentItem = _domItem$parentItem.parentItem) === null || _domItem$parentItem === void 0 ? void 0 : _domItem$parentItem.children) === 'undefined') {
    throw Error('Invalid DomItem or not a DomItem representing a matrix point.')
  }
  if (useIfExists && domItem.point) {
    return domItem.point
  }
  return (0, _point.default)(Array.from(domItem.parentItem.children).indexOf(domItem), Array.from(domItem.parentItem.parentItem.children).indexOf(domItem.parentItem), Array.from(domItem.parentItem.parentItem.parentItem.children).indexOf(domItem.parentItem.parentItem))
}
var _default = exports.default = getPointFromDomItem
