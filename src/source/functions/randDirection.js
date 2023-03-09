import 'core-js/stable'
import siFunciona from 'si-funciona'
import point from '../objects/point'

/**
 * Get random direction point
 * @function
 * @param {Array.<module:matrixObjects~Point>} [useCoordinates=[]] - An array of possible directions.
 * @returns {module:matrixObjects~Direction}
 */
const randDirection = (useCoordinates = []) => useCoordinates.length
  ? useCoordinates[siFunciona.randomInteger(useCoordinates.length)]
  : point(0, 0, 0)

export default randDirection
