import 'core-js/stable'
import checkValidPoint from './checkValidPoint.js'
import direction from '../objects/direction.js'
import getAvailableRanges from './getAvailableRanges.js'
import getAxisLengths from './getAxisLengths.js'
import pointDifference from './pointDifference.js'
import randomPoint from './randomPoint.js'

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
const randDirection = (matrix, start = null, interval = null, maxRanges = null) => {
  // Use the available ranges as the max ranges
  maxRanges = getAvailableRanges(matrix, maxRanges)
  const startLimits = point(maxRanges.x, maxRanges.y, maxRanges.z)
  if (interval !== null) {
    startLimits.x = startLimits.x >= interval ? maxRanges.x - interval : startLimits.x
    startLimits.y = startLimits.y >= interval ? maxRanges.y - interval : startLimits.y
    startLimits.z = startLimits.z >= interval ? maxRanges.z - interval : startLimits.z
  }
  if (start === null) {
    start = randomPoint(matrix, startLimits)
  }
  if (!checkValidPoint(start, matrix)) {
    const matrixDimensions = getAxisLengths(matrix)
    throw new Error(`The given point (${start.x}, ${start.y}, ${start.z}) is not valid within the given matrix (${matrixDimensions.x}, ${matrixDimensions.y}, ${matrixDimensions.z})`)
  }
  // end limits should be offset by start point coordinates and ensure at least one end is interval distance from start
  const endLimits = point(
    maxRanges.x,
    maxRanges.y,
    maxRanges.z
  )

  // Find a valid point within the matrix to use as our next point
  const validPoint = randomPoint(matrix, maxRanges)
  // Get the difference from start to the new
  const delta = pointDifference(start, validPoint)
  return direction(
    delta.x,
    delta.y,
    delta.z
  )
}

export default randDirection
