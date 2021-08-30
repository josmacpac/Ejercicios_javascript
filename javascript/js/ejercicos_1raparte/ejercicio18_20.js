//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
const contarLetras = (cadena="")=>{
    if(!cadena)return console.warn("no ingresaste una cadena de texto");
    if(typeof cadena!=="string") return console.error("el valor ingresado no es una cadena");
    
    let contadorVocales=0,
    contadorConsonantes = 0;
    
    cadena= cadena.toLocaleLowerCase();
    
    for (let letra of cadena) {
        if(/[aeiou]/.test(letra))contadorVocales++;
        if(/[bcdfghjklmnpqrstuvwyxz]/.test(letra))contadorConsonantes++;
    }
        return console.info({
            cadena,
            contadorVocales,
            contadorConsonantes
        })
    
    
    }
    /* contarLetras();
    contarLetras(55);
    contarLetras("hola mundooo"); */
    
    
    //19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
    const validarNombre =(nombre="")=>{
        if(!nombre)return console.warn("no ingresaste una cadena de texto");
        if(typeof nombre!=="string") return console.error("el valor ingresado no es una cadena");
        
        let expReg = /^[A-Za-zÑñ'\s]+$/g.test(nombre);
        return(expReg)
        ?console.info(`${nombre} es un nombre valido`)  //true
        :console.error(`${nombre} NO es un nombre valido`); //false
    }
    /* validarNombre();
    validarNombre(2);
    validarNombre("jose Macias");
    validarNombre("jose macias 34");
     */
    
    //20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
    
    const validarCorreo = (correo="")=>{
        if(!correo)return console.warn("no ingresaste una cadena de texto");
        if(typeof correo!=="string") return console.error("el valor ingresado no es una cadena");
    
        let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(correo);
    
        return(expReg)
        
        ?console.info(`${correo} es un emial valido`)  //true
        :console.error(`${correo} NO es un email valido`); //false
        
    
    }
    
    /* validarCorreo();
    validarCorreo(443);
    validarCorreo("jose@");
    validarCorreo("jose@hotmail.com");
     */
    