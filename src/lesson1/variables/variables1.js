var firstVariable = 'test';
console.dir(firstVariable); // 'test'

firstVariable = 1;
console.dir(firstVariable); // 1

if (true) {
    firstVariable = true;
    var secondVariable = false;
}
console.dir(firstVariable); //true
console.dir(secondVariable); //false

var thirdVariable;
console.dir(thirdVariable); //undefined

var fourthVariable = {};
fourthVariable.firstKey = 'firstValue';
console.dir(fourthVariable); //{ firstKey: 'firstValue' }
