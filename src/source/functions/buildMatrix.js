import matrix from '../objects/matrix.js'
import updateMatrixPoints from './updateMatrixPoints.js'

const buildMatrix = (
  x = { coordinate: 0, props: [] },
  y = { coordinate: 0, props: [] },
  z = { coordinate: 1, props: [] },
  matrixProps = []
) => updateMatrixPoints(matrix(x, y, z, matrixProps))

export default buildMatrix
