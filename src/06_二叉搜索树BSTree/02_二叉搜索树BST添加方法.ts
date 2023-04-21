import Node from "../types/INode";
import { btPrint } from "hy-algokit";

// 实现树的节点类
class TreeNode<T> extends Node<T> {
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;
}

interface IBSTree<T> {
  insert(value: T): T;
  search(value: T): boolean;
  min(): T;
  max(): T;
  inOrderTraverse(): void;
  preOrderTraverse(): void;
  postOrderTraverse(): void;
  levelOrderTraverse(): void;
  remove(value: T): boolean;
}

// 实现树的类
class BSTree<T> implements IBSTree<T> {
  private root: TreeNode<T> | null = null;
}

const bst = new BSTree();

export default BSTree;
