'use strict'

require('core-js/modules/es.symbol.description.js')
require('core-js/modules/es.regexp.exec.js')
require('core-js/modules/web.dom-collections.iterator.js')
Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _alterCoordinates = _interopRequireDefault(require('./alterCoordinates.js'))
var _checkValidPoint = _interopRequireDefault(require('./checkValidPoint.js'))
var _direction = _interopRequireDefault(require('../objects/direction.js'))
var _getAbsolutePoint = _interopRequireDefault(require('./getAbsolutePoint.js'))
var _getAxisLengths = _interopRequireDefault(require('./getAxisLengths.js'))
var _getCoordinateRanges = _interopRequireDefault(require('./getCoordinateRanges.js'))
var _getMatrixRange3 = _interopRequireDefault(require('./getMatrixRange.js'))
var _nextCell = _interopRequireDefault(require('./nextCell.js'))
var _point = _interopRequireDefault(require('../objects/point.js'))
var _pointDifference = _interopRequireDefault(require('./pointDifference.js'))
var _randDirection = _interopRequireDefault(require('./randDirection.js'))
var _randomPoint = _interopRequireDefault(require('./randomPoint.js'))
var _siFunciona = _interopRequireDefault(require('si-funciona'))
var _testIntervalFits = _interopRequireDefault(require('./testIntervalFits.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
function _slicedToArray (r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest() }
function _nonIterableRest () { throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.') }
function _unsupportedIterableToArray (r, a) { if (r) { if (typeof r === 'string') return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return t === 'Object' && r.constructor && (t = r.constructor.name), t === 'Map' || t === 'Set' ? Array.from(r) : t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0 } }
function _arrayLikeToArray (r, a) { (a == null || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n }
function _iterableToArrayLimit (r, l) { var t = r == null ? null : typeof Symbol !== 'undefined' && r[Symbol.iterator] || r['@@iterator']; if (t != null) { var e; var n; var i; var u; var a = []; var f = !0; var o = !1; try { if (i = (t = t.call(r)).next, l === 0) { if (Object(t) !== t) return; f = !1 } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r } finally { try { if (!f && t.return != null && (u = t.return(), Object(u) !== u)) return } finally { if (o) throw n } } return a } }
function _arrayWithHoles (r) { if (Array.isArray(r)) return r }
/**
 * Get random direction point.
 * NOTE: It is possible that the direction is 0,0,0 indicating no move.
 * @function
 * @param {module:matrixObjects~Matrix} matrix - The matrix that the point will be contained within.
 * @param {module:matrixObjects~Point|null} [start=null] - The point the direction will start from, null for random
 * @param {number|null} [interval=null] - An interval where a line would intersect in the direction, null for random
 * @param {module:matrixObjects~Point|null} [maxRanges=null] - The maximum ranges for the point. If null, the matrix will be used.
 * @returns {module:matrixObjects~Direction}
 */
const randDirectionWithInterval = function (matrix) {
  let start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null
  const interval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null
  let maxRanges = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null
  const _getMatrixRange = (0, _getMatrixRange3.default)(matrix)
  const _getMatrixRange2 = _slicedToArray(_getMatrixRange, 2)
  const minPoint = _getMatrixRange2[0]
  const maxPoint = _getMatrixRange2[1]
  // Use the available ranges as the max ranges
  maxRanges = (0, _getCoordinateRanges.default)(minPoint, maxPoint, maxRanges)
  const intervalFits = (0, _testIntervalFits.default)(matrix, interval, start === null ? maxRanges : (0, _pointDifference.default)(start, maxRanges))
  if (!intervalFits.x && !intervalFits.y && !intervalFits.z) {
    throw new Error('The given interval ('.concat(interval, ') will not fit in this matrix'))
  }
  if (start === null) {
    // The range is the the total numbers available, but the limit is the highest possible number
    let startLimits = (0, _pointDifference.default)((0, _point.default)(1, 1, 1), maxRanges)
    if (interval !== null) {
      startLimits = (0, _alterCoordinates.default)(startLimits, (coordinate, axis) => intervalFits[axis] ? coordinate - Math.abs(interval) : coordinate)
    }
    // random point with offset of minimum of matrix
    start = (0, _nextCell.default)(minPoint, (0, _randomPoint.default)(matrix, startLimits))
  }
  if (!(0, _checkValidPoint.default)(start, matrix)) {
    const matrixDimensions = (0, _getAxisLengths.default)(matrix)
    throw new Error('The given point ('.concat(start.x, ', ').concat(start.y, ', ').concat(start.z, ') is not valid within the given matrix (').concat(matrixDimensions.x, ', ').concat(matrixDimensions.y, ', ').concat(matrixDimensions.z, ')'))
  }
  // Reduce limits by start (absolute values)
  const startOffset = (0, _getAbsolutePoint.default)((0, _pointDifference.default)(minPoint, start))
  // end limits should be offset by start point coordinates and ensure at least one end is interval distance from start
  const endLimits = (0, _point.default)(maxRanges.x - startOffset.x - 1, maxRanges.y - startOffset.y - 1, maxRanges.z - startOffset.z - 1)
  const randDir = (0, _randDirection.default)(matrix, start, endLimits)
  const validPoint = (0, _nextCell.default)(startOffset, randDir.next(start))
  const delta = (0, _pointDifference.default)(start, validPoint)
  // check if any coordinate already has the coorect interval
  if (interval !== null) {
    // none of the coordinates have the interval, so pick a valid one to update
    const axisFit = _siFunciona.default.reduceObject(intervalFits, (fitResults, fits, axis) => {
      if (fits) {
        fitResults.push(axis)
      }
      return fitResults
    }, [])
    // Pick a random axis that fits and set that coordinate to the interval
    const fixedAxis = axisFit[_siFunciona.default.randomInteger(axisFit.length)]
    delta[fixedAxis] = interval
  }
  return (0, _direction.default)(delta.x, delta.y, delta.z)
}
var _default = exports.default = randDirectionWithInterval
