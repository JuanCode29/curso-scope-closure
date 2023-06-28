/* En este desafío tendrás que crear un closure que nos permita almacenar datos de mascotas en cualquier momento.
Los datos pueden venir de distintas maneras, pueden ser objetos, strings o arrays. En el primer llamado a la función nos servirá para crear nuestra lista en un inicio mientras que los demás llamados nos ayudará a agregar elementos al final de la lista.
Si en algún momento llamamos a la función sin pasarle ningún parámetro esta nos devolverá el array con los datos de todos las mascotas introducidas.*/
function createListPet(){
    let  listPet = [];
    function pet(data){
        if(arguments.length !== 0){//Si la funcción ingreso arguementos
            if(Array.isArray(data)){//me permite ingresar objetos, string o arrays
                listPet = listPet.concat(data);
                return listPet;
            }else{
                listPet.push(data);
                return listPet;
            }
        }else{
            return listPet;
        }
    }
    return pet;
}
let callLet = createListPet();
console.log(callLet("Perro"));
console.log(callLet("Gato"));
console.log(callLet({Nombre: "Cerdo", Nombre2: "Asno"}));
console.log(callLet("Tigre","Lobo"));
console.log(callLet());