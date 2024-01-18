class BinarySearchTreeNode {
  public value: any;
  public left: null | any = null;
  public right: null | any = null;

  constructor(value: any) {
    this.value = value;
  }
}

class BinarySearchTree {
  private root: null | any = null;

  get size(): number {
    if (this.root === null) {
      return 0;
    }

    let n = 0;

    traverse(this.root);

    function traverse(node: null | BinarySearchTreeNode) {
      if (node !== null) {
        if (node.left !== null) {
          traverse(node.left);
        }

        n += 1;

        if (node.right !== null) {
          traverse(node.right);
        }
      }
    }

    return n;
  }

  add(value: any): void {
    const node = new BinarySearchTreeNode(value);

    if (this.root === null) {
      this.root = node;
    } else {
      let curr = this.root;

      while (curr !== null) {
        if (value < curr.value) {
          if (curr.left === null) {
            curr.left = node;
            break;
          } else {
            curr = curr.left;
          }
        } else if (value > curr.value) {
          if (curr.right === null) {
            curr.right = node;
            break;
          } else {
            curr = curr.right;
          }
        } else {
          break;
        }
      }
    }
  }

  has(value: any): boolean {
    let nodeFound = false;
    let curr = this.root;

    while (nodeFound === false && curr !== null) {
      if (value < curr.value) {
        curr = curr.left;
      } else if (value > curr.value) {
        curr = curr.right;
      } else {
        nodeFound = true;
      }
    }

    return nodeFound;
  }

  delete(value: any) {
    if (this.root === null) {
      return false;
    }

    let nodeFound = false;
    let curr = this.root;
    let parent: null | BinarySearchTreeNode = null;

    while (!nodeFound && curr !== null) {
      if (value < curr.value) {
        parent = curr;
        curr = curr.left;
      } else if (value > curr.value) {
        parent = curr;
        curr = curr.right;
      } else {
        nodeFound = true;
      }
    }

    if (nodeFound === false) {
      return false;
    }

    const removeNode = curr;
    let substitute = null;

    if (removeNode.left !== null && removeNode.right !== null) {
      substitute = removeNode.left;

      let substituteParent = removeNode;

      while (substitute.right !== null) {
        substituteParent = substitute;
        substitute = substitute.right;
      }

      substitute.right = removeNode.right;

      if (substituteParent !== removeNode) {
        substituteParent.right = substitute.left;
        substitute.left = removeNode.left;
      }
    } else if (removeNode.left !== null) {
      substitute = removeNode.left;
    } else if (removeNode.right !== null) {
      substitute = removeNode.right;
    }

    if (removeNode === this.root) {
      this.root = substitute;
    } else {
      if (removeNode.value < parent.value) {
        parent.left = substitute;
      } else {
        parent.right = substitute;
      }
    }

    return nodeFound;
  }

  clear(): void {
    this.root = null;
  }

  toString() {
    return [...this].toString();
  }

  *values() {
    function* traverse(
      node: BinarySearchTreeNode
    ): Generator<any | null, void, any | null> {
      if (node) {
        if (node.left !== null) {
          yield* traverse(node.left);
        }

        yield node.value;
        if (node.right !== null) {
          yield* node.right;
        }
      }
    }

    yield* traverse(this.root);
  }

  [Symbol.iterator]() {
    return this.values();
  }
}
