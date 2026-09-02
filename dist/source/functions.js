'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _adjacentEdgePoints = _interopRequireDefault(require('./functions/adjacentEdgePoints.js'))
var _adjacentPoints = _interopRequireDefault(require('./functions/adjacentPoints.js'))
var _alterCoordinates = _interopRequireDefault(require('./functions/alterCoordinates.js'))
var _areEqualPoints = _interopRequireDefault(require('./functions/areEqualPoints.js'))
var _buildMatrix = _interopRequireDefault(require('./functions/buildMatrix.js'))
var _checkInBetween = _interopRequireDefault(require('./functions/checkInBetween.js'))
var _checkValidPoint = _interopRequireDefault(require('./functions/checkValidPoint.js'))
var _getAbsolutePoint = _interopRequireDefault(require('./functions/getAbsolutePoint.js'))
var _getAllPoints = _interopRequireDefault(require('./functions/getAllPoints.js'))
var _getAvailableRanges = _interopRequireDefault(require('./functions/getAvailableRanges.js'))
var _getAxisLengths = _interopRequireDefault(require('./functions/getAxisLengths.js'))
var _getCoordinateRanges = _interopRequireDefault(require('./functions/getCoordinateRanges.js'))
var _getDomItemFromElement = _interopRequireDefault(require('./functions/getDomItemFromElement.js'))
var _getDomItemFromPoint = _interopRequireDefault(require('./functions/getDomItemFromPoint.js'))
var _getFirstAxisOfCoordinate = _interopRequireDefault(require('./functions/getFirstAxisOfCoordinate.js'))
var _getHighestAbsoluteCoordinate = _interopRequireDefault(require('./functions/getHighestAbsoluteCoordinate.js'))
var _getLineIntersectPoints = _interopRequireDefault(require('./functions/getLineIntersectPoints.js'))
var _getLinePoints = _interopRequireDefault(require('./functions/getLinePoints.js'))
var _getLineRelativePoints = _interopRequireDefault(require('./functions/getLineRelativePoints.js'))
var _getLineTransitionPoints = _interopRequireDefault(require('./functions/getLineTransitionPoints.js'))
var _getMatrixRange = _interopRequireDefault(require('./functions/getMatrixRange.js'))
var _getPointFromDomItem = _interopRequireDefault(require('./functions/getPointFromDomItem.js'))
var _getPointFromElement = _interopRequireDefault(require('./functions/getPointFromElement.js'))
var _getPointsForLines = _interopRequireDefault(require('./functions/getPointsForLines.js'))
var _lineEndPoint = _interopRequireDefault(require('./functions/lineEndPoint.js'))
var _nextCell = _interopRequireDefault(require('./functions/nextCell.js'))
var _pointDifference = _interopRequireDefault(require('./functions/pointDifference.js'))
var _pointsToStep = _interopRequireDefault(require('./functions/pointsToStep.js'))
var _prevCell = _interopRequireDefault(require('./functions/prevCell.js'))
var _randDirection = _interopRequireDefault(require('./functions/randDirection.js'))
var _randDirectionWithInterval = _interopRequireDefault(require('./functions/randDirectionWithInterval.js'))
var _randomPoint = _interopRequireDefault(require('./functions/randomPoint.js'))
var _randomStart = _interopRequireDefault(require('./functions/randomStart.js'))
var _sortAxisCoordinates = _interopRequireDefault(require('./functions/sortAxisCoordinates.js'))
var _testIntervalFits = _interopRequireDefault(require('./functions/testIntervalFits.js'))
var _testPointsBetween = _interopRequireDefault(require('./functions/testPointsBetween.js'))
var _updateMatrixPoints = _interopRequireDefault(require('./functions/updateMatrixPoints.js'))
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
  alterCoordinates: _alterCoordinates.default,
  areEqualPoints: _areEqualPoints.default,
  buildMatrix: _buildMatrix.default,
  checkInBetween: _checkInBetween.default,
  checkValidPoint: _checkValidPoint.default,
  getAbsolutePoint: _getAbsolutePoint.default,
  getAllPoints: _getAllPoints.default,
  getAvailableRanges: _getAvailableRanges.default,
  getAxisLengths: _getAxisLengths.default,
  getCoordinateRanges: _getCoordinateRanges.default,
  getDomItemFromElement: _getDomItemFromElement.default,
  getDomItemFromPoint: _getDomItemFromPoint.default,
  getFirstAxisOfCoordinate: _getFirstAxisOfCoordinate.default,
  getHighestAbsoluteCoordinate: _getHighestAbsoluteCoordinate.default,
  getLineIntersectPoints: _getLineIntersectPoints.default,
  getLinePoints: _getLinePoints.default,
  getLineRelativePoints: _getLineRelativePoints.default,
  getLineTransitionPoints: _getLineTransitionPoints.default,
  getMatrixRange: _getMatrixRange.default,
  getPointFromDomItem: _getPointFromDomItem.default,
  getPointFromElement: _getPointFromElement.default,
  getPointsForLines: _getPointsForLines.default,
  lineEndPoint: _lineEndPoint.default,
  nextCell: _nextCell.default,
  pointDifference: _pointDifference.default,
  pointsToStep: _pointsToStep.default,
  prevCell: _prevCell.default,
  randDirection: _randDirection.default,
  randDirectionWithInterval: _randDirectionWithInterval.default,
  randomPoint: _randomPoint.default,
  randomStart: _randomStart.default,
  sortAxisCoordinates: _sortAxisCoordinates.default,
  testIntervalFits: _testIntervalFits.default,
  testPointsBetween: _testPointsBetween.default,
  updateMatrixPoints: _updateMatrixPoints.default
}
