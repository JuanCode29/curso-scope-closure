// scope de funcion
function greeting(){
    let userName = "Juan"; // La variable pue ser accedida dentro de la misma función y de algún bloque dentro de la misma
    console.log(userName);
    if(userName === "Juan"){
        var apellido = "Quispe"; // Las variable declaradas con "var" tienen alcance de funcion
        let segundoApellido = "Molina"; // Las variables declaradas con "let" y "const" solo tienen en este caso alcance de bloque
        console.log(`Hello, ${userName}`);
    }
    console.log(apellido);
    console.log(segundoApellido);// Me arroja error xq lo estoy mandando a llamar desde scope de función y no del bloque donde fue declarado
}
greeting();