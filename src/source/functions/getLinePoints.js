import 'core-js/stable'
import getLineIntersectPoints from './getLineIntersectPoints.js'
import getLineRelativeLinePoints from './getLineRelativeLinePoints.js'
import getLineTransitionPoints from './getLineTransitionPoints.js'

/**
 * Takes an array of arrays containing two points each. Calls getPointsLine for each array of points. Returns an
 * array of all points captured for each line segment
 * @function
 * @param {Array.<Array.<module:matrixObjects~Point>>} lines - An array of lines only containing start and end.
 * @returns {Array.<Array.<module:matrixObjects~Point>>}
 */
const getLinePoints = (type = 'relative', start, end, line = []) => {
  switch (type) {
    case 'relative':
      return getLineRelativeLinePoints(start, end, line)
    case 'intersect':
      return getLineIntersectPoints(start, end, line)
    case 'transition':
      return getLineTransitionPoints(start, end, line)
  }
}

export default getPointsForLines
