class HashTable<T = any> {
  // 创建一个数组，用来存放 链地址法 中的 链 每一项都是一个元组
  private storage: Array<[string, T][]> = [];
  // 定义数组的长度
  private length: number = 7;
  // 记录已经存在的元素的个数
  private count: number = 0;

  private getIndex(key: string, max: number) {
    // 1.计算hashCode  cats => 60337（27为底的时候）
    let hashCode = 0;
    const length = key.length;

    //使用霍纳法则计算hashCdoe (如果不明白霍纳法则也没事，只要记得这个是用来降低算法复杂度的，还有知道怎么使用就行)
    for (let i = 0; i < length; i++) {
      hashCode = 31 * hashCode + key.charCodeAt(i);
    }

    // 2.计算出索引值
    const index = hashCode % max;
    return index;
  }

  // 插入数据，修改数据 （如果key已存在就是修改操作，如果key不存在就是插入操作）
  put(key: string, value: T): void {
    // 1.根据key获取索引idnex
    const index = this.getIndex(key, this.length);

    // 2.取出对应索引值对应位置的数组（桶）
    let bucket = this.storage[index];

    // 3.判断bucket是否有值
    if (!bucket) {
      bucket = [];
      this.storage[index] = bucket;
    }

    // 4.确定已经有了一个数组了，但是数组中是否已存在key是不确定的
    const findIndex = this.storage[index].findIndex((item) => item[0] === key);
    if (findIndex < 0) {
      this.storage[index].push([key, value]);
      this.count++;
    } else {
      this.storage[index][findIndex][1] = value;
    }
  }
}

// 测试
const hashTbale = new HashTable();

export default HashTable;
