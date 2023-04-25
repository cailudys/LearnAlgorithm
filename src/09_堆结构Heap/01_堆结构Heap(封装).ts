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

  // 提取最大值
  extract(): T | undefined {
    // 1.判断元素的个数为 0 或者 为 1 的情况
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.length--;
      return this.data.pop();
    }

    // 2.提取并且需要返回的最大值
    const topValue = this.data[0];
    this.data[0] = this.data.pop()!;
    this.length--;

    // 3.维护最大堆特性：下滤
    // 3.1 定义索引位置
    let index = 0;

    while (2 * index + 1 < this.length) {
      // 3.2 找到当前节点的左右节点
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = leftChildIndex + 1;

      // 3.3 找到左右子节点的较大的值
      let largerIndex = leftChildIndex;
      if (
        rightChildIndex < this.length &&
        this.data[rightChildIndex] > this.data[leftChildIndex]
      ) {
        largerIndex = rightChildIndex;
      }

      // 3.4 较大的值和index位置的值进行比较
      if (this.data[index] >= this.data[largerIndex]) {
        break;
      }

      // 3.5 交换位置
      this.swap(index, largerIndex);
      index = largerIndex;
    }

    return topValue;
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

console.log(heap.data);
console.log(heap.extract());
console.log(heap.data);
export {};
