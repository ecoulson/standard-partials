import { Constructor } from '@the-standard/types';
import { ConstructorsToInstances } from '../types/constructors-to-instances';
import { combinePartials } from './combine-partials';

export function JoinPartialClasses<T extends Constructor[]>(...partials: T) {
    return combinePartials<ConstructorsToInstances<T>>(class {}, partials);
}
