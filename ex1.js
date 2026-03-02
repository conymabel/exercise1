// Jiménez Jiménez Cony Mabel ID: 4963 - TDSM4A
// Exercise 1: Create  an empty array and populate it with numbers from 1 to 20  using a while loop.

/*
Primero creo una variable llamada "array" y le asigno un array vacío. Luego, creo una variable "i" y le asigno el valor 1.
Después, utilizo un bucle while que se ejecuta mientras "i" sea menor o igual a 20. Dentro del bucle, utilizo el método push()
para agregar el valor de "i" al array. Luego, incremento el valor de "i" en 1. 
Finalmente, después de que el bucle haya terminado, imprimo el array completo en la consola.
*/

let array = []; 
let i = 1;

while (i <= 20) {
    array.push(i);
    i++;
}  
console.log(array);