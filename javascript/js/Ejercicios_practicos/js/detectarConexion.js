const d= document,
w= window;

export default function userNetwork(online, offline){
const $online = d.querySelector(online),
$offline = d.querySelector(offline);


    window.addEventListener("offline", (e)=>{
offLineMessage();
})

window.addEventListener("online", (e)=>{
    onLineMessage();
    })


const offLineMessage = ()=>{
    console.log("sin conexion");
    $online.classList.add("divhidden");
    $offline.classList.remove("divhidden");
    setTimeout(() => {
        $offline.classList.add("divhidden");
    }, 3000);

 }
const onLineMessage  = ()=>{
    console.log("en linea");
    $offline.classList.add("divhidden");
    $online.classList.remove("divhidden");
    setTimeout(() => {
        $online.classList.add("divhidden");
    }, 3000);
} 



/*     if(navigator.onLine) {

        console.log("El navergdor esta online");
        // el navegador está conectado a la red
    } else {
        console.log("El navergdor esta desconectado");
        // el navegador NO está conectado a la red
    }

 */


};
