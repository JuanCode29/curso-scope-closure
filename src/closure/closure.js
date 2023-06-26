function greeting(){
    let username = "Juan Pablo";
    function displayUsername(){
        return `hello, ${username}`;
    }
    return displayUsername;
}
const g = greeting();
console.log(g); // devuelve la funcion displayUsername
console.log(g());// devuelve el valor de la funcion displayUsername. Es la forma correcta de llamarlo.

