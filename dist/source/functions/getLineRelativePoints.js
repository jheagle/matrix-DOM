'use strict'

require('core-js/modules/es.symbol.description.js')
require('core-js/modules/es.regexp.exec.js')
require('core-js/modules/web.dom-collections.iterator.js')
Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _areEqualPoints = _interopRequireDefault(require('./areEqualPoints.js'))
var _getAbsolutePoint = _interopRequireDefault(require('./getAbsolutePoint.js'))
var _point = _interopRequireDefault(require('../objects/point.js'))
var _pointsToStep = _interopRequireDefault(require('./pointsToStep.js'))
var _sortAxisCoordinates = _interopRequireDefault(require('./sortAxisCoordinates.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
function _slicedToArray (r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest() }
function _nonIterableRest () { throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.') }
function _unsupportedIterableToArray (r, a) { if (r) { if (typeof r === 'string') return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return t === 'Object' && r.constructor && (t = r.constructor.name), t === 'Map' || t === 'Set' ? Array.from(r) : t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0 } }
function _arrayLikeToArray (r, a) { (a == null || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n }
function _iterableToArrayLimit (r, l) { var t = r == null ? null : typeof Symbol !== 'undefined' && r[Symbol.iterator] || r['@@iterator']; if (t != null) { var e; var n; var i; var u; var a = []; var f = !0; var o = !1; try { if (i = (t = t.call(r)).next, l === 0) { if (Object(t) !== t) return; f = !1 } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r } finally { try { if (!f && t.return != null && (u = t.return(), Object(u) !== u)) return } finally { if (o) throw n } } return a } }
function _arrayWithHoles (r) { if (Array.isArray(r)) return r }
/**
 * Having provided two points, return an array of integer transition points connecting 'start' and 'end'.
 * @function
 * @param {module:matrixObjects~Point} start - The starting location of the line.
 * @param {module:matrixObjects~Point} end - The final line destination.
 * @param {Array.<module:matrixObjects~Point>} [line=[]] - The resulting line to connect start and end.
 * @returns {Array.<module:matrixObjects~Point>}
 */
const getLineRelativePoints = function (start, end) {
  const line = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : []
  if ((0, _areEqualPoints.default)(start, end)) {
    return [start]
  }

  // Get the difference between start and end and simplify each relative coordinate
  const simplifiedDirection = (0, _pointsToStep.default)(start, end)

  // Increment each coordinate by 1 either in the positive or negative direction
  const stepPoint = (0, _point.default)(start.x < end.x ? 1 : -1, start.y < end.y ? 1 : -1, start.z < end.z ? 1 : -1)

  // Use the sorted coordinates to determine the priority of updating each coordinate
  const _sortAxisCoordinate = (0, _sortAxisCoordinates.default)((0, _getAbsolutePoint.default)(simplifiedDirection), 'desc')
  const _sortAxisCoordinate2 = _slicedToArray(_sortAxisCoordinate, 3)
  const highest = _sortAxisCoordinate2[0]
  const middle = _sortAxisCoordinate2[1]
  const lowest = _sortAxisCoordinate2[2]

  // The error range adustment for each cycle
  const incrementMid = 2 * middle.coordinate
  const incrementLow = 2 * lowest.coordinate

  // These are the upper limit ranges of error used to reset when we exceed the limit
  const errResetMid = 2 * (middle.coordinate - highest.coordinate)
  const errResetLow = 2 * (lowest.coordinate - highest.coordinate)

  // Update the coordinates of this point as we move along the line
  const currPoint = (0, _point.default)(start.x, start.y, start.z)

  // These are the error ranges on the lower bound that we will update for each point
  let errRangeMid = 2 * middle.coordinate - highest.coordinate
  let errRangeLow = 2 * lowest.coordinate - highest.coordinate
  line.push(start)
  while (currPoint[highest.axis] !== end[highest.axis]) {
    // Increment highest axis of currPoint by stepPoint highest axis (1 or -1)
    currPoint[highest.axis] += stepPoint[highest.axis]
    if (errRangeMid < 0) {
      errRangeMid += incrementMid
    } else {
      currPoint[middle.axis] += stepPoint[middle.axis]
      errRangeMid += errResetMid
    }
    if (errRangeLow < 0) {
      errRangeLow += incrementLow
    } else {
      currPoint[lowest.axis] += stepPoint[lowest.axis]
      errRangeLow += errResetLow
    }
    line.push((0, _point.default)(currPoint.x, currPoint.y, currPoint.z))
  }
  return line
}
var _default = exports.default = getLineRelativePoints
