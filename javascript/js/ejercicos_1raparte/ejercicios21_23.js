//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

    const elevar = (arr= undefined)=>{
        if(arr===undefined) return console.warn("No has ingresado un arreglo de numero");
        if ((!arr instanceof Array)) return console.error("El valor ingresado no es un arreglo") ;
        if(arr.length===0) return console.warn("El arreglo no puede estar vacio");
        for (let num of arr) {
            if(typeof num !== "number")return console.error(`El valor ${num} No es un numero`);
        }

    const nuevoArreglo = arr.map(el => el*el);

    return console.info(`Arreglo original: ${arr},\nArreglo elevado al cuadrado: ${nuevoArreglo} `);
    


} 
/* 
elevar();
elevar([]);
elevar("hola");
elevar([1, 2, 3, 4, 5, 6, 5]); */


//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].


const arrManMin = (arr= undefined)=>{
    if(arr===undefined) return console.warn("No has ingresado un arreglo de numero");
    if (!(arr instanceof Array)) return console.error("El valor ingresado no es un arreglo") ;
    if(arr.length===0) return console.warn("El arreglo no puede estar vacio");
    for (let num of arr) {
        if(typeof num !== "number")return console.error(`El valor ${num} No es un numero`);
    }

    return console.info(`Arreglo original ${arr} \nValor mayor: ${Math.max(...arr)} \nValor menor: ${Math.min(...arr)}`);

}

/* arrManMin();
arrManMin(false);
arrManMin([]);
arrManMin([1,2,5,9,-9]);

 */


//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const paresImpares = (arr=undefined)=>{
    if(arr===undefined) return console.warn("No has ingresado un arreglo de numero");
    if (!(arr instanceof Array)) return console.error("El valor ingresado no es un arreglo") ;
    if(arr.length===0) return console.warn("El arreglo no puede estar vacio");
    for (let num of arr) {
        if(typeof num !== "number")return console.error(`El valor ${num} No es un numero`);
    }
//validaciones

//metodofilter

return console.info({
    pares: arr.filter(num => num%2===0),
    impares: arr.filter(num => num%2===1)
})

}

//paresImpares([1,5,6,7,8,9,12,13]);
