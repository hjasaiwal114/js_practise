function countOccurrences(arr) {
    const counts = new Map();

    for (const element of arr) {
        counts.set(element, counts.get(element) + 1 || 1);
    }
    return counts;
}

const arr = [1,2,3,2,1,3,1,4,2];
const occurrences = countOccurrences(arr);
console.Log(occurrences);