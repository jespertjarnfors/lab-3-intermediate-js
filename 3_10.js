const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())

const hoursToMinutes = today.getHours() * 60;

const hoursToSeconds = today.getHours() * 60 * 60;

console.log(today.getHours() + ' hours have passed so far today')

// 10a.

console.log((hoursToMinutes + today.getMinutes()) + ' minutes have passed so far today')

// 10b.

console.log((hoursToSeconds + today.getSeconds()) + ' seconds have passed so far today')

// 10c.

const myBirthDay = new Date('1995-05-03');

const birthDayThisYear = new Date('2023-05-03')

const SepThisYear = new Date('2023-09-03')

let dayComparison = today - SepThisYear;

let dayConversion = (1000*60*60*24);

let years = today.getFullYear() - myBirthDay.getFullYear();

let months = today.getMonth() - birthDayThisYear.getMonth();

let days = (dayComparison/dayConversion);
// Setting the fixed value of the days "since" 3rd of September 2023 into a variable.

function preciseAge () {
 // The only way I could keep a somewhat precise day-count was with a while-loop that checks if days are over the avg of 30.5 days.
 // If so, it converts those days into a month and updates the days.
 
    while (days > 30.5) {
        months++;
        days = days - 30.5;
    }
    if (days < 31) {
        console.log(`I am ${(years)} years, ${(months)} months, and ${days.toFixed(0)} days old.`);
    }
}

preciseAge();


// 10d.

let date1 = new Date();
let date2 = new Date('2023-08-01')

function daysInBetween (date1, date2) {
    
    return `It has been ${((date1 - date2)/dayConversion).toFixed(0)} days since ${date2}`;
}

console.log(daysInBetween(date1, date2));