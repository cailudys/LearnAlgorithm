class HashTable<T = any> {
  // 创建一个数组，用来存放 链地址法 中的 链 每一项都是一个元组
  private storage: [string, T][] = [];
  // 定义数组的长度
  private length: number = 7;
  // 记录已经存在的元素的个数
  private count: number = 0;
}

export default HashTable;
