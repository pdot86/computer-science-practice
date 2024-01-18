import CircularDoublyLinkedList from './CircularDoublyLinkedList';
import DoublyLinkedListItem from './DoublyLinkedListItem';
import { describe, test, expect, beforeAll, beforeEach, afterEach } from 'bun:test';

let list: CircularDoublyLinkedList;

describe('CircularDoublyLinkedList', () => {
  beforeAll(() => {
    list = new CircularDoublyLinkedList();
  });

  beforeEach(() => {
    list.add({ data: '1' });
    list.add({ data: '2' });
    list.add({ data: '3' });
    list.add({ data: '4' });
    list.add({ data: '5' });
  });

  afterEach(() => {
    list.clear();
  });

  test('creates an instance', () => {
    expect(list).toBeInstanceOf(CircularDoublyLinkedList);
  });

  test('items are of type DoublyLinkedListItem', () => {
    expect(list[0]).toBeInstanceOf(DoublyLinkedListItem);
  });

  describe('.first', () => {
    test('returns the first item in the list', () => {
      const item = list.first;

      expect(item.data).toStrictEqual('1');
      expect(item.next.data).toStrictEqual('2');
      expect(item.prev.data).toStrictEqual('5');
    });
  });

  describe('.head', () => {
    test('returns the head of the list', () => {
      const item = list.head;

      expect(item.data).toStrictEqual('1');
      expect(item.next.data).toStrictEqual('2');
      expect(item.prev.data).toStrictEqual('5');
    });
  });

  describe('.last', () => {
    test('returns the last item in the list', () => {
      const item = list.last;

      expect(item.data).toStrictEqual('5');
      expect(item.next.data).toStrictEqual('1');
      expect(item.prev.data).toBe('4');
    });
  });

  describe('.size', () => {
    test('returns the size of the list', () => {
      expect(list.size).toStrictEqual(5);
    });
  });

  describe('.add(item: { data: any }): void', () => {
    test('adds items to the end of the list', () => {
      expect(list.size).toStrictEqual(5);
      expect(list[4].data).toStrictEqual('5');
      expect(list[4].next).toStrictEqual(list[0]);
      expect(list[4].prev).toStrictEqual(list[3]);
      expect(list[0].prev).toStrictEqual(list[4]);

      list.add({ data: '6' });
      expect(list.size).toStrictEqual(6);
      expect(list[5].data).toStrictEqual('6');
      expect(list[5].next).toStrictEqual(list[0]);
      expect(list[5].prev).toStrictEqual(list[4]);
      expect(list[0].prev).toStrictEqual(list[5]);

      list.add({ data: '7' });
      expect(list.size).toStrictEqual(7);
      expect(list[6].data).toStrictEqual('7');
      expect(list[6].next).toStrictEqual(list[0]);
      expect(list[6].prev).toStrictEqual(list[5]);
      expect(list[0].prev).toStrictEqual(list[6]);
    });
  });

  describe('.clear(): void', () => {
    test('clears out the entire list', () => {
      expect(list.size).toBeGreaterThan(0);
      expect(list.clear()).toBeInstanceOf(CircularDoublyLinkedList);
      expect(list.size).toStrictEqual(0);
      expect(list.size).toStrictEqual(0);
    });
  });

  describe('.insert(item: { data: any }, before: DoublyLinkedListItem | null = null, after: DoublyLinkedListItem | null = null): CircularDoublyLinkedList', () => {
    test('given an item and NOT a before or after adds a new item to the end of the list', () => {
      list.insert({ data: '6' });

      expect(list.size).toStrictEqual(6);
      expect(list.last.data).toStrictEqual('6');
      expect(list.last.next).toStrictEqual(list.first);
      expect(list.last.prev).toStrictEqual(list[4]);
    });

    test('given an item and a before adds a new item before the before item', () => {
      const beforeItem = list[1];

      list.insert({ data: '6' }, beforeItem);

      expect(list.size).toStrictEqual(6);
      expect(list.toArray().join()).toMatch(['1', '6', '2', '3', '4', '5'].join());
      expect(list[1].data).toStrictEqual('6');
      expect(beforeItem.prev).toStrictEqual(list[1]);
      expect(list[0].next).toStrictEqual(list[1]);
    });

    test('given an item and an after adds a new item after the after item', () => {
      const afterItem = list[1];

      list.insert({ data: '6' }, null, afterItem);

      expect(list.size).toStrictEqual(6);
      expect(list.toArray().join()).toMatch(['1', '2', '6', '3', '4', '5'].join());
      expect(list[1].data).toStrictEqual(afterItem.data);
      expect(afterItem.next.data).toStrictEqual('6');
      expect(afterItem.prev).toStrictEqual(list[0]);
    });
  });

  describe('insertAfter(item: { data: any }, after: DoublyLinkedListItem): CircularDoublyLinkedList', () => {
    test('inserts the new node AFTER the after node', () => {
      const afterItem = list[3];

      list.insertAfter({ data: '6' }, afterItem);

      expect(list.size).toStrictEqual(6);
      expect(list.toArray().join()).toStrictEqual(['1', '2', '3', '4', '6', '5'].join());
      expect(afterItem.data).toStrictEqual(list[3].data);
      expect(afterItem.next.data).toStrictEqual('6');
      expect(afterItem.next).toStrictEqual(list[4]);
      expect(afterItem.next.prev).toStrictEqual(afterItem);
      expect(afterItem.next.next).toStrictEqual(list[5]);
    });

    test('does not insert anything if the after node is not found', () => {
      expect(() => {
        list.insertAfter({ data: '6' }, list[6]);
      }).toThrow();

      expect(list.size).toStrictEqual(5);
    });
  });

  describe('insertBefore(item: { data: any }, before: DoublyLinkedListItem): CircularDoublyLinkedList', () => {
    test('inserts the new node BEFORE the before node', () => {
      const beforeItem = list[3];

      list.insertBefore({ data: '6' }, beforeItem);

      expect(list.size).toStrictEqual(6);
      expect(list.toArray().join()).toStrictEqual(['1', '2', '3', '6', '4', '5'].join());
      expect(beforeItem.data).toStrictEqual(list[4].data);
      expect(beforeItem.prev.data).toStrictEqual('6');
      expect(beforeItem.prev.prev).toStrictEqual(list[2]);
      expect(beforeItem).toStrictEqual(list[3].next);
    });

    test('will insert the new node with an unshift if the before node is at index 0', () => {
      list.insertBefore({ data: '6' }, list[0]);

      expect(list.size).toStrictEqual(6);
      expect(list.toArray().join()).toStrictEqual(['6', '1', '2', '3', '4', '5'].join());

      expect(list.first.prev).toStrictEqual(list.last);
      expect(list.last.next).toStrictEqual(list.first);
    });

    test('throws and does not insert anything if the before node is not found', () => {
      expect(list.size).toStrictEqual(5);

      expect(() => {
        list.insertBefore({ data: '6' }, list[6]);
      }).toThrow();

      expect(list.size).toStrictEqual(5);
    });
  });

  describe('remove(item: DoublyLinkedListItem): DoublyLinkedListItem | null', () => {
    test('removes an item from a linked list', () => {
      list.remove(list[0]);

      expect(list.size).toStrictEqual(4);
      expect(list.toArray().join()).toStrictEqual(['2', '3', '4', '5'].join());
    });

    test('removes the next link if necessary', () => {
      list.remove(list[1]);

      expect(list.size).toStrictEqual(4);
      expect(list.toArray().join()).toStrictEqual(['1', '3', '4', '5'].join());
    });

    test('returns the removed item if exists', () => {
      const expected = list[2];
      const result = list.remove(expected);

      expect(list.size).toStrictEqual(4);
      expect(result).toBe(expected);
    });

    test('returns null if the item does not exist', () => {
      const item = new DoublyLinkedListItem({ data: 'not found', next: null, prev: null });
      const result = list.remove(item);

      expect(list.size).toStrictEqual(5);
      expect(result).toBeNull();
    });
  });

  describe('removeIndex(idx: number): DoublyLinkedListItem | null', () => {
    test('removes an item from a linked list', () => {
      list.removeIndex(0);

      expect(list.size).toStrictEqual(4);
      expect(list.toArray().join()).toStrictEqual(['2', '3', '4', '5'].join());

      expect(list.first.prev).toStrictEqual(list.last);
      expect(list.last.next).toStrictEqual(list.first);
    });

    test("updates the last item's circular link if necessary", () => {
      list.removeIndex(4);

      expect(list.last.next).toStrictEqual(list.first);
    });

    test('returns the removed item if exists', () => {
      const expected = list[2];
      const result = list.removeIndex(2);

      expect(list.size).toStrictEqual(4);
      expect(result).toBe(expected);
    });

    test('returns null if the item does not exist', () => {
      const result = list.removeIndex(6);

      expect(list.size).toStrictEqual(5);
      expect(result).toBeNull();
    });
  });

  describe('rotate(n: number): CircularDoublyLinkedList', () => {
    test('given a positive integer rotates the linked list to the right "n" amount of times', () => {
      const rotated = list.rotate(2);

      expect(rotated.size).toStrictEqual(5);

      expect(rotated.toArray().join()).toStrictEqual(['4', '5', '1', '2', '3'].join());

      expect(rotated.first.prev).toStrictEqual(rotated.last);
      expect(rotated.last.next).toStrictEqual(rotated.first);

      expect(rotated[0].next).toStrictEqual(rotated[1]);
      expect(rotated[0].prev).toStrictEqual(rotated[4]);
      expect(rotated[1].next).toStrictEqual(rotated[2]);
      expect(rotated[1].prev).toStrictEqual(rotated[0]);
      expect(rotated[2].next).toStrictEqual(rotated[3]);
      expect(rotated[2].prev).toStrictEqual(rotated[1]);
      expect(rotated[3].next).toStrictEqual(rotated[4]);
      expect(rotated[3].prev).toStrictEqual(rotated[2]);
      expect(rotated[4].next).toStrictEqual(rotated[0]);
      expect(rotated[4].prev).toStrictEqual(rotated[3]);
    });

    test('given a negative integer rotates the linked list to the left "n" amount of times', () => {
      const rotated = list.rotate(-2);

      expect(rotated.size).toStrictEqual(5);
      expect(rotated.toArray().join()).toStrictEqual(['3', '4', '5', '1', '2'].join());

      expect(rotated.first.prev).toStrictEqual(rotated.last);
      expect(rotated.last.next).toStrictEqual(rotated.first);

      expect(rotated[0].next).toStrictEqual(rotated[1]);
      expect(rotated[0].prev).toStrictEqual(rotated[4]);
      expect(rotated[1].next).toStrictEqual(rotated[2]);
      expect(rotated[1].prev).toStrictEqual(rotated[0]);
      expect(rotated[2].next).toStrictEqual(rotated[3]);
      expect(rotated[2].prev).toStrictEqual(rotated[1]);
      expect(rotated[3].next).toStrictEqual(rotated[4]);
      expect(rotated[3].prev).toStrictEqual(rotated[2]);
      expect(rotated[4].next).toStrictEqual(rotated[0]);
      expect(rotated[4].prev).toStrictEqual(rotated[3]);
    });

    test('given an interger with a remainder of 0 when modulus the length the order stays the same', () => {
      const rotated = list.rotate(10);

      expect(list.size).toStrictEqual(5);
      expect(list.toArray().join()).toStrictEqual(['1', '2', '3', '4', '5'].join());
    });
  });
});
