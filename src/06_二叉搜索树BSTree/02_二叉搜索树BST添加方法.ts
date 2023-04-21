import Node from "../types/INode";
import { btPrint } from "hy-algokit";

// 实现树的节点类
class TreeNode<T> extends Node<T> {
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;
}

// interface IBSTree<T> {
//   insert(value: T): T;
//   search(value: T): boolean;
//   min(): T;
//   max(): T;
//   inOrderTraverse(): void;
//   preOrderTraverse(): void;
//   postOrderTraverse(): void;
//   levelOrderTraverse(): void;
//   remove(value: T): boolean;
// }

// 实现树的类
class BSTree<T> {
  root: TreeNode<T> | null = null;

  /**插入数据的操作 */
  insert(value: T) {
    // 1. 根据传入的value创建TreeNode节点
    const newNode = new TreeNode(value);

    // 2.判断当前是否已经有值
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // 写递归函数，考虑入参，出参，终止条件，和递归调用的时机。
  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
    const direction = newNode.value < node.value ? "left" : "right";

    if (!node[direction]) {
      node[direction] = newNode;
      return;
    }

    this.insertNode(node[direction]!, newNode);
  }
}

const bst = new BSTree<number>();

bst.insert(14);
bst.insert(35);
bst.insert(23);
bst.insert(11);
bst.insert(10);
bst.insert(12);
bst.insert(23);
bst.insert(9);
bst.insert(6);
bst.insert(18);
bst.insert(17);
btPrint(bst.root);
export default BSTree;
