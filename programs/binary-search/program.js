function searchSubstrOccurence(str, substr) {
    let counter = 0, j = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === substr[j]) {
            j += 1;
        } else {
            j = 0;
        }
        if (j === substr.length) {
            counter++;
            j = 0;
        }
    }
    return counter;

}
console.log(searchSubstrOccurence('wowomgzomg', 'omg'));
console.log(searchSubstrOccurence('lorie loled', 'pop'));