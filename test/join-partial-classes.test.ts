import { JoinPartialClasses } from '../src/partials/join-partial-classes';

class A {
    foo() {
        return 1;
    }
}

class B {
    bar() {
        return 2;
    }
}

describe('Join Partial Classes Test Suite', () => {
    test('Should join A and B together into one class', () => {
        class UnionOfAAndB extends JoinPartialClasses(A, B) {}
        const instance = new UnionOfAAndB();

        expect(instance.foo()).toEqual(1);
        expect(instance.bar()).toEqual(2);
    });
});
