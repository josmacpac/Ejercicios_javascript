console.log(document.documentElement); // ver HTML
console.log(document.links);
console.log(document.images);



//Nodos

 console.log(document.getElementsByTagName("li"));
 console.log(document.getElementsByClassName("card"));
 console.log(document.getElementsByName("nombre"));
 console.log(document.getElementById("menu"));

 console.log(document.querySelector("#menu"));
 console.log(document.querySelectorAll("a"));
 console.log(document.querySelectorAll("a").length);
 document.querySelectorAll("a").forEach(el=>console.log(el));
 console.log(document.querySelectorAll(".card")[2]);

 document.documentElement.setAttribute("lang", "es-MX");
 console.log(document.documentElement.lang);

 const $linkDOM = document.querySelector(".link-dom");

  $linkDOM.setAttribute("rel", "noopener"); //definir un atributo
  $linkDOM.setAttribute("target", "_blank");
  $linkDOM.setAttribute("href", "http://youtube.com");
  console.log($linkDOM.hasAttribute("rel")); //verificar si existe el atributo
  $linkDOM.removeAttribute("rel");  //eliminar un atributo
  console.log($linkDOM.hasAttribute("rel"));

  //DATA attributes

  

  // DOM estilos y variables

  console.log($linkDOM.style);
  console.log($linkDOM.getAttribute("style"));
  console.log($linkDOM.style.backgroundColor);
  console.log($linkDOM.style.color);
  console.log(window.getComputedStyle($linkDOM));
  console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

  $linkDOM.style.setProperty("text-decoration", "none");
  $linkDOM.style.setProperty("display", "block");
  $linkDOM.style.width = "50%";
  $linkDOM.style.textAlign = "center";
  $linkDOM.style.marginLeft = "auto";
  $linkDOM.style.marginRight = "auto";
  $linkDOM.style.borderRadius = ".5rem";
  $linkDOM.style.backgroundColor = "#123678";
  $linkDOM.style.Color = "#fff";

  

  //Variabes CSS -- Custom Properties CSS

const $html = document.documentElement,
$body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
 varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

 console.log(varDarkColor,varYellowColor);

 //$body.style.backgroundColor = varDarkColor;
 $body.style.color = varYellowColor;

 $html.style.setProperty("--dark-color", "#222");
 varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

 $body.style.setProperty("background-color", varDarkColor)

 const $card = document.querySelector(".card");

 console.log($card);
 console.log($card.className);
 console.log($card.classList);
 console.log($card.classList.contains("rotate-45"));
 $card.classList.add("rotate-45");
 console.log($card.classList.contains("rotate-45"));
 $card.classList.remove("rotate-45");

  /* console.log($card.classList.contains("rotate-45"));
  $card.classList.toggle("rotate-45"); //lo agrega si es falso y lo quita si es true
 */
/* $card.classList.replace("rotate-45", "rotate-135");
console.log($card.classList.contains("rotate-135"));
$card.classList.add("opacity-80", "sepia"); */


/* const $cards = document.querySelector(".cards");
console.log($cards);
console.log($cards.children);
console.log($cards.children[3]);
console.log($cards.parentElement);
console.log($cards.firstElementChild);
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
console.log($cards.children[3].closest("section"));

 */

//68 - DOM: Creado elementos y fragmentos

  /* const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $figcaptionText = document.createTextNode("Animals"),
  $cards = document.querySelector(".cards");

  $img.setAttribute("src","https://placeimg.com/200/200/animals");
  $img.setAttribute("alt", "Animals");
  $figcaption.appendChild($figcaptionText);
  $figure.appendChild($img);
  $figure.appendChild($figcaption);$figure.appendChild($figcaption);
  $figure.classList.add(".card");
  $cards.appendChild($figure);


  $figure2.innerHTML = `
  <img src="htmls://placeimg.com/200/200/people" alt="People"><figcaption>People</figcaption>`;

  $figure2.classList.add("card");
  $cards.appendChild($figure2);

  // 69 telmplates html */

  

// 70 modificando elementos (old style)

/* const $cards = document.querySelector(".cards"),
$newCard = document.createElement("figure");

$newCard.innerHTML = `
<img src="http://placeimg.com/200/200/any" alt="Any">
<figcaption>Any</figcaption>
`;
$newCard.classList.add("card"); */

 //$cards.replaceChild($newCard, $cards.children[2]);  

//$cards.insertBefore($newCard, $cards.firstElementChild);

// 71 modificando elementos

/* const $cards = document.querySelector(".cards"),
$newCard = document.createElement("figure");

let $contentCard = `
<img src="http://placeimg.com/200/200/any" alt="Any">
<figcaption>Any</figcaption>
`;
$newCard.classList.add("card");

$newCard.insertAdjacentHTML("beforeend", $contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");   
$cards.insertAdjacentElement("afterbegin", $newCard);
 */

//72 dOM : MANEJADORES DE EVENTOS (EVENT HANDLER)

/* function holaMundo(){
  alert("Hola Mundo");
  console.log(event);
}

function saludar(nombre= "desconocido") {
  alert(`Hola ${nombre}`)
};

const $eventoSemantico = document.getElementById("evento-semantico");
const $eventoMultiple = document.getElementById("evento-multiple");
const $eventoRemover = document.getElementById("evento-remover");

$eventoSemantico.onclick = holaMundo;
$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", () => {
  saludar();
  saludar("Jose");
});

const removerDobleClick = (e) => {
  alert(`Removiendo el evento del tipo ${e.type}`);
  console.log(e);
  $eventoRemover.removeEventListener("dblclick",removerDobleClick);
  $eventoRemover.disabled = true;
};
$eventoRemover.addEventListener("dblclick", removerDobleClick )
 */

//74 DOM flujo de eventos (burbuja y captura)

const $divsEventos = document.querySelectorAll(".eventos-flujo div");
$linkEventos = document.querySelector(".eventos-flujo a");
function flujoEventos(e) {
  console.log(`Hola`);
event.stopPropagation()
}

console.log($divsEventos);

$divsEventos.forEach(div =>{
//Fase de burbuja
  //div.addEventListener("click",flujoEventos);
  div.addEventListener("click",flujoEventos, false);// del mas interno al mas externo
  //fase de captura
/*   div.addEventListener("click",flujoEventos,true);// del mas externo al mas interno */

})

/* $linkEventos.addEventListener("click", e=>{
  alert("Hola como estas ");
  e.preventDefault();  //prevenir la accion por defecto del navegador
})
 */ 
/* window.addEventListener("resize",(e)=>
{
console.clear();
console.log(window.innerWidth)
console.log(window.innerHeight)
console.log(window.outerWidth)
console.log(window.outerHeight)

console.log(e)
});

window.addEventListener("scroll",e =>{
console.clear();
  console.log(window.scrollX);
console.log(window.scrollY);
})

window.addEventListener("load", e=>{
  console.clear();
  console.log("Evento Load");
  console.log(window.scrollX);
  console.log(window.scrollY);
  console.log(e);
})

 */

//78 - BOM: Metodos

const $btnabrir = document.getElementById("abrir-ventana"),
  $btnCerrr = document.getElementById("cerrar-ventana"),
  $btnImprimir = document.getElementById("imprimir");

let ventana;

  $btnabrir.addEventListener("click", e =>{
ventana = window.open("http://jonmircha.com");
  });
  $btnCerrr.addEventListener("click", e =>{
ventana.close();
  });
  $btnImprimir.addEventListener("click", e =>{
window.print();
  });















