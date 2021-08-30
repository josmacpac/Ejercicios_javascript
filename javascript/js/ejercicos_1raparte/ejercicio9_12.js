console.info("Ejercicios 9 al 11");
console.warn("9) Programa una función que obtenga un numero aleatorio entre 501 y 600.   Solucion:");

const numeroAleatorio = (min="", max="") =>
(!min)
?console.warn("no ingresaste limite inferior")
:(!max)
?console.warn("no ingresaste el limite superior")
:console.log(Math.round(Math.random()*(max-min) + (min+1)));


//numeroAleatorio();
//numeroAleatorio(400,500);



console.warn("10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.      Solucion:");

    const capicua = (numero="") =>{
    if(!numero) return console.warn("no ingresaste ningun numero");
    if(typeof numero !== "number") return console.error("El valor ingresado no es un numero");
    if(isNaN(numero))return console.warn("el valor ingresado no es un numero");
    numero = (""+numero); //aqui se puede utilizar el metodo numero.toString()
    let nuevoNumero = numero.split("").reverse().join("");
    console.log(`numero original: ${numero} numero al reves: ${nuevoNumero}`);
    if (numero === nuevoNumero) return console.info(`El numero ${numero} es capicua`);
    console.warn("No es capicua");

    }

    /* capicua();
    capicua("hola");
    capicua(54);
    capicua(44); */

    console.warn("11 Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.        Solucion:");

   /*  const factorial = (num="") =>{
    let signo = Math.sign(num);
    let arrNum = [];
    let fact = 1;

        if(!num) return console.error("no ingresaste ningun numero");
        if(isNaN(num))return console.error("el valor ingresado no es un numero");
        if(signo===(-1))return console.error("ingresaste un numero negativo, intenta nuevamente");
        

        for(let i=(num); i>0; i-- ){
            arrNum.push(i);
        }//console.log(arrNum);
        
        for(let j=0; j<arrNum.length;j++){
            fact = (arrNum[j]*fact);
        }console.log(`El factorial del numero: ${num} es:${fact}`);
    

    } */

   /*  
    factorial();
    factorial("hola");
    factorial(3);
    factorial(-5);
    factorial(20); */

/* const factorial = (numero= undefined)=>{

    if (numero===undefined) return console.error("no ingresaste un numero");

    if (Math.sign((numero))===-1) return console.error("El numero no puede ser negativo");

    if (typeof numero !== "number") return console.error("El valor ingresado no es un numero") ;

    if (numero ===0)return console.error("El valor no puede ser 0"); 

    let factorial= 1;

    for(let i= numero; i> 1; i--){
        factorial*=i;
    }
    console.info(`el factorial de ${numero} es ${factorial}`);

    } */

   /*  factorial();
    factorial("F");
    factorial(0);
    factorial(-1);
    factorial(5); */
    


console.info("--");