 const array = [1, 2,3,2,4,5,1,3];
// const uniqueArray =  array.filter((value, index, self) => {
//     return self.indexOf(value) === index;
// });

// console.log(uniqueArray);

// const evenNumber  = array.filter(num => num % 2 === 0);

const uniqueArray = [... new Set(array)];
console.group(uniqueArray);