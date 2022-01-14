function sort(array) {
  for (let i = 1; i < array.length; i++) {
    let currentIndex = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > currentIndex) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = currentIndex;
  }
  return array;
}

console.log(sort([4, 5, 6, 3, 2, 6]));

function insertionSort(arr) {
  for (index = 1; index < arr.length; index++) {
    i = index - 1; // values we're comparing current value with
    currentVal = arr[index];
    while (i >= 0) {
      if (currentVal < arr[i]) {
        arr[i + 1] = arr[i]; //shift num in slot i right to i+1
        arr[i] = currentVal; //shift current value left to slot i
        i--;
      } else {
        break;
      }
    }
  }
  return arr;
}
insertionSort([1, -1, 5, 6, 3]);
