// Source https://www.youtube.com/watch?v=XKu_SEDAykw
// Exam: Givin an array [1,2,4,4], find the sum of 2 number in array should equal 8, if it's return true otherwise return false;

function findSum2Number(arr, expectValue) {
    const prevValues = new Set();
    
    for (let index = 0; index < arr.length; index++) {
        const current = arr[index];

        if (prevValues.has(current)) {
            return true;
        } else {
            let oppositeValue = expectValue - current;
            prevValues.add(oppositeValue);
        }
    }

    return false;
}

let result = findSum2Number([1,2,3,9], 5);
console.log(result);