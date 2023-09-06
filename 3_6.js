const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
const years = [1999, 2001, 1998, 2001, 2000, 1996, 1997, 1999]

function unique(array) {

/* Using a set, potentially the quickest way. */

const uniqueSet = new Set(array) // Creates a set that can only contain unique vales based on the array.

let fixedArray = Array.from(uniqueSet);

return fixedArray;

/* Using a For-loop 

for (let i = 0; i < array.length; i++) {
    if (array.indexOf(array[i]) != i) {
      array.splice(i, 1);
      i--;
    }
}

return array;

*/

}

console.log(unique(colours)); // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)); // [ 55, 84, 97, 63, 32, 91, 43 ]
console.log(unique(years));