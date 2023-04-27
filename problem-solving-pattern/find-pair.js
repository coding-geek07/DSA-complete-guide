/* function sumZero(sortedArr) {
    // declare one empty array 
    // loop through arr elements and search for positive or negative of that value
        // if it is there return those elements in an array
        // if it is not there then continue until we found one
} */
function sumZeroo(sortedArr) {// Time: O(N*2), Space: O(1)
    let foundPair = false;
    for (let num of sortedArr) {
        let matchingNumIndex = num != 0 ? sortedArr.indexOf((-1 * num)) : -1;
        if (matchingNumIndex != -1) {
            foundPair = true;
            return console.log([num, sortedArr[matchingNumIndex]]);
        }
    }
    if (!foundPair) {
        return console.log('undefined');
    }
}

function sumZerooo(arr) { // time : O(N), space: O(1)
    let obj = {};
    for (let index = 0; index < arr.length; index++) {
        if (!obj[arr[index]] && arr[index] != 0) {
            obj[arr[index]] = { itemIndex: index }
        }
    }
    for (let num of arr) {
        if (obj[-1 * num]) {
            return console.log([num, arr[obj[-1 * num].itemIndex]]);
        }
    }
}

// Refactore version
function sumZero(arr) { // Time: O(N), Space: O(1)
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return console.log([arr[left], arr[right]]);
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3,3] 
sumZero([-2, 0, 1, 3]) // undefined
sumZero([1, 2, 3]) // undefined