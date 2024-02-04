
type Input  = ( number | string)[];

function getFirstElement(arr: Input) : (string | number) {
    return arr[0];
}

let ans1  = getFirstElement([1, 2, 3]);
let ans2 = getFirstElement(["one", "two", "three"]);
console.log(ans1);