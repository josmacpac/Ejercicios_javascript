console.log("EJERCICIOS 5 AL 8");

//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

/* cadena = prompt("ingresa tu texto aqui");
const invertir = (cadena= "") =>
    (!cadena)
    ?alert("no has ingresado una cadena")
    :alert(cadena.split("").reverse().join(""));
invertir(cadena); */

//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

//solucion Jon Mircha
/* const textoEnCadena = (cadena="", texto="")=>{
    if(!cadena)return console.warn("No ingresaste ningun texto");
    if(!texto)return console.warn("No ingresaste la palabra a evaluar");
    let i=0,
    contador=0;

    while(i !== -1){
        i = cadena.indexOf(texto,i);
        if(i !== -1){
            i++;
            contador++;
        }
    }
return console.info(`la palabra ${texto} se repite ${contador} veces`);
} */

//textoEnCadena("función que valide funcion si si  una palabra si o frase dada","si");

//Mi solucion
const contarPalabras = (cadena="", texto="") =>{
    
    let arreglo=cadena.split(" ");
    let repetidos = [];
        
    for(let i=0; i<arreglo.length; i++){
       
            if(texto===arreglo[i]) repetidos.push(texto);
        
                    
                }
                console.log(repetidos.length);
                console.log(arreglo);
                console.log(repetidos);
            console.log(`la palabra ${texto} se repite ${repetidos.length} veces`);
}
contarPalabras("mi ma mama mama mama me mima mucho porque mi mama es muy buena","mama");


//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.


const palindromo= (palabra="")=>{
    if(!palabra)return console.warn("no has ingresado la palabra a comparar");
    palabra= palabra.toLowerCase(); //convertir cadena a minusculas
    let nuevaPalabra = palabra.split("").reverse().join("");
    console.log(nuevaPalabra);
    if (nuevaPalabra === palabra) {
        console.info(`${palabra} es un palindromo`);
        
    }else{
        console.warn("no cumple")
    }
    
    
    }
    
    //palindromo("salas");
    
    //Solucion JonMicha
    const palindromo2= (palabra="")=>{
        if(!palabra)return console.warn("no has ingresado la palabra a comparar");
        palabra= palabra.toLowerCase(); //convertir cadena a minusculas
        let nuevaPalabra = palabra.split("").reverse().join("");
        return(palabra===nuevaPalabra)
        ?console.info(`Si es palindromo`)
        :console.info(`No es palindromo`);
    
    }
    palindromo2("sAlas");
    
    
//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.



