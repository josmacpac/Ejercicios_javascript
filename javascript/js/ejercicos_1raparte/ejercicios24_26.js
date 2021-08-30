//24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

ordenarArreglo = (arr=undefined)=>{
    if(arr===undefined) return console.warn("No has ingresado un arreglo de numero");
    if (!(arr instanceof Array)) return console.error("El valor ingresado no es un arreglo") ;
    if(arr.length===0) return console.warn("El arreglo no puede estar vacio");
    for (let num of arr) {  //iterar los elementos del arreglo
        if(typeof num !== "number")return console.error(`El valor ${num} No es un numero`);
    }

return console.info({
    arr,  //si el atributo se llama igual que la variable solo se pone el nombre de la variable una vez
    asc: arr.map(el => el).sort(),
    desc: arr.map(el => el).sort().reverse()

});



}

/* ordenarArreglo();
ordenarArreglo([1,2,3,4,5,6,7,8]);
 */



//25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const eliminarDuplpicados = (arr=undefined)=>{
    if(arr===undefined) return console.warn("No has ingresado un arreglo de numero");
    if (!(arr instanceof Array)) return console.error("El valor ingresado no es un arreglo") ;
    if(arr.length===0||(arr.length===1))  return console.warn("El arreglo debe tener al menos 2 elementos");

 /*    return console.info({
        Original: arr,
        SinDuplicados : arr.filter((value,index,self) => self.indexOf(value) === index)
    }) */
//tipo de dato set

return console.info({
    original : arr,
    sinDuplicados: [...new Set(arr)]
})

}

/* eliminarDuplpicados();
eliminarDuplpicados([]);
eliminarDuplpicados([1]);
eliminarDuplpicados([1,"x",5,"x",5,2])

 */


//26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const promedio = (arr=undefined)=>{
    if(arr===undefined) return console.warn("No has ingresado un arreglo de numero");
    if (!(arr instanceof Array)) return console.error("El valor ingresado no es un arreglo") ;
    if(arr.length===0) return console.warn("El arreglo no puede estar vacio");
    for (let num of arr) {  //iterar los elementos del arreglo
        if(typeof num !== "number")return console.error(`El valor ${num} No es un numero`);
    }

return console.info(
    arr.reduce((total,num,index,arr)=>{
    total+=num;
    if(index === arr.length-1){
        return `El promedio de ${arr.join(" + ")} es ${Math.round(total/arr.length)}`;
    }else{
        return total;
    }
})
)
}

/* promedio();
promedio([1,4,5,6,9,3]); */