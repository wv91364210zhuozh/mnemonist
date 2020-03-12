/**
 * Mnemonist KDTree Typings
 * =========================
 */
import {IArrayLike} from './utils/types';

export default class KDTree<V>{

  // Members
  dimensions: number;
  size: number;
  visited: number;

  // Constructor
  constructor(Token?: new () => K);

  // Methods
  nearestNeighbor(point: Array<number>): V;
  kNearestNeighbors(k: number, point: Array<number>): Array<V>;
  linearKNearestNeighbors(k: number, point: Array<number>): Array<V>;
  inspect(): any;

  // Statics
  static from<I>(iterable: Iterable<[I, Array<number>]>, dimensions: number): KDTree<I>;
  static from(axes: IArrayLike): KDTree<number>;
  static from<I>(axes: IArrayLike, labels: Array<I>): KDTree<I>;
}

