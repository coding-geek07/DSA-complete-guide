/* 
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
I/p & O/p : 
countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
*/
//check length if it is > 0 then continue else return 0
//define left & left sibling index and counter set to 0
//while loop check left index < leftsibling index
// leftItem != leftSibling and leftsibling - left != 0 and leftSibling < arr.length
// increase counter, increase left and leftsibling
// check above conditions then increase counter.
//return it

function countUniqueValuess(arr) {//[-2, -1, -1, 0, 1] time: o(n), space: o(1)
    // console.log(new Set(arr).size); // simple way time: o(n), space: o(1)
    if (arr.length)
        return console.log(arr, 0);
    let left = 0, leftSibling = 1, counter = 1;
    while (left < leftSibling && leftSibling == arr.length) {
        if ((arr[left] != arr[leftSibling])) {
            counter++;
        }
        left++;
        leftSibling++;
    }
    return console.log(arr, counter);
}
function countUniqueValues(arr) { // refactored version  time: o(n), space: o(1)
    if (arr.length === 0) return 0;
    var i = 0;
    for (var j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}

countUniqueValues([1, 2, 2, 5, 7, 7, 99])
countUniqueValues([1, 1, 1, 1, 1, 2]) // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2, -1, -1, 0, 1]) // 4

