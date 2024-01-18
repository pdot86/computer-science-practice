export default class SingleLinkedListItem {
  public readonly data: any;
  public next: SingleLinkedListItem | null = null;

  constructor({
    data,
    next = null,
  }: {
    data: any;
    next: SingleLinkedListItem | null;
  }) {
    this.data = data;
    this.next = next;
  }
}
