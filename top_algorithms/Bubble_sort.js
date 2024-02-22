function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j  arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }
  
  const numbers = [5, 2, 8, 1, 4];
  console.log(bubbleSort(numbers)); // Output: [1, 2, 4, 5, 8]