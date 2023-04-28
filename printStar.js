const printStars = (n) => {
    const mid = Math.ceil(n / 2)
    let result = ""

    for (let i = 0; i < mid; i++) {
        for (let j = 0; j < i; j++) {
            result += "-"
        }

        result += "*"
        console.log(result)
        result = ""

    }

    result = ""

    for (let i = mid; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            result += "-"
        }

        result += "*"
        console.log(result)
        result = ""
    }
}


printStars(7)
