/**
 *将key映射为index索引
 * @param key 被转换的字符串
 * @param max 数组长度
 * @returns 转换之后的索引值
 */
function hashFunc(key: string, max: number): number {
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

// 测试哈希函数

// 填充因子计算公式： 数据量 / 当前数组长度 = 0.5
// 填充因子： 4/7 = 0.57
console.log(hashFunc("qe", 7));
console.log(hashFunc("qerq", 7));
console.log(hashFunc("adf", 7));
console.log(hashFunc("vaafd", 7));

// 填充因子： 6/7 = 0.85  （当填充因子大于等于0.75的时候就进行扩容）
console.log(hashFunc("qewr", 7));
console.log(hashFunc("qda", 7));
