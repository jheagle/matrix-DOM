import 'core-js/stable'
import siFunciona from 'si-funciona'
import point from '../objects/point'

/**
 * Generate point data for each item in the matrix
 * WARNING: This is a recursive function.
 * @function
 * @param {module:matrixObjects~MatrixColumn|module:matrixObjects~MatrixRow} item - A special DomItem
 * which is either a layer, row, or column in a matrix.
 * @param {module:matrixObjects~Point} pnt - A point to be added to a specific Matrix Column
 * @returns {module:matrixObjects~MatrixColumn|module:matrixObjects~MatrixRow}
 */
const bindPointData = (item, pnt = point(0, 0, 0)) => siFunciona.mergeObjects(
  item,
  item.point
    ? { point: siFunciona.cloneObject(pnt) }
    : { children: item.children.map((el, i) => bindPointData(el, Object.assign({}, pnt, { [el.axis]: i }))) }
)

export default bindPointData
