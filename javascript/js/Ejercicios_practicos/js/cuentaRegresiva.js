const d= document;

export default function countDown(days, hours, minutes, seconds, nombreEvento, botonFecha ,limitDate, contenedorFecha, contenedorEvento) {
    const $nombreEvento = d.querySelector(nombreEvento);
    const $contenedor = d.querySelector(contenedorFecha);
    const $contenedorEvento = d.querySelector(contenedorEvento);
    const $spandays = d.querySelector(days);
    const $spanhours = d.querySelector(hours);
    const $spanminutes = d.querySelector(minutes);
    const $spanseconds = d.querySelector(seconds);
    
    
    d.addEventListener("click", (e)=>{
        if(e.target.matches(botonFecha)){
            const $fecha = d.querySelector(limitDate);
            const countdownDate = new Date($fecha.value).getTime();
            const MILLISECONDS_OF_A_SECOND = 1000;
            const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
            const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
            const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24;
           // console.log(countdownDate);
            $contenedorEvento.innerHTML = `<h1> ${$nombreEvento.value} </h1>`,
            $contenedor.innerHTML = ` es el ${$fecha.value} Faltan:</h3>`;

            let countDownTempo = setInterval(() =>{
                let fechaActual = new Date().getTime(),
                limitTime = countdownDate - fechaActual,
                days = Math.floor(limitTime/MILLISECONDS_OF_A_DAY),
                hours = Math.floor((limitTime%MILLISECONDS_OF_A_DAY)/MILLISECONDS_OF_A_HOUR),
                minutes = Math.floor((limitTime%MILLISECONDS_OF_A_HOUR)/MILLISECONDS_OF_A_MINUTE),
                seconds =Math.floor((limitTime%MILLISECONDS_OF_A_MINUTE)/MILLISECONDS_OF_A_SECOND);
        
             $spandays.textContent = days;
             $spanhours.textContent = hours;
             $spanminutes.textContent = minutes;
             $spanseconds.textContent = seconds;

                /* console.log(days);
                console.log(hours);
                console.log(minutes);
                console.log(seconds);
         */
        },1000);
        e.target.disabled = true;
        };
        
        
        
    }
    
    
    
    )

}



/* function setDate() {
    console.log(document.getElementById($fecha.value));
}  */