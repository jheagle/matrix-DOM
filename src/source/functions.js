/**
 * @file All of the siFunciona matrix functions for working with a grid of points.
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module matrixFunctions
 */
import 'core-js/stable'
import adjacentEdgePoints from './functions/adjacentEdgePoints.js'
import adjacentPoints from './functions/adjacentPoints.js'
import areEqualPoints from './functions/areEqualPoints.js'
import checkInBetween from './functions/checkInBetween.js'
import checkValidPoint from './functions/checkValidPoint.js'
import getAllPoints from './functions/getAllPoints.js'
import getAxisLengths from './functions/getAxisLengths.js'
import getDomItemFromElement from './functions/getDomItemFromElement.js'
import getDomItemFromPoint from './functions/getDomItemFromPoint.js'
import getFirstAxisOfCoordinate from './functions/getFirstAxisOfCoordinate.js'
import getHighestAbsoluteCoordinate from './functions/getHighestAbsoluteCoordinate.js'
import getPointFromElement from './functions/getPointFromElement.js'
import getPointsLine from './functions/getPointsLine.js'
import getPointsLines from './functions/getPointsLines.js'
import lineEndPoint from './functions/lineEndPoint.js'
import nextCell from './functions/nextCell.js'
import pointAndCoordinateToDirection from './functions/pointAndCoordinateToDirection.js'
import pointDifference from './functions/pointDifference.js'
import pointToDirection from './functions/pointToDirection.js'
import pointsToDirection from './functions/pointsToDirection.js'
import randDirection from './functions/randDirection.js'
import randomStart from './functions/randomStart.js'
import testPointsBetween from './functions/testPointsBetween.js'
import updateMatrixPoint from './functions/updateMatrixPoint.js'
import updateMatrixPoints from './functions/updateMatrixPoints.js'

export default {
  adjacentEdgePoints,
  adjacentPoints,
  areEqualPoints,
  checkInBetween,
  checkValidPoint,
  getAllPoints,
  getAxisLengths,
  getDomItemFromElement,
  getDomItemFromPoint,
  getFirstAxisOfCoordinate,
  getHighestAbsoluteCoordinate,
  getPointFromElement,
  getPointsLine,
  getPointsLines,
  lineEndPoint,
  nextCell,
  pointAndCoordinateToDirection,
  pointDifference,
  pointToDirection,
  pointsToDirection,
  randDirection,
  randomStart,
  testPointsBetween,
  updateMatrixPoints,
}
