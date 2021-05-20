// Try to sort these number [[1,5,7,9], [2,7,10], [3,4,6, 8]] with O(N) as posoble
// Input: [[1,5,7,9], [2,7,10], [3,4,6, 8]]
// Output: [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]

let input = [[1,5,7,9], [2,7,10], [3,4,6, 8]];
let output = [];

// Make array flatten to single array
// [1,5,7,9,2,7,10,3,4,6, 8]
let flattedArr = input.join().split(',');

for (let i = 0; i < flattedArr.length; i++) {
    let val = flattedArr[i];
    output[val-1] = +val;
}

console.log(output)
