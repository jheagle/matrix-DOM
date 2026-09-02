'use strict'

require('core-js/modules/es.symbol.description.js')
require('core-js/modules/es.regexp.exec.js')
require('core-js/modules/web.dom-collections.iterator.js')
Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _siFunciona = _interopRequireDefault(require('si-funciona'))
var _alterCoordinates = _interopRequireDefault(require('./alterCoordinates.js'))
var _getCoordinateRanges = _interopRequireDefault(require('./getCoordinateRanges.js'))
var _getHighestAbsoluteCoordinate = _interopRequireDefault(require('./getHighestAbsoluteCoordinate.js'))
var _getMatrixRange3 = _interopRequireDefault(require('./getMatrixRange.js'))
var _nextCell = _interopRequireDefault(require('./nextCell.js'))
var _randomPoint = _interopRequireDefault(require('./randomPoint.js'))
var _randDirectionWithInterval = _interopRequireDefault(require('./randDirectionWithInterval.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
function _slicedToArray (r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest() }
function _nonIterableRest () { throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.') }
function _unsupportedIterableToArray (r, a) { if (r) { if (typeof r === 'string') return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return t === 'Object' && r.constructor && (t = r.constructor.name), t === 'Map' || t === 'Set' ? Array.from(r) : t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0 } }
function _arrayLikeToArray (r, a) { (a == null || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n }
function _iterableToArrayLimit (r, l) { var t = r == null ? null : typeof Symbol !== 'undefined' && r[Symbol.iterator] || r['@@iterator']; if (t != null) { var e; var n; var i; var u; var a = []; var f = !0; var o = !1; try { if (i = (t = t.call(r)).next, l === 0) { if (Object(t) !== t) return; f = !1 } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r } finally { try { if (!f && t.return != null && (u = t.return(), Object(u) !== u)) return } finally { if (o) throw n } } return a } }
function _arrayWithHoles (r) { if (Array.isArray(r)) return r }
/**
 * Generate a random starting point for a line with the provided length and direction.
 * @function
 * @param {module:matrixObjects~Matrix} matrix - The matrix in which the line will be drawn.
 * @param {number|null} [length=null] - The intended length (intersected tiles) of the resulting line, null will use a random length within the matrix
 * @param {module:matrixObjects~Direction|null} [dir=null] - The direction the line will extend towards, null will use a random direction within the matrix
 * @param {module:matrixObjects~Point} maxRanges - The maximum ranges for the point. If null, the matrix will be used.
 * @returns {module:matrixObjects~Point}
 */
const randomStart = function (matrix) {
  let length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null
  let dir = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null
  let maxRanges = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null
  const _getMatrixRange = (0, _getMatrixRange3.default)(matrix)
  const _getMatrixRange2 = _slicedToArray(_getMatrixRange, 2)
  const minPoint = _getMatrixRange2[0]
  const maxPoint = _getMatrixRange2[1]
  maxRanges = (0, _getCoordinateRanges.default)(minPoint, maxPoint, maxRanges)
  if (length === null) {
    const highestCoordinate = (0, _getHighestAbsoluteCoordinate.default)(maxRanges)
    // length must be at least 1, and less than the highest coordinate in the matrix
    length = _siFunciona.default.randomInteger(highestCoordinate - 2, 1)
  }
  if (dir === null) {
    dir = (0, _randDirectionWithInterval.default)(matrix, null, length, maxRanges)
  }
  // check direction has at least one non-zero component
  if (dir.x === 0 && dir.y === 0 && dir.z === 0) {
    throw new Error('Direction must have at least one non-zero coordinate')
  }
  const multipleToLength = (0, _alterCoordinates.default)(dir, coordinate => {
    if (length % coordinate !== 0) {
      return null
    }
    return length / coordinate
  })
  const timesToLength = _siFunciona.default.reduceObject(multipleToLength, (times, coordinate) => {
    if (coordinate === null) {
      return times
    }
    if (coordinate < times) {
      return coordinate
    }
    return times
  }, length)
  for (let i = 0; i < timesToLength; ++i) {
    maxRanges = dir.prev(maxRanges)
  }
  return (0, _nextCell.default)(minPoint, (0, _randomPoint.default)(matrix, maxRanges))
}
var _default = exports.default = randomStart
