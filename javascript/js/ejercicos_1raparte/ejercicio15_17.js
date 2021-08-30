


//15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

/* 
const convertir = (numero=undefined, base=undefined)=>{
    if (numero===undefined) return console.error("no ingresaste un numero");

    if (Math.sign((numero))===-1) return console.error("El numero no puede ser negativo");

    if (typeof numero !== "number") return console.error("El valor ingresado no es un numero") ;
    


switch (base) {
    case 2:
        console.info(`${numero} base ${base} = ${parseInt(numero,base)} base 10`);
        break;
        case 10:
        console.info(`${numero} base ${base} = ${numero.toString(2)} base 2`);
        break;

    default:
        console.warn("No ingresaste un numero valido")
        break;
}

    

}
convertir();
convertir(1001,2);
convertir(4,10);

 */


//16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.


/* const descuento = (importe=undefined, porc=undefined)=> {
    if (importe===undefined) return console.error("no ingresaste una cantidad valida");
    if (Math.sign((importe))===-1) return console.error("El numero no puede ser negativo");
    if (typeof importe !== "number") return console.error("El valor ingresado no es un numero") ;
    if (porc===undefined) return console.error("no ingresaste un porcentaje");
    if (typeof porc !== "number") return console.error("El valor ingresado no es un numero") ;
    if (Math.sign((porc))===-1) return console.error("El numero no puede ser negativo");
    if(porc>100)return console.error("El numero no puede ser mayor a 100%");

    let calculoPorc = (((importe/100)*porc));
    let total = importe-calculoPorc;

    console.info(`$${importe} - el ${porc} % = $${total.toFixed(2)}`);

}
descuento();
descuento(200,10);
descuento(56830,23.56);
 */





//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
  

/* const date = (ano=undefined,mes=undefined, dia=undefined)=>{
    if (ano===undefined || mes===undefined || dia===undefined) return console.error("no ingresaste una fecha valida");
    if (Math.sign((ano))===-1 || Math.sign((mes))===-1 || Math.sign((dia))===-1) return console.error("El numero no puede ser negativo");
    if (typeof ano !== "number" || typeof mes !== "number" || typeof dia !== "number") return console.error("El valor ingresado no es un numero") ;
    if(mes>12) return console.warn("ingrese un mes valido");
    if( ano%4===0 && ano%100===0 && ano%400===0 && mes===2 && dia>=29) return console.warn(" Es año bisiesto , Febrero solo tiene 29 dias");
    if(mes===2 && dia>=28) return console.warn("Febrero solo tiene 28 dias");
    if((mes===1 || mes===3 || mes===5 || mes===7 || mes===8 || mes===10 || mes===12)&& dia>=31 ) return console.warn(`El mes ${mes} solo tiene 31 dias`);
    if(dia>=30) return console.warn(`El mes ${mes} solo tiene 30 dias`);
    
    const fecha = new Date();
    let hoy = fecha.getDate(); 
    let mesActual= fecha.getMonth()+1;
    let anoActual = fecha.getYear() + 1900;

    if(ano>anoActual) return console.warn(`El año no puede ser mayor a ${anoActual}`);

console.log(hoy);
console.log(mesActual);
console.log(anoActual);
}

date();
date(1900,02,30);
date(-1984,12,26);
date(1984,"12",26); */

 
const calcularAnios = (fecha = undefined)=>{
    if (fecha===undefined ) return console.error("no ingresaste una fecha valida");
    if (!(fecha instanceof Date)) return console.error("el valor ingresado no es una fecha");

    let hoyMenosFecha = new Date().getTime()-fecha.getTime(),  
    aniosEnMS = 1000*60*60*24*365;
    aniosHumanos = Math.floor(hoyMenosFecha/aniosEnMS);  //convertir Milisegundos a años

    return(Math.sign(aniosHumanos)=== -1)  //si el signo de anios HUmanos es negativo muestra este mensaje...
    ?console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
    :(Math.sign(aniosHumanos)===1)
    ?console.info(`Han pasado ${aniosHumanos} desde ${fecha.getFullYear()}`)
    :console.info("Estamos en el año actual");


}

calcularAnios();
calcularAnios("ola");
calcularAnios(new Date(1988,12,26));
calcularAnios(new Date(2048,12,23));

