// sort in increasing order
// TC : O(n^2)
// SC : O(1)
const bubbleSortI = (arr) => {
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

// sort in decreasing order
// TC : O(n^2)
// SC : O(1)
const bubbleSortD = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;
    for (j = arr.length - 1; j > i; j--) {
      if (arr[j] > arr[j - 1]) {
        const temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return arr;
};

console.log(bubbleSortI([0, 7, 4, 8, 5, 3]));

console.log(bubbleSortD([0, 7, 4, 8, 5, 3]));
