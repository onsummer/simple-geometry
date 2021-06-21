type CylinderOptions = {
  width: number
  height: number
  smooth?: number
}

class Cylinder {
  width: number
  height: number
  smooth: number

  /**
   *
   */
  constructor({ width = 1, height = 1, smooth = 360 }: CylinderOptions) {
    this.width = width
    this.height = height
    this.smooth = smooth === undefined ? 360 : smooth
  }
}

export { Cylinder }
