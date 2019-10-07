const numbers = [1,2,3,4,5,6,6,1];
let uniqNumbers = [];

// First Algorithm using filter and some function
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

// Second Algorithm using Set Object
let uniqSet = new Set();

for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    
    if (uniqSet.has(number)) {
        uniqSet.delete(number);
    } else {
        uniqSet.add(number);
    }
}

console.log(Array.from(uniqSet).join(' '))
