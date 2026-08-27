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
import buildMatrix from './functions/buildMatrix.js'
import checkInBetween from './functions/checkInBetween.js'
import checkValidPoint from './functions/checkValidPoint.js'
import getAbsolutePoint from './functions/getAbsolutePoint.js'
import getAllPoints from './functions/getAllPoints.js'
import getAxisLengths from './functions/getAxisLengths.js'
import getDomItemFromElement from './functions/getDomItemFromElement.js'
import getDomItemFromPoint from './functions/getDomItemFromPoint.js'
import getFirstAxisOfCoordinate from './functions/getFirstAxisOfCoordinate.js'
import getHighestAbsoluteCoordinate from './functions/getHighestAbsoluteCoordinate.js'
import getLineIntersectPoints from './functions/getLineIntersectPoints.js'
import getLinePoints from './functions/getLinePoints.js'
import getLineRelativePoints from './functions/getLineRelativePoints.js'
import getLineTransitionPoints from './functions/getLineTransitionPoints.js'
import getPointFromDomItem from './functions/getPointFromDomItem.js'
import getPointFromElement from './functions/getPointFromElement.js'
import getPointsForLines from './functions/getPointsForLines.js'
import lineEndPoint from './functions/lineEndPoint.js'
import nextCell from './functions/nextCell.js'
import pointAndCoordinateToDirection from './functions/pointAndCoordinateToDirection.js'
import pointDifference from './functions/pointDifference.js'
import pointsToStep from './functions/pointsToStep.js'
import pointToDirection from './functions/pointToDirection.js'
import randDirection from './functions/randDirection.js'
import randomStart from './functions/randomStart.js'
import sortAxisCoordinates from './functions/sortAxisCoordinates.js'
import testPointsBetween from './functions/testPointsBetween.js'
import updateMatrixPoints from './functions/updateMatrixPoints.js'

export default {
  adjacentEdgePoints,
  adjacentPoints,
  areEqualPoints,
  buildMatrix,
  checkInBetween,
  checkValidPoint,
  getAbsolutePoint,
  getAllPoints,
  getAxisLengths,
  getDomItemFromElement,
  getDomItemFromPoint,
  getFirstAxisOfCoordinate,
  getHighestAbsoluteCoordinate,
  getLineIntersectPoints,
  getLinePoints,
  getLineRelativePoints,
  getLineTransitionPoints,
  getPointFromDomItem,
  getPointFromElement,
  getPointsForLines,
  lineEndPoint,
  nextCell,
  pointAndCoordinateToDirection,
  pointDifference,
  pointsToStep,
  pointToDirection,
  randDirection,
  randomStart,
  sortAxisCoordinates,
  testPointsBetween,
  updateMatrixPoints,
}
