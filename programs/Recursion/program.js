function someRecursive(arr, callBackFunc) {
    if (!arr.length) return false;
    if (callBackFunc([arr[0]])) return true;
    return someRecursive(arr.slice(1), callBackFunc);
}
const isOdd = val => val % 2 !== 0;
console.log(someRecursive([1, 2, 3, 4], isOdd));
console.log(someRecursive([4, 6, 8], val => val > 10));