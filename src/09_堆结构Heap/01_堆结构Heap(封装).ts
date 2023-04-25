class Heap<T> {
  // 属性
  data: T[] = [];
  private length: number = 0;

  // 两个项互换
  private swap(i: number, j: number) {
    const temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }

  // 在堆中插入值
  // 每次插入元素之后，需要堆堆进行重构，以维护最大堆的性质。这种策略叫做 上滤
  // 其实就是循环用当前节点和其父节点对比，如果比父节点大，则交换两者的位置
  insert(value: T) {
    // 1. 将元素放到数组的尾部
    this.data.push(value);
    this.length++;

    // 2.维护最大堆的特性（上滤）
    this.heapofy_up();
  }

  // 上滤操作
  heapofy_up() {
    let index = this.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.data[index] <= this.data[parentIndex]) {
        break;
      }

      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  // 在堆中删除值
  extract(): T | undefined {
    return undefined;
  }

  // 返回堆中的最值
  peek(): T | undefined {
    return this.data[0];
  }

  // 获取堆当中当前元素的数量
  size(): number {
    return this.length;
  }

  // 判断堆是否为空
  isEmpty() {
    return this.length === 0;
  }

  // 通过列表构建堆
  buildHeap(arr: T[]) {}
}

const arr = [19, 100, 36, 17, 3, 25, 1, 2, 7];

const heap = new Heap<number>();

for (const item of arr) {
  heap.insert(item);
}

heap.insert(133);
heap.insert(65);

console.log(heap.data);

export {};
