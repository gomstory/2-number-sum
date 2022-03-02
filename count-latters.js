// Interview Question
// 	Input : AAABBCCCCDEEEA
// 	Output : 3A2B4C1D3E1A

const counter = (param) => {
    const stack = param.split("")
    let currentLetter = stack.shift();
    let currentCount = 1;
    let result = "";
    
    while (stack.length > 0) {
        const letter = stack.shift();
        if (letter === currentLetter) {
            currentCount += 1
        } else {
            result += currentCount + currentLetter;
            currentLetter = letter;
            currentCount = 1
        }
    }

    if (currentCount >= 1) {
        result += currentCount + currentLetter;
    }
    
    return result
}

console.log(counter("AAABBCCCCDEEEA"))
