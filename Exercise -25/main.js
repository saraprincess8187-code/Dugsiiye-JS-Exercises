// Spread operator //
const numbers = [1,2,3,]

const allNumbers = [...numbers, 4, 5, 6]

console.log(allNumbers)


// Rest operator //
function multiply (...numbers){
    return numbers.reduce((acc, num) => acc * num, 1)
}
console.log(multiply(2, 3, 4, 5))
