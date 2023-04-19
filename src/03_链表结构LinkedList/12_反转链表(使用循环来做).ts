import ListNode from "./面试题ListNode";

function reverseList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;

  let newHead = null;
  let current: ListNode | null = head;

  while (head) {
    current = current?.next ?? null;
    head.next = newHead;
    newHead = head;
    head = current;
  }

  return newHead;
}

// 模拟数据
const node1 = new ListNode(1);
node1.next = new ListNode(2);
node1.next.next = new ListNode(3);
console.log(node1);
const newHead = reverseList(node1);
console.log("newHead", newHead);

export {};
