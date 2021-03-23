// Given date format is dd/mm/yyyy
const dates = [
  "11/02/2019",
  "11/02/2021",
  "01/02/2019",
  "11/02/2018",
  "20/02/2019",
  "11/02/2020",
  "11/02/2012",
];

const convertedList = dates
  .map(it => {
    let chars = it.split('/');
    // Switch Position to mm/dd/yyyy
    return `${chars[1]}/${chars[0]}/${chars[2]}`
  })
  .map(it => new Date(it));

orderDatas = convertedList.sort((a, b) => {
  const diff = a.getTime() - b.getTime()
  return diff;
});


console.log(orderDatas);


