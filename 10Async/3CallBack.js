function getSalary(userId) {
    console.log(`Getting salary for ${userId}`)
    return new Promise((resolve) => {
        setTimeout(() => {
                resolve(10000);
        }, 1000);
    });
}

function getName(userId) {
    console.log(`Getting name for ${userId}`)
    return new Promise((resolve) => {
        setTimeout(() => {
                resolve('Cool John');
        }, 1000);
    });
}

const userId = 5;
// print user name and salary:
getName(userId).then(name =>{
    getSalary(userId).then(salary =>{
        console.log(`${name} has a salary of ${salary}`)
    })
})