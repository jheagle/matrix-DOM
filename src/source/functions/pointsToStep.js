import 'core-js/stable'
import areEqualPoints from './areEqualPoints.js'
import point from '../objects/point.js'
import pointToDirection from './pointToDirection.js'
import pointDifference from './pointDifference.js'
import siFunciona from 'si-funciona'

/**
 * Retrieve a directional coordinate value based on two provided points
 * (directions consist of two zero coordinates and a single coordinate of 1 / -1)
 * @function
 * @param {module:matrixObjects~Point} start - The first point to assess.
 * @param {module:matrixObjects~Point} end - The other point to assess.
 * @returns {module:matrixObjects~Direction}
 */
const pointsToStep = (start, end) => {
    if (areEqualPoints(start, end)) {
        return point(0, 0, 0)
    }
    const difference = pointDifference(start, end)
    const simplifiedPoints = siFunciona.simplestRatio(difference.x, difference.y, difference.z)
    return point(...simplifiedPoints)
}

export default pointsToStep
