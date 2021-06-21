/**
 * @module geometry/Cube
 */

/**
 * @description 方体的构造参数类型，默认长宽高均为 1
 */
type CubeOptions = {
  /**
   * @default 1
   */
  length?: number
  /**
   * @default 1
   */
  width?: number
  /**
   * @default 1
   */
  height?: number
}

const IDENTITY_CUBE_POSITION = new Float32Array([])

/**
 * Cube Geometry.
 * @class
 */
class Cube {
  length: number
  width: number
  height: number
  /**
   * @constructor
   * @param {CubeOptions} options
   */
  constructor({ length = 1, width = 1, height = 1 }: CubeOptions) {
    this.length = length
    this.width = width
    this.height = height
  }

  /**
   * @todo return index and 8 position coordinates.
   */
  toEBO() {
    return {
      indices: new Uint8Array(),
      positions: IDENTITY_CUBE_POSITION // TODO must calc
    }
  }

  /**
   * @todo return 36 vertex position coordinates and 36 uv coordinates.
   */
  toVBO() {
    return {
      positions: this.position,
      uv: this.uv
    }
  }

  /**
   * @todo return 36 vertex position.
   */
  get position() {
    return new Float32Array()
  }

  /**
   * @todo return 36 uv coordinates.
   */
  get uv() {
    return new Float32Array()
  }
}

export { Cube, CubeOptions }
