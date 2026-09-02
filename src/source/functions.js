/**
 * @file All of the siFunciona matrix functions for working with a grid of points.
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module matrixFunctions
 */
import 'core-js/stable'
import adjacentEdgePoints from './functions/adjacentEdgePoints.js'
import adjacentPoints from './functions/adjacentPoints.js'
import alterCoordinates from './functions/alterCoordinates.js'
import areEqualPoints from './functions/areEqualPoints.js'
import buildMatrix from './functions/buildMatrix.js'
import checkInBetween from './functions/checkInBetween.js'
import checkValidPoint from './functions/checkValidPoint.js'
import getAbsolutePoint from './functions/getAbsolutePoint.js'
import getAllPoints from './functions/getAllPoints.js'
import getAvailableRanges from './functions/getAvailableRanges.js'
import getAxisLengths from './functions/getAxisLengths.js'
import getCoordinateRanges from './functions/getCoordinateRanges.js'
import getDomItemFromElement from './functions/getDomItemFromElement.js'
import getDomItemFromPoint from './functions/getDomItemFromPoint.js'
import getFirstAxisOfCoordinate from './functions/getFirstAxisOfCoordinate.js'
import getHighestAbsoluteCoordinate from './functions/getHighestAbsoluteCoordinate.js'
import getLineIntersectPoints from './functions/getLineIntersectPoints.js'
import getLinePoints from './functions/getLinePoints.js'
import getLineRelativePoints from './functions/getLineRelativePoints.js'
import getLineTransitionPoints from './functions/getLineTransitionPoints.js'
import getMatrixRange from './functions/getMatrixRange.js'
import getPointFromDomItem from './functions/getPointFromDomItem.js'
import getPointFromElement from './functions/getPointFromElement.js'
import getPointsForLines from './functions/getPointsForLines.js'
import lineEndPoint from './functions/lineEndPoint.js'
import nextCell from './functions/nextCell.js'
import pointDifference from './functions/pointDifference.js'
import pointsToStep from './functions/pointsToStep.js'
import prevCell from './functions/prevCell.js'
import randDirection from './functions/randDirection.js'
import randDirectionWithInterval from './functions/randDirectionWithInterval.js'
import randomPoint from './functions/randomPoint.js'
import randomStart from './functions/randomStart.js'
import sortAxisCoordinates from './functions/sortAxisCoordinates.js'
import testIntervalFits from './functions/testIntervalFits.js'
import testPointsBetween from './functions/testPointsBetween.js'
import updateMatrixPoints from './functions/updateMatrixPoints.js'

export default {
  adjacentEdgePoints,
  adjacentPoints,
  alterCoordinates,
  areEqualPoints,
  buildMatrix,
  checkInBetween,
  checkValidPoint,
  getAbsolutePoint,
  getAllPoints,
  getAvailableRanges,
  getAxisLengths,
  getCoordinateRanges,
  getDomItemFromElement,
  getDomItemFromPoint,
  getFirstAxisOfCoordinate,
  getHighestAbsoluteCoordinate,
  getLineIntersectPoints,
  getLinePoints,
  getLineRelativePoints,
  getLineTransitionPoints,
  getMatrixRange,
  getPointFromDomItem,
  getPointFromElement,
  getPointsForLines,
  lineEndPoint,
  nextCell,
  pointDifference,
  pointsToStep,
  prevCell,
  randDirection,
  randDirectionWithInterval,
  randomPoint,
  randomStart,
  sortAxisCoordinates,
  testIntervalFits,
  testPointsBetween,
  updateMatrixPoints,
}
