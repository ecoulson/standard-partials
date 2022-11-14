import { Constructor } from '@the-standard/types';

export type ConstructorsToInstances<T extends Constructor[]> = {
    [K in keyof T]: T[K] extends Constructor ? InstanceType<T[K]> : T[K];
};
