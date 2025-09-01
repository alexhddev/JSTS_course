const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Who do you want to greet? - separated by space \n', (args)=>{
    const argsSplitted = splitArgs(args)
    argsSplitted.forEach(name => {
        console.log('Hi ' + name)
    });
    rl.close()
})

/**
 * 
 * @param {string} args 
 */
function splitArgs(args){
    const splittedArgs = args.split(' ')
    return splittedArgs
}