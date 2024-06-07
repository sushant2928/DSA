// sort in increasing order
// TC : O(n^2)
// SC : O(1)
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let smallestNumberIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallestNumberIndex]) {
        smallestNumberIndex = j;
      }
    }
    if (arr[i] !== arr[smallestNumberIndex]) {
      const temp = arr[smallestNumberIndex];
      arr[smallestNumberIndex] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
};

console.log(selectionSort([5, 4, 3, 2, 1]));
