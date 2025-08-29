// Primitive data types:

// String
const someString = 'Hello'

// number
const someNumber = 3.14

// BigInt
const someBigNumber = 123n

// Boolean - true of false
const isTrue = true

// Undefined - a variable with no value assigned
let isUndefined = undefined

// Null - no value
const isNull = null

// Symbol – unique, immutable value
const someSymbol = Symbol("foo")

// Non-primitive data type:

// Object
const employee = {
    name: 'John',
    position: 'tester',
    salary: 3000
}


// typeof operator:
console.log('Type of ' + someString )
console.log(typeof(someString))

console.log('Type of ' + someNumber )
console.log(typeof(someNumber))

console.log('Type of ' + someBigNumber )
console.log(typeof(someBigNumber))

console.log('Type of ' + isTrue )
console.log(typeof(isTrue))

console.log('Type of ' + isUndefined )
console.log(typeof(isUndefined))

console.log('Type of ' + isNull )
console.log(typeof(isNull))

console.log('Type of ' + someSymbol.toString() )
console.log(typeof(someSymbol))

console.log('Type of ' + employee )
console.log(typeof(employee))