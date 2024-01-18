export default class DoubleLinkedListItem {
  public data: any;
  public next: DoubleLinkedListItem | null = null;
  public prev: DoubleLinkedListItem | null = null;

  constructor({ data, next = null, prev = null }: { data: any; next: DoubleLinkedListItem | null; prev: DoubleLinkedListItem | null }) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}
