/* 27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.


 
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western. */


class pelicula {
  constructor({id, titulo, director, aEstreno, pais, genero, calificacion}){
this.id= id;
this.titulo= titulo;
this.director= director;
this.genero= genero;
this.aEstreno= aEstreno;
this.calificacion = calificacion;
this.pais = pais;

this.validarID(id);
this.validarTitulo(titulo);
this.validarDirector(director);
this.validarEstreno(aEstreno);
this.validarPais(pais);
this.validarGenero(genero);
  }



  //validaciones generales
validarCadenas(propiedad, valor){
if (!valor)return console.warn(`${propiedad}: ${valor} esta vacio`);
if(typeof valor !=="string")return console.warn(`${propiedad}: ${valor} no es valido`);
return true;
}

validarLongitudCadena(propiedad, valor, longitud){
if(valor.length > longitud) return console.error(`${propiedad} "${valor}" excede el numero de caracteres permitidos (${longitud}).`);
return true;
}


validarNumeros(propiedad, valor){
if (!valor)return console.warn(`${propiedad}: ${valor} esta vacio`);
if(!(typeof valor ==="number"))return console.warn(`${propiedad}: ${valor} no es un numero valido`);
return true;
}

validarArreglos(propiedad, valor){
if(!valor) return console.warn(`${propiedad}: ${valor} esta vacio`);
if (!(valor instanceof Array)) return console.error(`${propiedad}: ${valor}no es un arreglo`) ;
if(valor.length===0) return console.warn("El arreglo no puede estar vacio");
for (let cadena of valor) { 
  if(typeof cadena !== "string")return console.error(`El valor ${cadena} No es una cadena de texto`);
}
return true;
}
  
//Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números
validarID(id){
 if(this.validarCadenas("IMBDid", id))
      if(!(/^([a-z]){2}([0-9]){7}$/.test(id))) 
          return console.error(`el ID ${id} no es valido, debe tener 9 caracteres, lso 2 primeros letras minusculas y los 7 restantes numeros`)
          else(console.log(` IMBDid: ${id} : ok`));
}
//Valida que el título no rebase los 100 caracteres.
validarTitulo(titulo){
if(this.validarCadenas("Titulo", titulo))
(this.validarLongitudCadena("Titulo", titulo, 100))  
   return(console.log(` titulo: ${titulo} : ok`));
}

//  - Valida que el director no rebase los 50 caracteres.
validarDirector(director){
  if(this.validarCadenas("Director", director))
  (this.validarLongitudCadena("Director", director, 50))
  return (console.log(` Director: ${director} : ok`));
  }
  // - Valida que el año de estreno sea un número entero de 4 dígitos.
validarEstreno(aEstreno){
  if(this.validarNumeros("Estreno", aEstreno))
  if(!(aEstreno > 1800)) return console.warn(`El año ${aEstreno} no es valido`)
  if(!(/^([0-9]){4}$/.test(aEstreno)))  return console.error(`${aEstreno} no es un año valido, ingrese el año en 4 digitos`)
  return (console.log(` Año de Estreno: ${aEstreno} : ok`));
}

//  - Valida que el país o paises sea introducidos en forma de arreglo.
validarPais(pais){
 if( this.validarArreglos("Pais", pais))

  return console.log(` Pais : ${pais} : ok`);
}


//- Valida que los géneros sean introducidos en forma de arreglo.
//Valida que los géneros introducidos esten dentro de los géneros aceptados*.

validarGenero(genero){
  let arrGenero = ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film", "Noir" , "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance"," Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];


  if(this.validarArreglos("Genero", genero)) 
  if(arrGenero.includes(genero)) return console.log(` Pais : ${genero} : ok`);
  else console.error(`${genero} no es un genero valido, ingrese uno de la lista : ${arrGenero}`)
}






}

//agregar datos al objeto
const hola = new pelicula({
  id:"rr1234547",
  titulo: "Terminator 2: judgement day",
  director: "James cameron",
  aEstreno: 1991,
  pais:["Estados Unidos", "Mexico"],
  genero:["Horror"]


});