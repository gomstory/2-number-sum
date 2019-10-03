function binarySearch(arr, start, end, fine) {
    if (end >= start) {
        let mid = start + (end - start) / 2;
        if (arr[mid] == fine) return mid;
        if (arr[mid] > fine) return binarySearch(arr, start, mid - 1, fine);
        return binarySearch(arr, mid + 1, end, fine);
    }

    return -1;
}

let arr = [ 2, 4, 6, 8, 15, 24, 36, 72, 100 ];
let fine = 36;
let result = binarySearch(arr, 0, arr.length - 1, fine);
console.log("Result at index: " + result);
