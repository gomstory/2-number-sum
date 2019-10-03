const numbers = [1,2,3,4,5,6,6,1];
let uniqNumbers = [];


for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    let found = uniqNumbers.some((x) => x == number);

    if (found) {
        uniqNumbers = uniqNumbers.filter((x) => x != number );
    } else {
        uniqNumbers.push(number);   
    }
}

console.log(uniqNumbers);
