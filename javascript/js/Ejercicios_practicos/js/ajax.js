//OBJETO XMLHttpRequest

(()=>{

    //instanciar el objeto xmlhttprequest
const xhr = new XMLHttpRequest(),
$xhr = document.getElementById("xhr"),
$fragment = document.createDocumentFragment();


//manejo de los eventos 
xhr.addEventListener("readystatechange", e=>{
    if(xhr.readyState !==4)return;

    //console.log(xhr);
    if(xhr.status >= 200 && xhr.status < 300){
       // console.log("exito");
        //console.log(xhr.responseText);
        let json = JSON.parse(xhr.responseText);
       // console.log(json);

        json.forEach(el=>{
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name}--${el.email}-- ${el.phone}`;
            $fragment.appendChild($li);
        })

        $xhr.appendChild($fragment); 
    }else{
       // console.log("error");
        let message = xhr.statusText||"ocurrio un error";
        $xhr.innerHTML = `Error ${xhr.status}:${message};`
    }
  //  console.log("este mensaje cargadra de cualquier forma");
    

});
//abrir la peticion
//xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
xhr.open("GET", "./assets/usuarios.json"); //cargar api de forma local
//enviar la peticion
xhr.send();
})();

//API FETCH

(()=>{
    
    const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users")
    
    .then((res)=> res.ok?res.json(): Promise.reject(res)) //transformar a json
    .then(json => {
        //console.log(json);
        //$fetch.innerHTML = json;
        json.forEach(el=>{
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name}--${el.email}-- ${el.phone}`;
            $fragment.appendChild($li);
        })

        $fetch.appendChild($fragment); 
    })
    .catch((err) =>{
     //   console.log(err);
        let message = err.statusText || "ocurrio un error";
        $fetch.innerHTML = `Error ${err.status}: ${message}`;
    })
    .finally(()=>
  //  console.log(
        "este codigo se ejectura independientemente")
    
})();


    //API FETCH + ASYNC.AWAIT
(()=>{
    const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();

    async function getData(){
        try {
          let res= await fetch("https://jsonplaceholder.typicode.com/users") ; 
          json= await res.json();

          //console.log(res, json);

          if(!res.ok)throw {status:res.status,statusText:res.statusText} 
    
          json.forEach((el)=>{
              const $li = document.createElement("li");
              $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
              $fragment.appendChild($li);
          });

          $fetchAsync.appendChild($fragment);
        } catch (err) {
           // console.log(err);
            let message = err.statusText|| "Ocurrio un error";
            $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;

        } finally{
           // console.log("se ejecuta independientemente");
        }
    }
    
    getData();
  





})();


//AXIOS

(()=>{

    const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();

    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(res=>{
//console.log(res);
        let json=res.data;

        json.forEach(el=>{
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name}--${el.email}-- ${el.phone}`;
            $fragment.appendChild($li);
        });
        $axios.appendChild($fragment);
    })
    .catch(err=>{
      //  console.log(err.response);
        let message = err.response.statusText || "ocurrio un error";
        $axios.innerHTML = `Error ${err.response.status}: ${message}`;
    })
    .finally(()=>{
     //   console.log("Esto se ejecutara indeoendientemente del resultado de Axios");
    });



})();
//AXIOS + ASYNC-AWAIT

(() => {
    const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();

    async function getData(){
        try {
            let res= await axios.get("https://jsonplaceholder.typicode.com/users"), 
            json= await res.data;
  
           // console.log(res, json);
           
            json.forEach(el=>{
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name}--${el.email}-- ${el.phone}`;
                $fragment.appendChild($li);
            });
            $axiosAsync.appendChild($fragment);
        } catch (err) {
            console.log(err.response);
        let message = err.response.statusText || "ocurrio un error";
        $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
        }finally{
console.log("Se ejecuta en el axios Async finally");
        }
    }
    getData();
})();

