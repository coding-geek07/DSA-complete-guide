// Linear Search
function search(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return console.log(i);
        }
    }
    return console.log(-1);
}
search([1, 2, 3, 4, 5, 6], 4) // 3
search([1, 2, 3, 4, 5, 6], 6) // 5
search([1, 2, 3, 4, 5, 6], 11) // -1