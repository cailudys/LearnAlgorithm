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

  // 改变容量；从新排序
  private resize(newLength: number) {
    // 设置新的长度
    this.length = newLength;

    // 获取原来的所有数据，并且重新放入到新的容器数组中
    // 1、对数据进行初始化操作
    const oldStorage = this.storage;
    this.storage = [];
    this.count = 0;

    //2、获取旧的数据，放入新的数组中
    oldStorage.forEach((bucket) => {
      if (!bucket) return;
      for (let i = 0; i < bucket.length; i++) {
        const tuple = bucket[i];
        this.put(tuple[0], tuple[1]);
      }
    });
  }
  // 判断数字是否是一个质数
  isPrime(num: number): boolean {
    // 质数（素数）的特点：只能被1和自己整除

    for (let i = 2; i < num; i++) {
      const mod = num % i;
      if (mod === 0) return false;
    }

    return true;
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

      // 计算loadFactor (进行扩容操作)
      const loadFactor = this.count / this.length;
      if (loadFactor > 0.75) {
        this.resize(this.length * 2);
      }
    } else {
      this.storage[index][findIndex][1] = value;
    }
  }

  // 根据key获取值，获取不到的时候返回false
  get(key: string): T | undefined {
    // 1.根据key获取索引idnex
    const index = this.getIndex(key, this.length);
    // 2.取出对应索引值对应位置的数组（桶）
    let bucket = this.storage[index];
    if (!bucket) return undefined;

    // 4.确定已经有了一个数组了，但是数组中是否已存在key是不确定的
    const findIndex = this.storage[index].findIndex((item) => item[0] === key);
    if (findIndex < 0) {
      return undefined;
    } else {
      return this.storage[index][findIndex][1];
    }
  }

  delete(key: string): T | undefined {
    // 1.根据key获取索引idnex
    const index = this.getIndex(key, this.length);
    // 2.取出对应索引值对应位置的数组（桶）
    let bucket = this.storage[index];
    if (!bucket) return undefined;
    const findIndex = this.storage[index].findIndex((item) => item[0] === key);
    if (findIndex < 0) {
      return undefined;
    } else {
      const tupleValue = this.storage[index][findIndex][1];
      bucket.splice(findIndex, 1);
      this.count--;
      // 计算loadFactor (进行缩容操作)  一般情况<0.25 进行缩容
      const loadFactor = this.count / this.length;
      if (loadFactor < 0.25 && this.length > 7) {
        this.resize(Math.floor(this.length / 2));
      }

      return tupleValue;
    }
  }
}

// 测试
const hashTbale = new HashTable();
hashTbale.put("qwe", 100);
hashTbale.put("ewq", 200);
hashTbale.put("www", 300);

export default HashTable;
