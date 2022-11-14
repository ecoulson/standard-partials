import { JoinPartialClasses } from '../src/partials/join-partial-classes';
import { A } from './helpers/a';
import { B } from './helpers/b';

describe('Join Partial Classes Test Suite', () => {
    test('Should join A and B together into one class', () => {
        class UnionOfAAndB extends JoinPartialClasses(A, B) {}
        const instance = new UnionOfAAndB();

        expect(instance.foo()).toEqual(1);
        expect(instance.bar()).toEqual(2);
    });
});
