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

  // 递归插入数据的操作
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

  // 递归遍历节点 - 先序
  preOrderTraverse() {
    this.preOrderTraverseNode(this.root);
  }

  //   // 循环遍历节点 - 先序
  //   preOrderTraversNoRecursion() {
  //     let stack: Node<T>[] = [];
  //     let current: Node<T> | null = this.root;

  //     while (current !== null || stack.length !== 0) {
  //       while (current !== null) {
  //         console.log(current.value);
  //         stack.push(current);
  //         current = current.left;
  //       }
  //     }

  //     current = stack.pop();
  //     current = current.right;
  //   }

  // 中序遍历
  inOrderTraverse() {
    this.inOrderTraverseNode(this.root);
  }
  // 后续遍历
  postOrderTraverse() {
    this.postOrderTraverseNode(this.root);
  }
  // 层级遍历

  // 递归插入节点
  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
    const direction = newNode.value < node.value ? "left" : "right";

    if (!node[direction]) {
      node[direction] = newNode;
      return;
    }

    this.insertNode(node[direction]!, newNode);
  }

  // 递归打印节点 - 先序遍历
  private preOrderTraverseNode(node: TreeNode<T> | null) {
    if (!node) return;
    console.log(node.value);
    this.preOrderTraverseNode(node.left);
    this.preOrderTraverseNode(node.right);
  }

  // 递归打印节点 - 中序遍历
  private inOrderTraverseNode(node: TreeNode<T> | null) {
    if (!node) return;
    this.inOrderTraverseNode(node.left);
    console.log(node.value);
    this.inOrderTraverseNode(node.right);
  }

  // 递归打印节点 - 后遍历
  private postOrderTraverseNode(node: TreeNode<T> | null) {
    if (!node) return;
    this.postOrderTraverseNode(node.left);
    this.postOrderTraverseNode(node.right);
    console.log(node.value);
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
bst.postOrderTraverse();
export default BSTree;
