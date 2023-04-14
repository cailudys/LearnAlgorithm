import ArrayQueue from "./01_实现队列结构Queue";

function hotPotatp(list: string[], num: number): string | undefined {
  const arrayQueue = new ArrayQueue<string>();

  // 将list中的 ['','','','']项都存入到 arrayQueue中
  list.forEach((item) => {
    arrayQueue.enqueue(item);
  });

  while (arrayQueue.size() > 1) {
    for (let i = 0; i < num; i++) {
      if (i < 2) {
        arrayQueue.dequeue;
        arrayQueue.enqueue;
      }
      if (i === 2) arrayQueue.dequeue;
    }
  }

  return arrayQueue.dequeue();
}

hotPotatp(["why", "111", "222", "333"], 3);
