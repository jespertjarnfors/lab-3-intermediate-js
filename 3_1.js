function ucFirstLetters (str) {
 
    let capitalizedString = str.split(" ").map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(" ");

    return capitalizedString;

}


console.log(ucFirstLetters("los angeles"));

console.log(ucFirstLetters("hi my name is jared"));