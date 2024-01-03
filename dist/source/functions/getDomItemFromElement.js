'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _getDomItemFromPoint = _interopRequireDefault(require('./getDomItemFromPoint'))
var _getPointFromElement = _interopRequireDefault(require('./getPointFromElement'))
function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }
/**
 * Retrieve the DomItem associated with the provided element in the matrix
 * @function
 * @param {Node|HTMLElement} elem - Provide an element having an
 * associated DomItem.
 * @param {module:matrixObjects~Matrix} matrix - The matrix potentially containing the DomItem with Point.
 * @returns {false|module:domObjects~DomItem}
 */
const getDomItemFromElement = (elem, matrix) => (0, _getDomItemFromPoint.default)((0, _getPointFromElement.default)(elem), matrix)
var _default = exports.default = getDomItemFromElement
