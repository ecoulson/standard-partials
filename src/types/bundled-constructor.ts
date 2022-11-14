import { GenericConstructor } from '@the-standard/types';
import { TupleToUnion } from './tuple-to-union';
import { UnionToIntersection } from './union-to-intersection';

export type BundledConstructor<T extends any[]> = GenericConstructor<
    UnionToIntersection<TupleToUnion<T>>
>;
