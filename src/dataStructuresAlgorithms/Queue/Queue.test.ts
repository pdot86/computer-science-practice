import Queue from './Queue';
import { describe, test, expect, beforeAll, beforeEach, afterEach } from 'bun:test';

let queue: Queue;

describe('Queue', () => {
  beforeAll(() => {
    queue = new Queue();
  });

  beforeEach(() => {
    queue[0] = 1;
    queue[1] = 2;
    queue[2] = 3;
    queue[3] = 4;
    queue[4] = 5;
  });

  afterEach(() => {
    queue.length = 0;
  });

  describe('add(element: any): boolean', () => {
    test('appends an item to the queue', () => {
      queue.add(6);

      expect(queue.length).toStrictEqual(6);
    });

    test('returns true', () => {
      const addedElement = queue.add(6);

      expect(addedElement).toStrictEqual(true);
    });
  });

  describe('dequeue(): any', () => {
    test('shifts the queue returning the first item', () => {
      const element = queue.dequeue();

      expect(element).toStrictEqual(1);
    });
  });

  describe('enqueue(element: any): boolean', () => {
    test('appends an item to the queue', () => {
      queue.enqueue(6);

      expect(queue.length).toStrictEqual(6);
    });

    test('returns true', () => {
      const enqueuedElement = queue.enqueue(6);

      expect(enqueuedElement).toStrictEqual(true);
    });
  });

  describe('element(): any', () => {
    test('returns the first item in the queue', () => {
      expect(queue.element()).toStrictEqual(1);
    });

    test('does not remove the item from the queue', () => {
      expect(queue.length).toStrictEqual(5);

      queue.element();

      expect(queue.length).toStrictEqual(5);
    });

    test('returns null if there is nothing in the queue', () => {
      const emptyQueue = new Queue();
      const result = emptyQueue.element();

      expect(emptyQueue).toBeInstanceOf(Queue);
      expect(result).toBeNull();
    });
  });

  describe('offer(element: any): boolean', () => {
    test('appends an item to the queue', () => {
      queue.offer(6);

      expect(queue.length).toStrictEqual(6);
    });

    test('returns true', () => {
      const offeredElement = queue.offer(6);

      expect(offeredElement).toStrictEqual(true);
    });
  });

  describe('peek(): unknown', () => {
    test('returns the first item in the queue', () => {
      expect(queue.peek()).toStrictEqual(1);
    });

    test('does not remove the item from the queue', () => {
      expect(queue.length).toStrictEqual(5);

      queue.peek();

      expect(queue.length).toStrictEqual(5);
    });

    test('returns null if there is nothing in the queue', () => {
      const emptyQueue = new Queue();
      const result = emptyQueue.peek();

      expect(emptyQueue).toBeInstanceOf(Queue);
      expect(result).toBeNull();
    });
  });

  describe('poll(): any', () => {
    test('shifts the queue returning the first item', () => {
      const element = queue.poll();

      expect(element).toStrictEqual(1);
    });
  });

  describe('remove(): any', () => {
    test('shifts the queue returning the first item', () => {
      const element = queue.remove();

      expect(element).toStrictEqual(1);
    });
  });
});
