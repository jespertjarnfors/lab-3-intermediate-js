const animals = ['Tiger', 'Giraffe']

animals.push('Zebra', 'Lion');
animals.unshift('Dolphin', 'Whale');

animals.sort();

function replaceMiddleAnimalValue (newValue) {

animals[animals.length / 2] = newValue;

}

function findMatchingAnimals(beginsWith) {

    let letter = beginsWith.toUpperCase();

    let arr = [];

    animals.map(function (animal) {
        if (animal.charAt(0) === letter) {
            arr.push(animal);
        }
    })

    return arr;
}

replaceMiddleAnimalValue('Horse');

console.log(findMatchingAnimals('h'));

console.log(animals)