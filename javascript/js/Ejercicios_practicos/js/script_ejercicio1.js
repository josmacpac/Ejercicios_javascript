import hamburgerMenu from "./hamburger.js";
import {digitalClock,alarm} from "./relojDigital.js";
import{moveBall, shortcut} from "./teclado.js";
import countDown from "./cuentaRegresiva.js";
import scrollUp from "./botonUp.js";
import lightTheme from "./temaClaro.js";
import responsiveMedia from "./objeto_resposive.js"
import responsiveTester from "./responsiveTester.js"
import detectarDispositivo from "./detectarDispositivo.js";
import userNetwork from "./detectarConexion.js";
import detectarWebCam from "./webCam.js";
import getGeolocation from "./geolocalizacion.js";
import finder from "./filtro_busqueda.js";
import slider from "./slider.js";
import scrollSpy from "./scroll_spy.js";
import smartVideo from "./video_inteligente.js";


const d= document;

d.addEventListener("DOMContentLoaded", e=>{
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("#reproductor","./assets/sonido.mp3", "#activar-alarma", "#desactivar-alarma");
    countDown("span#days", "span#hours", "span#minutes", "span#seconds", "#nombreEvento", "#botonFecha","#date", "#contenedorFecha", "#contenedorEvento")
    scrollUp(".scroll-top-btn");
    responsiveMedia("youtube", "(min-width:1024px)", `<a class="enlace" href="https://youtu.be/6IwUl-4pAzc" target="_blank" rel="noopener"><img src="./img/curso-javascript-moderno-principiantes.jpg" alt="">Ver Video </a>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    responsiveMedia("gmaps", "(min-width:1024px)", `<a class="enlace" href="https://goo.gl/maps/4iQ49g4EjSBzDsFS8" target="_blank" rel="noopener"><img src="./img/mapa_angel.png" alt="">Ver Mapa </a>`, `<iframe class="mapa-escritorio" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.3308153496607!2d-99.1686936921559!3d19.42702059672188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses!2smx!4v1628735463088!5m2!1ses!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`);
    responsiveTester("responsive-tester");
    detectarDispositivo("user-device");
    detectarWebCam("webcam");
    getGeolocation("geolocation");
    finder(".card-filter", ".card");
    slider();
    scrollSpy();
    smartVideo();
})

d.addEventListener("keydown", e=>{
    shortcut(e);
    moveBall(e, ".ball", ".stage");
});

lightTheme(".darkMode-btn", "lightTheme");
userNetwork(".divonline", ".divoffline");

   





