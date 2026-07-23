import 'core-js/stable'
import areEqualPoints from './areEqualPoints'
import nextCell from './nextCell'
import pointsToDirection from './pointsToDirection'

/**
 * Having provided two points, return an array of transition points connecting 'start' and 'end'. Return array
 * includes 'start' (line[0]) and 'end' (line[line.length-1])
 * @function
 * @param {module:matrixObjects~Point} start - The starting location of the line.
 * @param {module:matrixObjects~Point} end - The final line destination.
 * @param {Array.<module:matrixObjects~Point>} [line=[]] - The resulting line to connect start and end.
 * @returns {Array.<module:matrixObjects~Point>}
 */
const getLineTransitionPoints = (start, end, line = []) => {
  // function getPointsOnLine(x1, y1, x2, y2, totalPoints = 10) {
  //   const points = [];

  //   for (let i = 0; i <= totalPoints; i++) {
  //     // Calculate the fractional distance (t) from 0 to 1
  //     const t = i / totalPoints;

  //     // Linear interpolation formula
  //     const x = x1 + (x2 - x1) * t
  //     const y = y1 + (y2 - y1) * t

  //     points.push({ x, y })
  //   }

  //   return points
  // }
}

export default getLineTransitionPoints
