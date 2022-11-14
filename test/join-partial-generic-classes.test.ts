import { JoinPartialGenericClasses } from '../src';
import { C } from './helpers/c';
import { D } from './helpers/d';

interface IUnionOfAAndB<T> extends C<T>, D<T> {}

type IUnionOfAAndBConstructor = new <T>(...args: any[]) => IUnionOfAAndB<T>;

describe('Join Partial Classes Test Suite', () => {
    test('Should join A and B together into one class', () => {
        class UnionOfAAndB<
            T
        > extends JoinPartialGenericClasses<IUnionOfAAndBConstructor>(
            C,
            D
        )<T> {}
        const instance = new UnionOfAAndB<number>();

        expect(instance.foo(1)).toEqual(1);
        expect(instance.bar(2)).toEqual(2);
    });
});
