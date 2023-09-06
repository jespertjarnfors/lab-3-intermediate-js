function truncate (str, max) {

    if (str.length > max) {
        str = str.slice (0, max) + "...";
    }

    return str;
}


console.log(truncate('This text will be truncated if it is too long', 25)) 

function truncateConditional (str, max) {
    
   const validation = str.length > max ? str = str.slice (0, max) + "..." : str;
    
   return validation;
}


console.log(truncateConditional('This text will be truncated if it is too long', 16)) 
console.log(truncateConditional('This text will be truncated if it is too long', 60)) 