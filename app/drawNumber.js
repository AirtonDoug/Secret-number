
function generateNumber(){
    return parseInt(Math.random()*greaterValue + 1)
}
const lowerValue = 11;
const greaterValue = 1000;
const secretNumber = generateNumber();

const lowerValueElement = document.getElementById('menor-valor')
lowerValueElement.innerHTML= lowerValue;
const greaterValueElement = document.getElementById('maior-valor')
greaterValueElement.innerHTML=greaterValue;

console.log("Numero Secreto",secretNumber)