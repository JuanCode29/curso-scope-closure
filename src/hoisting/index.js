/* //Como estoy llamando a la variable antes de ser asignada un valor, ésta debido al hoisting sube (Solo a declaracion)
console.log(nameOfDog); // el resultado es undefined 
var nameOfDog = "Elmo"; 

//Quedaría así:
var nameOfDog; //undefined
console.log(nameOfDog); // el resultado es undefined. Como nameOfDog al momento de mostrarlo aún no ha sido asignado ésta toma el valor de: undefined. 
var nameOfDog = "Elmo"; */

// FUNCIONES

nameOfDog();//llamando antes de declararla
function nameOfDog(){
    console.log(`El mejor perrito es: ${elmo}`);
}
var elmo = "elmito";

// el resultado va ser: El mejor perrito es: undefined
//porque la declaracion de la variable se va a desplazar a la parte superior, quedando así:

var elmo; //undefined
nameOfDog();//llamando antes de declararla
function nameOfDog(){
    console.log(`El mejor perrito es: ${elmo}`);
}
var elmo = "elmito";

// Entonces la forma correcta teneindo encuenta la variable sería:
var elmo; //undefined
nameOfDog();//llamando antes de declararla
function nameOfDog(){
    elmo = "elmito"; // la variable elmo ya es asignada antes de mostrarla.
    console.log(`El mejor perrito es: ${elmo}`);
}

//Teniendo en cuenta la llamada a la función tambien sería:

var elmo; //undefined
function nameOfDog(){
    elmo = "elmito"; // la variable elmo ya es asignada antes de invocarla.
    console.log(`El mejor perrito es: ${elmo}`);
}
nameOfDog();//llamando después de declararla
