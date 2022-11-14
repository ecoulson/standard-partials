import { Constructor } from '@the-standard/types';
import { BundledConstructor } from '../types/bundled-constructor';

export function combinePartials<T extends any[]>(
    derivedConstructor: Constructor,
    constructors: Constructor[]
) {
    constructors.forEach((classRef) => {
        Object.getOwnPropertyNames(classRef.prototype).forEach((name) => {
            const descriptor = Object.getOwnPropertyDescriptor(
                classRef.prototype,
                name
            );
            Object.defineProperty(
                derivedConstructor.prototype,
                name,
                descriptor || Object.create(null)
            );
        });
    });

    return derivedConstructor as BundledConstructor<T>;
}
