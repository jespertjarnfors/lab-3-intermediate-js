function camelCase(str) {
 
  let arr = [];

  let strSplit = str.split("-");

  if (strSplit.length > 1) {
    let upper = strSplit[1].charAt(0).toUpperCase() + strSplit[1].substring(1);
    arr.push(strSplit[0] + upper);
  } else {
    arr.push(str);
  }

  return arr.join('');
}


// 4B & 4C, For-loop and without any conditional statements.

function camelCaseForLoop(str) {
    
    let arr = str.split('-');

      for (let i = 1; i < arr.length; i++) {
        // Setting i = 1 and then arr[i] ensures that only the second item in the array is affected, even if there's just one item.
        arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
      }
      return arr.join(""); 
  }
  

console.log(camelCase("margin-left")); // marginLeft
console.log(camelCase("background-image")); // backgroundImage
console.log(camelCase("display")); // display

console.log(camelCaseForLoop("margin-right"));
console.log(camelCaseForLoop("background-size")); 
console.log(camelCaseForLoop("border")); 
