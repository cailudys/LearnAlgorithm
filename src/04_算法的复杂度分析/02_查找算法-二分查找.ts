function binarySearch(array: number[], num: number) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  while (num !== array[middleIndex]) {
    if (num < array[middleIndex]) {
      rightIndex = middleIndex;
      middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    } else {
      leftIndex = middleIndex;
      middleIndex = Math.ceil((leftIndex + rightIndex) / 2);
    }
    if (leftIndex === rightIndex) return -1;
  }
  return middleIndex;
}

const array = [1, 2, 3];

console.log(binarySearch(array, 4));
