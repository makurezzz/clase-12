const num1 = parseInt(prompt("ingrese el primer numero"));
const num2 = parseInt(prompt("ingrese el segundo numero"));
const num3 = parseInt(prompt("ingrese el tercer numero"));
const parrafo = document.querySelector ("#parrafo");

if (num1 > num2 && num1 > num3) {
    parrafo.innerHTML = "el numero más grande es " + num1;
} else if (num2 > num1 && num2 > num3) {
    parrafo.innerHTML = "el numero más grande es " + num2;
} else {
    parrafo.innerHTML = "el numero más grande es " + num3;
    }