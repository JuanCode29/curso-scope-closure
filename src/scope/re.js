//Reasignación y redeclaración
//Una variable declarada con var puede ser redeclarada y reasignada.
//Una variable declarada con let puede ser reasignada, pero no redeclarada.
//Una variable declarada con const no puede ser redeclarada, ni reasignada. Su declaración y asignación debe ser en una línea, caso contrario habrá un error.
var firstName; //Declaracion; se asigna un valor "undefined"
firstName = "Juan"; //Asignación.
console.log(firstName);

var lastName = "Pedro"; //Declaración y Asignación;
lastName = "Pablo"; //Reasignación;
console.log(lastName);

var seconName = "David"; //Declaración y Asignación.
var seconName = "Jose"; //Redeclaración y Reasignación.
console.log(seconName);

//let
let fruit = "Apple"; //Declaración y Asignación.
fruit = "Banana"; //Reasignación
console.log(fruit);

// Let NO permite redeclaracion.
let fruit = "kiwi"; //error NO se puede volver a declarar
console.log(fruit);

//const
const animal = "perro"; //Declaración y Asignación.
//animal = "gato"; //Reasignacion. NO PERMITE
const animal = "gato"; //Redeclaración NO PERMITE
console.log(animal);

// const con arreglos objetos

const vehicles = [];
vehicles.push("🚗");//me permite modificar las propiedade y utilizar métodos
console.log(vehicles);

vehicles.pop("🚗");
console.log(vehicles);