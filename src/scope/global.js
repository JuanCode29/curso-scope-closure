// variables
var a;  // declarando
var b = "b"; //declaramos y asignamos
b= "bb"; //reasignacion
var a = "aa" //redeclaración

//Global Scope

var fruit = "Apple"; //global

function betsFruit(){
    console.log(fruit);
}

betsFruit();

function contries(){
    country = "Colombia"; // La declaracion de esta manera es una declaración global
    console.log(country);
}
contries();
console.log(country);

