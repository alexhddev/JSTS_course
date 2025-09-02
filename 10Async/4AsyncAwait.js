function getSalary(userId) {
    console.log(`Getting salary for ${userId}`)
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Returning salary')
            resolve(10000);
        }, 1000);
    });
}

function getName(userId) {
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
async function printNameAndSalary() {
    const name = await getName(userId)
    const salary = await getSalary(userId)
    console.log(`${name} has a salary of ${salary}`)
}

printNameAndSalary()