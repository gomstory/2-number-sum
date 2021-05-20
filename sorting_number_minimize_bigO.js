// Try to sort  array of number [[1,5,7,9], [2,7,10], [3,4,6, 8]] with closely to O(N) as much as posible.
// Input: [[1,5,7,9], [2,7,10], [3,4,6, 8]]
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let input = [[1,5,7,9], [2,7,10], [3,4,6, 8]];
let result = [];
let sorted = [];

for (let i = 0; i < input.length; i++) {
    result = result.concat(...input[i])
}

for (let i = 0; i < result.length; i++) {
    let val = result[i];
    sorted[val-1] = val;
}

console.log(sorted)
