//En JavaScript, el "modo estricto" (strict mode) es una característica que te permite escribir un código más seguro y evitar ciertos comportamientos propensos a errores. Al habilitar el modo estricto, el intérprete de JavaScript es más estricto en cuanto a la sintaxis y al manejo de variables, lo que puede ayudar a identificar y prevenir errores comunes. 
//Variables no declaradas: En modo estricto, no se permiten variables que no hayan sido declaradas explícitamente con var, let o const. Intentar asignar un valor a una variable no declarada arrojará un error.
//Este en el código colocando en la primera línea "use strict" para todo el archivo. También puede utilizarse en la primera línea de una función, pero no para un bloque en específico.
"use strict"
var pi;
pi = 3.1416;
console.log(pi);

// ReferenceError: pi is not defined 

/* function myFuntion(){
   "use strict"
    return pi = 3.1416;
}
console.log(myFuntion()); */

// FORMA CORRECTA
function myFuntion(){
   "use strict"
   let pi = 3.1416;
    return pi;
}
console.log(myFuntion()); 