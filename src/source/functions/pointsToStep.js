import 'core-js/stable'
import areEqualPoints from './areEqualPoints.js'
import direction from '../objects/direction.js'
import point from '../objects/point.js'
import pointDifference from './pointDifference.js'
import siFunciona from 'si-funciona'

/**
 * Find the lowest common ratio of the difference between the coordinates of two points.
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
    const simplifiedCoordinates = siFunciona.simplestRatio(difference.x, difference.y, difference.z)
    return direction(...simplifiedCoordinates)
}

export default pointsToStep
