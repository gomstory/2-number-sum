// Find prime number in giviing number
let end = 12345;
let summary = 0;
let count = 0;
let start = new Date();

for (var counter = 2; counter <= 1000000000; counter++) {
    var notPrime = false;

    for (var i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            notPrime = true;
            break;
        }
    }
    
    if (notPrime === false) {
        summary += counter
        count ++;

        if (count == end) {
            console.log(summary)
            return;
        }
    }
}
