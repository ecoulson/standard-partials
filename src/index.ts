import { Constructor } from '@the-standard/types';
import { combinePartials } from './partials/combine-partials';
import { ConstructorsToInstances } from './types/constructors-to-instances';

export function JoinPartialClasses<T extends Constructor[]>(...partials: T) {
    return combinePartials<ConstructorsToInstances<T>>(class {}, partials);
}

export function JoinPartialGenericClasses<G>(...partials: Constructor[]): G {
    return combinePartials(class {}, partials) as G;
}
