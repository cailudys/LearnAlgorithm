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

  /**遍历二叉树 */
  traverse(node = this.root): void {
    if (!node) return;

    // 终止条件
    if (!node.left && !node.right) {
      console.log(node.value);
      return;
    }

    if (node.left) {
      this.traverse(node.left);
    }
    if (node.right) {
      this.traverse(node.right);
    }

    console.log(node.value);
  }

  /**遍历 */
  // 先序遍历
  preOrderTraverse(node: TreeNode<T> | null): void {
    if (!node) return;

    console.log(node.value);

    let current = node;
    while (current) {
      current = current.left ?? null;
    }
  }
  // 中序遍历
  // 后续遍历
  // 层级遍历

  // 递归
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

bst.insert(11);
bst.insert(7);
bst.insert(15);
bst.insert(5);
bst.insert(9);
bst.insert(13);
bst.insert(20);
bst.insert(3);
bst.insert(8);
bst.insert(10);
bst.insert(12);
bst.insert(14);
bst.insert(18);
bst.insert(25);
bst.insert(6);
btPrint(bst.root);
bst.traverse();
export default BSTree;
