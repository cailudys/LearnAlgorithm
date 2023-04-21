import INode from "../types/INode";

// 实现树的节点类
class TreeNode<T> extends INode<T> {
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;
}

// 实现树的类
class BSTree<T> {
  private root: TreeNode<T> | null = null;
}
