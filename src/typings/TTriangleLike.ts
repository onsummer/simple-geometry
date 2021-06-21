import { Point2DLike, Point3DLike } from './TPointLike'

/**
 * @description 2D 三角形元组，由三个二维点类型 `Point2DLike` 构成的普通数组。
 * @see {@link Point2DLike}
 * @example
 * const tri2d = [[0, 0], [0, 1], [1, 0]]
 */
type Triangle2DLike = [Point2DLike, Point2DLike, Point2DLike]

/**
 * @description 3D 三角形元组，由三个三维点类型 `Point2DLike` 构成的普通数组。
 * @see {@link Point3DLike}
 * @example
 * const tri2d = [[0, 0, 1], [0, 1, -1], [1, 0, 0.5]]
 */
type Triangle3DLike = [Point3DLike, Point3DLike, Point3DLike]

export { Triangle2DLike, Triangle3DLike }
