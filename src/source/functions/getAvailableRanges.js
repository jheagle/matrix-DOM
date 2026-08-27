import 'core-js/stable'
import getMatrixRange from './getMatrixRange.js'
import nextCell from './nextCell.js'
import point from '../objects/point.js'
import pointDifference from './pointDifference.js'

/**
 * Get random point within a matrix
 * @function
 * @param {module:matrixObjects~Matrix} matrix - The matrix that the point will be contained within.
 * @param {module:matrixObjects~Point|null} maxRanges - The maximum ranges for the point. If null, the matrix will be used.
 * @returns {module:matrixObjects~Direction}
 */
const getAvailableRanges = (matrix, maxRanges = null) => {
  const [minPoint, maxPoint] = getMatrixRange(matrix)
  // Find the range by getting delta of min and max, then add 1 to each access to included the max point in the range
  const coordinateRanges = nextCell(pointDifference(minPoint, maxPoint), point(1, 1, 1))
  if (maxRanges) {
    coordinateRanges.x = Math.min(coordinateRanges.x, maxRanges.x)
    coordinateRanges.y = Math.min(coordinateRanges.y, maxRanges.y)
    coordinateRanges.z = Math.min(coordinateRanges.z, maxRanges.z)
  }
  return coordinateRanges
}

export default getAvailableRanges
