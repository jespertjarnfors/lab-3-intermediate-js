const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')



const phoneBookDEF = new Map()
phoneBookDEF.set('Darius', '048010040')
phoneBookDEF.set('Emma', '0415012940')
phoneBookDEF.set('Felicia', '0499385812')

// Changing Caroline's number.

phoneBookABC.set('Caroline', "0412312312");

console.log(phoneBookABC);
console.log(phoneBookDEF);

function printPhoneBook(contacts) {
    for (let item of contacts) {
        console.log(item)
    }
}

printPhoneBook(phoneBookABC);

const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

printPhoneBook(phoneBook);