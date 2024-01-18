import Stack from './Stack';
import { describe, test, expect, beforeAll, beforeEach, afterEach } from 'bun:test';

let stack: Stack;

describe('Stack', () => {
  beforeAll(() => {
    stack = new Stack();
  });

  beforeEach(() => {
    stack[0] = 1;
    stack[1] = 2;
    stack[2] = 3;
    stack[3] = 4;
    stack[4] = 5;
  });

  afterEach(() => {
    stack.length = 0;
  });

  describe('empty(): void', () => {
    test('clears out all items from the stack', () => {
      expect(stack.length).toStrictEqual(5);

      stack.empty();

      expect(stack.length).toStrictEqual(0);
    });
  });

  describe('peek(): unknown', () => {
    test('returns the last item in the stack', () => {
      expect(stack.peek()).toStrictEqual(5);
    });

    test('does not remove the item from the stack', () => {
      expect(stack.length).toStrictEqual(5);

      stack.peek();

      expect(stack.length).toStrictEqual(5);
    });
  });

  describe('pop(): unknown', () => {
    test('removes the last item in the stack', () => {
      stack.pop();

      expect(stack.length).toStrictEqual(4);
    });

    test('returns the last item in the stack', () => {
      const item = stack.pop();

      expect(stack.length).toStrictEqual(4);
      expect(item).toStrictEqual(5);
    });
  });

  describe('push(elem: any): any', () => {
    test('appends an item to the stack', () => {
      stack.push(6);

      expect(stack.length).toStrictEqual(6);
    });

    test('returns the item', () => {
      const item = 6;

      const pushedItem = stack.push(item);

      expect(pushedItem).toStrictEqual(item);
    });
  });

  describe('search(item: any, fromIndex: number = 0): number', () => {
    describe('when the item is found in the stack', () => {
      test('returns the index of the first matching item', () => {
        const searchItem = 3;
        const foundItemIndex = stack.search(searchItem);

        expect(foundItemIndex).toStrictEqual(2);
        expect(stack[foundItemIndex]).toStrictEqual(searchItem);
      });
    });

    describe('when the item is NOT found in the stack', () => {
      test('returns -1', () => {
        expect(stack.search(9)).toStrictEqual(-1);
      });
    });
  });
});
