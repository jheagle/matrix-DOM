import 'core-js/stable'
import siFunciona from 'si-funciona'
import getCoordinateRanges from './getCoordinateRanges.js'
import getMatrixRange from './getMatrixRange.js'
import point from '../objects/point.js'

/**
 * Get random point within a matrix
 * @function
 * @param {module:matrixObjects~Matrix} matrix - The matrix that the point will be contained within.
 * @param {module:matrixObjects~Point|null} maxRanges - The maximum ranges for the point. If null, the matrix will be used.
 * @returns {module:matrixObjects~Direction}
 */
const randPoint = (matrix, maxRanges = null) => {
  const [minPoint, maxPoint] = getMatrixRange(matrix)
  const coordinateRanges = getCoordinateRanges(minPoint, maxPoint, maxRanges)
  return point(
    siFunciona.randomInteger(coordinateRanges.x, minPoint.x),
    siFunciona.randomInteger(coordinateRanges.y, minPoint.y),
    siFunciona.randomInteger(coordinateRanges.z, minPoint.z)
  )
}

export default randPoint
