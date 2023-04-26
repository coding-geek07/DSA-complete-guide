/* 
check if the two strings are anagrams like DEN and END, with same letters we can form a word
Input - two strings, space is allowed
Output - boolean
validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true

function validAnagram(str1, str2) {
    // length of both - same else ret false
    // store them in obj and check freq
    // compare both objects key frequency,
    // atleast one freq doesn't match return false else true
}
*/
function validAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    let firstStrObj = getStringObj(str1);
    let secondStrObj = getStringObj(str2);
    for (let key in firstStrObj) {
        if (!secondStrObj[key]) {
            return false;
        } else if (secondStrObj[key] !== firstStrObj[key]) {
            return false;
        }
    }
    return true;
}
function getStringObj(str) {
    let strObj = {};
    for (let strChar of str) {
        strObj[strChar] = ++strObj[strChar] || 1;
    }
    return strObj;
}

console.log("'', '',true ", validAnagram('', ''));
console.log("'aaz', 'zza',false ", validAnagram('aaz', 'zza'));
console.log("'anagram', 'nagaram',true ", validAnagram('anagram', 'nagaram'));
console.log("'rat','car',false ", validAnagram("rat", "car"));
console.log("'awesome', 'awesom',false ", validAnagram('awesome', 'awesom'));
console.log("'qwerty', 'qeywrt',true ", validAnagram('qwerty', 'qeywrt'));
console.log("'texttwisttime', 'timetwisttext',true ", validAnagram('texttwisttime', 'timetwisttext'));