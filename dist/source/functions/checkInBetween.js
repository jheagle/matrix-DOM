'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _testPointsBetween = _interopRequireDefault(require('./testPointsBetween'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Given two points, check the cells between using specified function.
 * When inclusive is set to true the provided start and end points will also be tested
 * @function
 * @param {...*} args - These args match the parameter list for {@link module:matrixFunctions~testPointsBetween}
 * @returns {boolean}
 */
const checkInBetween = function () {
  return !!(0, _testPointsBetween.default)(...arguments).true.length
}
var _default = exports.default = checkInBetween
