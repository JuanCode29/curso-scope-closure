//En el ámbito léxico, cuando se define una variable dentro de una función, esa variable es accesible dentro de esa función y cualquier función anidada dentro de ella. Sin embargo, las funciones internas no pueden acceder a las variables locales de las funciones externas.
const myGlobal = 0;

function myFunction(){
    const myNumber = 1;
    console.log(myGlobal);
    function parent(){// funcion interna
        const inner = 2;
        console.log(myGlobal, myNumber);
        function child(){//funcion interna
            console.log(myGlobal, myNumber, inner);
        }
        return child; // No llames a child() aquí, solo devuelve la referencia a la función para luego ser ejecutada mas adelante,
    }
    return parent();// Llama a parent() para obtener la referencia a la función child
}
var resultado = myFunction(); 
resultado(); // Llama a resultado() para ejecutar la función child
