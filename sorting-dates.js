// Problem: given the dates with string then sort dates correctly.
// Dates data must be formated.
const dates = [ "08 Dec 1990", "10", "29 Jan 1994", "24 Oct 2019", "11 Nov 2002", "14 Feb 2010", "14 Feb 1991"];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const dateFormat = /(\d{2})\s(\w{3})\s(\d{4})/;
const datePairs = new Map();

// Filter invalid dates
const validDates = dates.filter(date => dateFormat.test(date));

for (let index = 0; index < validDates.length; index++){
    let date = validDates[index];
    let valid = dateFormat.test(date);
    let dmy = dateFormat.exec(date);
    let day = +dmy[1];
    let month = months.indexOf(dmy[2]) + 1;
    let year = +dmy[3];
    let tick = new Date(year, month, day).getTime();
    datePairs.set(date, tick);
}

let sortedData = validDates.sort((a,b) => {
    let mapA = datePairs.get(a);
    let mapB = datePairs.get(b);
    let result = mapA - mapB;
    return result;
});

console.log(sortedData);
