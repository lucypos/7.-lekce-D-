//Výplata
const salary = (wage, hours, days) => {
    return (wage * hours * days)
}


const taxed = (salary, tax) => {
    return salary * (100-tax) / 100
}

let wage = 300
let hours = 8
let days = 21


let hrubaMzda = salary(wage, hours, days)
let cistaMzda = taxed(hrubaMzda, 15)

//Kalkulačka
const calculate = (number1, operation, number2) => {
   if (operation === '+') {
    return number1 + number2
   }
   if (operation === '-') {
    return number1 - number2
   }
   if (operation === '*') {
    return number1 * number2
   }
   if (operation === '/') {
    return number1 / number2
   }
}
