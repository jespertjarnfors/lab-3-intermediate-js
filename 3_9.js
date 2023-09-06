let salaries = {
    "Timothy" : 35000,
    "David" : 25000,
    "Mary" : 55000,
    "Christina" : 75000,
    "James" : 43000
    };

let sum = 0;    

function sumSalaries(salaries) {

let sum = 0;

let salaryArray = Object.values(salaries);

salaryArray.forEach(element => sum += element)

return sum;

}

function topEarner(salaries) {

let topSalary = 0;

let salaryArray = Object.values(salaries);

salaryArray.forEach(salary => {
    if (topSalary < salary) {
        topSalary = salary;
    }
})

return Object.keys(salaries).find(key => salaries[key] === topSalary);

}

console.log(sumSalaries(salaries));

console.log(topEarner(salaries));
