const d = document,
w = window,
n = navigator;

export default function detectarWebCam(id){
const $webcam =d.getElementById(id);

if (n.mediaDevices.getUserMedia) {
    n.mediaDevices
    .getUserMedia({video:true, audio:false})
    .then(stream =>{
        console.log(stream);
        $webcam.srcObject = stream;
        $webcam.play();
    })
    .catch((err)=>{
        $webcam.insertAdjacentHTML("afterend", `<p><mark> ${err}</mark></p>`);
        console.log(`Sucdio el siguiente error : ${err}`)});
}

}