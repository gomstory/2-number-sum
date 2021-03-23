// Binary is O(log n) operation (time complexity)
function binarySearch(arr, start, end, expected) {
  if (end >= start) {
      let mid = start + (end - start) / 2;
      if (arr[mid] == expected) return mid;
      if (arr[mid] > expected) return binarySearch(arr, start, mid - 1, expected);
      return binarySearch(arr, mid + 1, end, expected);
  }

  return -1;
}

let arr = [ 2, 4, 6, 8, 15, 24, 36, 72, 100 ];
let expected = 36;
let result = binarySearch(arr, arr[0], arr.length - 1, expected);
console.log("Result at index: " + result);
