function getSalary(userId) {
    console.log(`Getting salary for ${userId}`)
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Returning salary')
            resolve(10000);
        }, 1000);
    });
}

function getName(userId){
    console.log(`Getting name for ${userId}`)
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Returning name')
            resolve('Cool John');
        }, 1000);
    });
}

const userId = 5;
// print user name and salary:
const name2 = getName(userId)
const salary = getSalary(userId)
console.log(`${name2} has a salary of ${salary}`)