import ListNode from "./面试题ListNode";

function reverseList(head: ListNode | null): any {
  if (head === null || head.next === null) return head;

  const newHead = reverseList(head?.next ?? null);

  head.next.next = head;
  head.next = null;

  return newHead;
}

// 模拟数据
const node1 = new ListNode(1);
node1.next = new ListNode(2);
node1.next.next = new ListNode(3);
console.log(node1);
console.log("递归反转链表=======================");
console.log(reverseList(node1));

export {};
