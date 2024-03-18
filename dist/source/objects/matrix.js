'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/modules/web.dom-collections.iterator.js')
require('core-js/stable')
var _siFunciona = _interopRequireDefault(require('si-funciona'))
var _jsonDom = _interopRequireDefault(require('json-dom'))
function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }
/**
 * MatrixColumn is a DomItem which represents the x axis and also stores {@link module:matrixObjects~MatrixTile}
 * @typedef {
 * module:domObjects~DomItem|module:matrixObjects~MatrixTile
 * } module:matrixObjects~MatrixColumn
 */

/**
 * MatrixRow is the parent of a group of {@link module:matrixObjects~MatrixTile}
 * @typedef {module:domObjects~DomItem} module:matrixObjects~MatrixRow
 * @property {module:matrixObjects~axis} axis - The axis will be 'y'
 * @property {Array.<module:matrixObjects~MatrixColumn>} children - all of the MatrixTile items as part of this
 * MatrixRow
 */

/**
 * MatrixLayer is the parent of a group of {@link module:matrixObjects~MatrixTile}
 * @typedef {module:domObjects~DomItem} module:matrixObjects~MatrixLayer
 * @property {module:matrixObjects~axis} axis - The axis will be 'y'
 * @property {Array.<module:matrixObjects~MatrixRow>} children - all of the MatrixRow items as part of this
 * MatrixLayer
 */

/**
 * Matrix is a multi-level {@link module:domObjects~DomItem} which is used to visually represent a
 * mathematical grid / matrix.
 * The matrix consists of four DomItem levels, at the top tier is the Matrix container with class matrix.
 * The second tier represents the z axis (with property axis='z') and has the class layer.
 * The third tier represents the y axis (with property axis='y') and has the class row.
 * The fourth (final) tier represents the x axis (with property axis='x') and has the class column.
 * The {@link module:matrixObjects~MatrixTile} is attached on the x axis tier.
 * The number of children at each level is defined by the size of the matrix, the end result is a multidimensional
 * array.
 * @typedef {module:domObjects~DomItem} module:matrixObjects~Matrix
 * @augments module:domObjects~DomItem
 */

/**
 * Create a 3d matrix of i with x by y by z size, add additional objects for each layer as well
 * @function
 * @param {
 * {coordinate: module:matrixObjects~coordinate, props: Array.<module:matrixObjects~MatrixTile>}
 * } x - Properties and a coordinate defining the width of the matrix.
 * @param {
 * {coordinate: module:matrixObjects~coordinate, props: Array.<module:matrixObjects~MatrixRow>}
 * } y - Properties and a coordinate defining the height of the matrix.
 * @param {
 * {coordinate: module:matrixObjects~coordinate, props: Array.<module:matrixObjects~MatrixLayer>}
 * } z - Properties and a coordinate defining the depth of the matrix.
 * @param {Array.<module:matrixObjects~Matrix>} matrixProps - Properties to be added to the matrix
 * @returns {module:matrixObjects~Matrix}
 */
const matrix = function () {
  const x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    coordinate: 0,
    props: []
  }
  const y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    coordinate: 0,
    props: []
  }
  const z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    coordinate: 1,
    props: []
  }
  const matrixProps = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : []
  return _siFunciona.default.mergeObjects(_jsonDom.default.createDomItem({
    tagName: 'div',
    attributes: {
      className: 'matrix'
    },
    children: _siFunciona.default.buildArray(_siFunciona.default.mergeObjectsMutable(_jsonDom.default.createDomItem({
      axis: 'z',
      tagName: 'div',
      attributes: {
        className: 'layer'
      },
      children: _siFunciona.default.buildArray(_siFunciona.default.mergeObjectsMutable(_jsonDom.default.createDomItem({
        axis: 'y',
        tagName: 'div',
        attributes: {
          className: 'row'
        },
        children: _siFunciona.default.buildArray(_siFunciona.default.mergeObjectsMutable(_jsonDom.default.createDomItem({
          axis: 'x',
          tagName: 'div',
          attributes: {
            className: 'column'
          },
          children: []
        }), ...x.props), x.coordinate)
      }), ...y.props), y.coordinate)
    }), ...z.props), z.coordinate)
  }), ...matrixProps)
}
var _default = exports.default = matrix
