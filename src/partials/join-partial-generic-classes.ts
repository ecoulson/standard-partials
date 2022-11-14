import { Constructor } from '@the-standard/types';
import { combinePartials } from './combine-partials';

export function JoinPartialGenericClasses<G>(...partials: Constructor[]): G {
    return combinePartials(class {}, partials) as G;
}
