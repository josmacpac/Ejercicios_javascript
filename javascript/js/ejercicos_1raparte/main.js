console.log("hola mundo");

const objeto = {
    nombre: "jose",
    apellido:"macias",
    edad:35
}

for (const propiedad in objeto) {
    console.log(`Key:${propiedad},Value:${objeto[propiedad]}`);
    
}

try {
    console.log("en el try se agrega el codigo a evaluar")
} catch (error) {
    console.log("en Catch se captura cualquier error que surja en try")
} finally{
    console.log("se ejecutara siempre al fianl de un bloque try catch")
}


try{
    let numero = "y";
    if (isNaN(numero)) {
        throw new Error("El caracter introducido no es un Numero");
    }
    console.log(numero*numero);
    
    }catch (error){
        console.log(`Se producjo el siguiente error: ${error}`);
}

//arrow function

const numeros = [1,2,3,4,5];

numeros.forEach((el, index) => console.log(`${el} esta en la posicion ${index}`));


//POO

/*
Clases - modelo a seguir
Objetos - Es una instancia de una clase
- Atributos - caracteristica o propiedad del objeto
- Metodos - Acciones que el objeto puede realizar ( son funciones)


*/

const animal = {
    nombre: "Snoopy",
    sonar(){
        console.log("Hago sonidos por que estoy vivi");
    }
}

console.log(animal);
 
//Herencia prototipica

