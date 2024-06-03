'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _cube = _interopRequireDefault(require('./objects/cube'))
var _matrix = _interopRequireDefault(require('./objects/matrix'))
var _point = _interopRequireDefault(require('./objects/point'))
var _square = _interopRequireDefault(require('./objects/square'))
var _tile = _interopRequireDefault(require('./objects/tile'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * @file Core Matrix objects for representing DOM grid in JSON.
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module matrixObjects
 */
var _default = exports.default = {
  cube: _cube.default,
  matrix: _matrix.default,
  point: _point.default,
  square: _square.default,
  tile: _tile.default
}
