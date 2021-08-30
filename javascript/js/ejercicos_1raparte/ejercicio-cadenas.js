//34 Ejercicios

/*1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
*/
/* cadena = prompt("EJERCICIO 1 - introduce una cadena de texto");
console.log(cadena);
function contar(cadena = ""){
 
    if (!cadena) {
        alert("No ingresaste ninguna cadena");
    }else{
    let caracteres = cadena.length;
    console.log(`La cadena tiene ${caracteres} caracteres`);
    alert(`La cadena tiene ${caracteres} caracteres`);
}

}
contar(cadena);
 */

/* cadena = prompt("EJERCICIO 1 - introduce una cadena de texto");
const contarCaracteres = (cadena = "") =>
    (!cadena)
    ?alert("no ingresaste ninguna cadena, intentalo nuevamente")
    :alert(`la cadena "${cadena}" tiene ${cadena.length} caracteres `);

contarCaracteres(cadena); */


/*2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola"*/


const recortarTexto = (cadena ="", longitud = undefined)=>{
    cadena = prompt("EJERCICIO 2 - ingrese una cadena de texto");
  longitud = prompt("ingrese la longitu del texto que desea recortar");  
  (!cadena) //si la cadena esta vacia/ no se ingresa dato
  ?alert("No ingresaste una cadena") //falso
  :alert(`El texto recortado es: ${cadena.slice(0,longitud)}`);
  }
  
  //recortarTexto();
  
  /* function cortar(cadena, corteInicio, cortefinal){
      cadena = prompt("introduce una cadena de texto");
      let cadenaLenght = cadena.length;
      corteInicio = 0;
      
      while(true){ //evaluar si el caracter ingresado es un numero
          cortefinal = prompt(`intruduce un valor menor a ${cadenaLenght} para cortar la cadena de texto`);
          if (!isNaN(cortefinal) && cortefinal !=null && cortefinal !=""){
      alert("es numero");
      break;
      }else if(cortefinal == "fin") {
          break;
      }else{
          alert("no es numero");
          continue;
      };
      
      }
      let nuevaCadena = cadena.substring(corteInicio, cortefinal);
      console.log(`La cadena cortada es: ${nuevaCadena}`);
      console.log(cadena, cadenaLenght, corteInicio, cortefinal);
  }
  
  cortar();
  
  */
   //*3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
  /* 
  cadena = prompt("introduce una cadena de texto");
  separador = " ";
  function nuevoArreglo(cadena, separador){
     var ArrayDeCadena = cadena.split(separador);
     console.log(ArrayDeCadena);
  }
  nuevoArreglo(cadena,separador);
  
   */
  /*4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
  
  
  
  
  function repetir(cadena,repeticion){
  
      cadena = prompt("introduce una cadena de texto");
  while(true){ //evaluar si el caracter ingresado es un numero
      repeticion = prompt("Introduce el nuemro de veces que quieres que se repita");
      if (!isNaN(repeticion) && repeticion !=null && repeticion !=""){
  alert("es numero");
  break;
  }else if(repeticion == "fin") {
      break;
  }else{
      alert("no es numero");
      continue;
  };
  
  }
  console.log(cadena, repeticion);
  console.log(cadena.repeat(repeticion));
  
  }
  
  repetir();
  */