function removeDuplicates(arr) {
    const uniqueElements = new Map();

    for (const element of arr) {
        uniqueElements.set(element, true);
    }
    return Array.from(uniqueElements.keys());
}
const arr = [1, 2, 3, 2, 1, 3, 1, 4, 2];
const uniqueArr = removeDuplicates(arr);
console.log(uniqueArr);