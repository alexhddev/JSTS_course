function getGreet(name) {
  return "Hello, " + name + "!";
}

function greet(name) {
    console.log("Hello, " + name + "!")
}

function invoke(){
    const name = 'John'
    greet(name)
}

invoke()

const add = (a, b) => a + b;
add(5,6)

const numbers = [1,2,3]

numbers.forEach((arg)=>{
    console.log(arg)
})