'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _adjacentEdgePoints = _interopRequireDefault(require('./functions/adjacentEdgePoints'))
var _adjacentPoints = _interopRequireDefault(require('./functions/adjacentPoints'))
var _areEqualPoints = _interopRequireDefault(require('./functions/areEqualPoints'))
var _bindPointData = _interopRequireDefault(require('./functions/bindPointData'))
var _checkInBetween = _interopRequireDefault(require('./functions/checkInBetween'))
var _checkValidPoint = _interopRequireDefault(require('./functions/checkValidPoint'))
var _getAllPoints = _interopRequireDefault(require('./functions/getAllPoints'))
var _getAxisLengths = _interopRequireDefault(require('./functions/getAxisLengths'))
var _getDomItemFromElement = _interopRequireDefault(require('./functions/getDomItemFromElement'))
var _getDomItemFromPoint = _interopRequireDefault(require('./functions/getDomItemFromPoint'))
var _getFirstAxisOfCoordinate = _interopRequireDefault(require('./functions/getFirstAxisOfCoordinate'))
var _getHighestAbsoluteCoordinate = _interopRequireDefault(require('./functions/getHighestAbsoluteCoordinate'))
var _getPointFromElement = _interopRequireDefault(require('./functions/getPointFromElement'))
var _getPointsLine = _interopRequireDefault(require('./functions/getPointsLine'))
var _getPointsLines = _interopRequireDefault(require('./functions/getPointsLines'))
var _lineEndPoint = _interopRequireDefault(require('./functions/lineEndPoint'))
var _nextCell = _interopRequireDefault(require('./functions/nextCell'))
var _pointAndCoordinateToDirection = _interopRequireDefault(require('./functions/pointAndCoordinateToDirection'))
var _pointDifference = _interopRequireDefault(require('./functions/pointDifference'))
var _pointToDirection = _interopRequireDefault(require('./functions/pointToDirection'))
var _pointsToDirection = _interopRequireDefault(require('./functions/pointsToDirection'))
var _randDirection = _interopRequireDefault(require('./functions/randDirection'))
var _randomStart = _interopRequireDefault(require('./functions/randomStart'))
var _testPointsBetween = _interopRequireDefault(require('./functions/testPointsBetween'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * @file All of the siFunciona matrix functions for working with a grid of points.
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module matrixFunctions
 */
var _default = exports.default = {
  adjacentEdgePoints: _adjacentEdgePoints.default,
  adjacentPoints: _adjacentPoints.default,
  areEqualPoints: _areEqualPoints.default,
  bindPointData: _bindPointData.default,
  checkInBetween: _checkInBetween.default,
  checkValidPoint: _checkValidPoint.default,
  getAllPoints: _getAllPoints.default,
  getAxisLengths: _getAxisLengths.default,
  getDomItemFromElement: _getDomItemFromElement.default,
  getDomItemFromPoint: _getDomItemFromPoint.default,
  getFirstAxisOfCoordinate: _getFirstAxisOfCoordinate.default,
  getHighestAbsoluteCoordinate: _getHighestAbsoluteCoordinate.default,
  getPointFromElement: _getPointFromElement.default,
  getPointsLine: _getPointsLine.default,
  getPointsLines: _getPointsLines.default,
  lineEndPoint: _lineEndPoint.default,
  nextCell: _nextCell.default,
  pointAndCoordinateToDirection: _pointAndCoordinateToDirection.default,
  pointDifference: _pointDifference.default,
  pointToDirection: _pointToDirection.default,
  pointsToDirection: _pointsToDirection.default,
  randDirection: _randDirection.default,
  randomStart: _randomStart.default,
  testPointsBetween: _testPointsBetween.default
}
