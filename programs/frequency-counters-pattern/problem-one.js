

// refactored solution my solution, O(n) complexity
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    arr1 = arr1.map(item => item ** 2);
    let firstArrObj = getObjFromArr(arr1);
    let secondArrObj = getObjFromArr(arr2);
    /* let matchingArrays = false;
    for (let key in firstArrObj) {
        if (secondArrObj[key] && secondArrObj[key] === firstArrObj[key]) {
            matchingArrays = true;
        } else {
            return false;
        }
    }
    return matchingArrays; */
    for (let key in firstArrObj) { // refactored version
        if (!secondArrObj[key]) {
            return false;
        } else if (secondArrObj[key] !== firstArrObj[key]) {
            return false;
        }
    }
    return true;
}
function getObjFromArr(arr) {
    let arrObj = {};
    for (let arrItem of arr) {
        arrObj[arrItem] = ++arrObj[arrItem] || 1;
    }
    return arrObj;
}
/* 
// Naive solution O(n²) complexity
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1)
    }
    return true
} */


console.log("[1,1,2] [1,1,4] " + same([1, 1, 2], [1, 1, 4]));
console.log("[1,2,3] [4,1,1] " + same([1, 2, 3], [4, 1, 1]));
console.log("[2,4] [16,4,36] " + same([2, 4], [16, 4, 36]));
console.log("[1,1,2] [1,4,1] " + same([1, 1, 2], [1, 4, 1]));
console.log("[1,1,2] [1,4,4] " + same([1, 1, 2], [1, 4, 4]));
console.log("[0,1,2] [0,1,4] " + same([0, 1, 2], [0, 1, 4]));