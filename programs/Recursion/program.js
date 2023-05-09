/* 
Write a factorial recursion
input : 4
output : 4 * 3 * 2* 1 : 24

function getFactorialOf(num) {
    if (num === 1) return 1;
    return num * getFactorialOf(num - 1);
}

console.log(getFactorialOf(5));
*/
/* 
    collect odd values from array
*/

function collectOddValues(arr) {
    let newArr = [];

    if (arr.length === 0) {
        return newArr;
    }

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

collectOddValues([1, 2, 3, 4, 5])




