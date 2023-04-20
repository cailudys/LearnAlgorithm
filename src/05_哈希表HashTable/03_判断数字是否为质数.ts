function isPrime(num: number): boolean {
  // 质数（素数）的特点：只能被1和自己整除

  // 计算法平方根
  const sqrt = Math.sqrt(num);
  console.log(sqrt);

  for (let i = 2; i < sqrt; i++) {
    const mod = num % i;
    if (mod === 0) return false;
  }

  return true;
}

console.log(isPrime(8));
console.log(isPrime(14));
console.log(isPrime(15));
console.log(isPrime(17));

export default isPrime;
