import 'core-js/stable'
import siFunciona from 'si-funciona'
import point from '../objects/point.js'
import randDirection from './randDirection.js'

/**
 * Generate a random starting point for a line with the provided length and direction.
 * @function
 * @param {module:matrixObjects~Matrix} matrix - The matrix in which the line will be drawn.
 * @param {number|null} [length=null] - The intended length (intersected tiles) of the resulting line, null will use a random length within the matrix
 * @param {module:matrixObjects~Direction|null} [dir=null] - The direction the line will extend towards, null will use a random direction within the matrix
 * @param {module:matrixObjects~Point} maxRanges - The maximum ranges for the point. If null, the matrix will be used.
 * @returns {module:matrixObjects~Point}
 */
const randomStart = (matrix, length = null, dir = null, maxRanges = null) => {
  if (length === null) {
    length = siFunciona.randomInteger(1, Math.min(matrix.length.x, matrix.length.y, matrix.length.z))
  }
  if (dir === null) {
    dir = randDirection(matrix, null, length, maxRanges)
  }
  // check direction has at least one non-zero component
  if (dir.x === 0 && dir.y === 0 && dir.z === 0) {
    throw new Error('Direction must have at least one non-zero coordinate')
  }
  return point(
    siFunciona.randomInteger(lengthLimits.x - ((length - 1) * dir.x)),
    siFunciona.randomInteger(lengthLimits.y - ((length - 1) * dir.y)),
    siFunciona.randomInteger(lengthLimits.z - ((length - 1) * dir.z))
  )
}

export default randomStart
