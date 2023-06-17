//El alcance de bloque es una característica introducida en ECMAScript 6 (ES6) que permite que las variables declaradas con "let" y "const" tengan un alcance más limitado. En el alcance de bloque, las variables solo son accesibles dentro del bloque de código en el que se declaran, como un bloque if, un bucle for o cualquier otro bloque delimitado por llaves {}
function fruit(){
    if(true){
        var fruit1 = "Apple";//function scope
        let fruit2 = "Kiwi";// block scope
        const fruit3 = "Banana";//block scope
        console.log(fruit2);// kiwi
        console.log(fruit3);//Banana
    }
    console.log(fruit1);// var tiene scope de funcción; por lo tanto, puedo acceder desde fuera del bloque dentro de la función.
    //console.log(fruit2);//Me arroja error porque la variable esta definida dentro del bloque if.
    //console.log(fruit3);//Me arroja error porque la variable esta definida dentro del bloque if.
}
fruit();