import { Point2DLike } from '../typings'

const DEGREES_PER_RADIANS = 180 / Math.PI

type CircleOptions = {
  radian: number
  smooth?: number
}

const create = async (r: number = 1, smooth: number = 360) => {
  const points: Point2DLike[] = []

  for (let i = 0; i < smooth; i++) {
    points.push([r * Math.cos(i * DEGREES_PER_RADIANS), r * Math.sin(i * DEGREES_PER_RADIANS)])
  }

  return points
}

class Circle {
  private _radian: number
  private _smooth: number
  /**
   *
   */
  constructor({ radian = 1, smooth = 360 }: CircleOptions) {
    this._radian = radian
    this._smooth = smooth ?? 360
  }

  get radian() {
    return this.radian
  }

  set smooth(value: number) {
    this._smooth = value
  }

  get smooth() {
    return this._smooth
  }

  async getVertexPosition() {
    return await create(this._radian, this._smooth)
  }
}

export { Circle }
