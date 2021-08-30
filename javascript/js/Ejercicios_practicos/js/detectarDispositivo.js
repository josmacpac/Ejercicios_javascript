const d = document,
n= navigator,
ua= n.userAgent;

export default function detectarDispositivo(id) {
    const $id = d.getElementById(id),
    isMobile = { //evaluar si se encuentra la palabra iphone o android en el user agent
        android:()=> ua.match(/android/i), //buscar expresion regular, la i es para que no tome en cuenta minusculas o mayusculas
        ios:()=> ua.match(/iphone|ipad|ipod/i),
        windows: ()=> ua.match(/windows phone/i),
        any: function(){
            return this.android()|| this.ios()||this.windows();
        },
    },
    isDesktop = {
        linux:()=> ua.match(/linux/i),
        mac:()=> ua.match(/mac os/i),
        windows: ()=>ua.match(/windows nt/i),
        any: function(){
            return this.linux()|| this.mac()|| this.windows();
        },
    },
    isBrowser = {
        chrome: ()=> ua.match(/chrome/i),
        safari: ()=> ua.match(/safari/i),
        firefox: ()=> ua.match(/firefox/i),
        opera: ()=> ua.match(/opera/i),
        ie: ()=> ua.match(/ie/i),
        edge: ()=> ua.match(/edge/i),
        any: function(){
           return( 
            this.ie()||
            this.edge()||
            this.chrome()||
            this.safari()||
            this.firefox()||
            this.opera()
            );
        },
    };
   /*  console.log(isMobile.any());
    console.log(isBrowser.any()); */
$id.innerHTML = `
<ul>
<li>User Agent: <b> ${ua} </b></li>
<li>Plataforma: <b> ${isMobile.any()?isMobile.any():isDesktop.any()} </b></li>
<li>Navegador: <b> ${isBrowser.any()} </b></li>
</ul>
`;  

/* Contenido exclusivo */

if(isBrowser.chrome()){
    $id.innerHTML +=`<p><mark> Este contenido solo se ve en Chrome</Mark></p>`;
    }
    if (isBrowser.firefox()) {
        $id.innerHTML +=`<p><mark> Este contenido solo se ve en firefox</Mark></p>`;
    }
    
  /* Redirecciones */  
  if(isMobile.android()){
      window.location.href = "https:jonmircha.com"
  }
}