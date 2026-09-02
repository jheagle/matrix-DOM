'use strict'

require('core-js/modules/es.symbol.description.js')
require('core-js/modules/es.regexp.exec.js')
require('core-js/modules/web.dom-collections.iterator.js')
Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _getCoordinateRanges = _interopRequireDefault(require('./getCoordinateRanges.js'))
var _getMatrixRange3 = _interopRequireDefault(require('./getMatrixRange.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
function _slicedToArray (r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest() }
function _nonIterableRest () { throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.') }
function _unsupportedIterableToArray (r, a) { if (r) { if (typeof r === 'string') return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return t === 'Object' && r.constructor && (t = r.constructor.name), t === 'Map' || t === 'Set' ? Array.from(r) : t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0 } }
function _arrayLikeToArray (r, a) { (a == null || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n }
function _iterableToArrayLimit (r, l) { var t = r == null ? null : typeof Symbol !== 'undefined' && r[Symbol.iterator] || r['@@iterator']; if (t != null) { var e; var n; var i; var u; var a = []; var f = !0; var o = !1; try { if (i = (t = t.call(r)).next, l === 0) { if (Object(t) !== t) return; f = !1 } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r } finally { try { if (!f && t.return != null && (u = t.return(), Object(u) !== u)) return } finally { if (o) throw n } } return a } }
function _arrayWithHoles (r) { if (Array.isArray(r)) return r }
/**
 * Find the range of the matrix from smallest to largest point.
 * @function
 * @param {module:matrixObjects~Matrix} matrix - The matrix that the point will be contained within.
 * @param {module:matrixObjects~Point|null} maxRanges - The maximum ranges for the point. If null, the matrix will be used.
 * @returns {module:matrixObjects~Direction}
 */
const getAvailableRanges = function (matrix) {
  const maxRanges = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null
  const _getMatrixRange = (0, _getMatrixRange3.default)(matrix)
  const _getMatrixRange2 = _slicedToArray(_getMatrixRange, 2)
  const minPoint = _getMatrixRange2[0]
  const maxPoint = _getMatrixRange2[1]
  return (0, _getCoordinateRanges.default)(minPoint, maxPoint, maxRanges)
}
var _default = exports.default = getAvailableRanges
