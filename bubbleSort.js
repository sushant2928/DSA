// sort in increasing order
// TC : O(n^2)
// SC : O(1)
const bubbleSort = (arr) => {
  for (let i = arr.length - 2; i >= 0; i--) {
    // length 5 -> loop 4 times
    let swapped = false;
    for (j = 0; j <= i; j++) {
      // r1 -> 4, r2 -> 3, r3 -> 2 ....
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return arr;
};

console.log(bubbleSort([0, 7, 4, 8, 5, 3]));
