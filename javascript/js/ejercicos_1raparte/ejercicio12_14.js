console.log("ejercicios 12 al 14")

console.warn(" 12 - Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.");
   
const primos = (numero= undefined)=>{

    if (numero===undefined) return console.error("no ingresaste un numero");

    if (Math.sign((numero))===-1) return console.error("El numero no puede ser negativo");

    if (typeof numero !== "number") return console.error("El valor ingresado no es un numero") ;

    if (numero ===0)return console.error("El valor no puede ser 0"); 
    
    let divisible=false;

for(let i=2; i<numero; i++){
if((numero%i )=== 0){ 
divisible=true;
break;  //detiene el ciclo si encuentra un numero que divida sin residuo al numero proporcionado
}
}
return(divisible) //si divisible es verdadero
?console.log(`El numero ${numero } NO es primo`)  //accion SI
:console.log(`El numero ${numero } SI es primo`)  //accion NO

}
    




primos();
primos(4);
primos("F");
primos(-5);
primos(7);
primos (200);





console.warn("13 - Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.");

const parImpar = (numero=undefined)=>{
    if (numero===undefined) return console.error("no ingresaste un numero");

    if (typeof numero !== "number") return console.error("El valor ingresado no es un numero") ;

    if (numero ===0)return console.error("El valor no puede ser 0"); 

let divisible=false;

    if ((numero%2)=== 0) {
        divisible=true;
    }
return(divisible)
?console.log(`el numero ${numero} es par`)
:console.log(`el numero ${numero} es impar`);
}


parImpar();
parImpar(2);
parImpar(577);
parImpar(-576);
parImpar("hola")



console.warn("14 - Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0, C) devolverá 32°F.");


const grados = (numero=undefined, tipo= "")=>{
    if (numero===undefined) return console.error("no ingresaste un numero");
    if (typeof numero !== "number") return console.error("El valor ingresado no es un numero") ;
    if (tipo==="") return console.error("no ingresaste ningun tipo");
    let numConvertido=0

    switch(tipo){
        case "celsius":
        
        numConvertido= Math.round((numero-32)/1.8);
        console.log(`${numero} grados Farenheit es igual a ${numConvertido} grados Celsius`);
        break;
        case "farenheit":
            numConvertido= Math.round((numero*1.8)+32);
            console.log(`${numero} grados Celsius es igual a ${numConvertido} grados Farenheit`); 

            break;
            default:
                console.error(`${tipo} no es un datos valido`);
    }

    

}

grados();
grados(255,"");
grados(130,"farenheit");
grados(0,"farenheit");
grados(255,"celsius");
grados(255,"hola");
