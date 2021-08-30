const d = document;
export function digitalClock(clock,btnPlay, btnStop) {
    let clockTempo;

    d.addEventListener("click", (e)=>{
        if(e.target.matches(btnPlay)){
            clockTempo = setInterval(()=>{
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
            }, 1000);

            e.target.disabled = true;
        }
        if(e.target.matches(btnStop)){
            clearInterval(clockTempo);
            d.querySelector(btnPlay).disabled = false;
        }
    });
}

export function alarm(reproductor, sound, btnPlay, btnStop) {
    let alarmTempo;
    let $alarm = d.getElementById("#reproductor");
   //$alarm.src = sound;
    

   

    d.addEventListener("click", e=>{
        if(e.target.matches(btnPlay)){
alarmTempo = setTimeout(()=>{
    d.querySelector(reproductor).innerHTML = `<audio src="${sound}" controls autoplay></audio>` //mostrar reproductor
    //$alarm.play();
},2000);
e.target.disabled = true;
        }
    })

    d.addEventListener("click", e=>{
        if(e.target.matches(btnStop)){
clearTimeout(alarmTempo); //cancelar el timeout
$alarm.pause(); //pause
$alarm.currentTime  = 0; //stop
d.querySelector(btnPlay).disabled = false;

        }
    })
}

