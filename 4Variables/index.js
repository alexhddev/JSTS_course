// is not used anymore 
var a = 5;

// ca be reassigned
let b = 'b';

// cannot be reassigned
const employee = {
    name: 'John'
}

b = 5;


// TypeError: Assignment to constant variable.
// employee = {
//     name: 'Mary'
// }

employee.name = 'Mary'

const lockedEmployee = Object.freeze({
    name: 'John'
})

lockedEmployee.name = 'Mary'

console.log(lockedEmployee.name)