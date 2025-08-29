const numbers = []

numbers.push(1)
console.log(numbers[0])
console.log(numbers[1])

numbers.push([1,2,3])
console.log(numbers)

numbers.pop()
console.log(numbers)

numbers.push(...[2,3,4])
console.log(numbers)