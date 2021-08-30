const d= document;
let x = 0,
y= 0;
export function moveBall(e, ball, stage){
const $ball = d.querySelector(ball),
$stage = d.querySelector(stage),
limitsBall = $ball.getBoundingClientRect(),
limitsStage = $stage.getBoundingClientRect();
/* console.log(e.keyCode);
console.log(e.Key);  
console.log(limitsBall, limitsStage);
 */

switch(e.keyCode){
    case 37: //izquierda
    if(limitsBall.left>limitsStage.left){
        e.preventDefault();
        x--;}
      break;
      case 38: // arriba
      if(limitsBall.top>limitsStage.top){
          e.preventDefault();
          y--;}
      break;
          case 39: //derecha
          if(limitsBall.right<limitsStage.right){
              e.preventDefault();
              x++;}
              break;
              case 40: //abajo
              if(limitsBall.bottom<limitsStage.bottom){
                  e.preventDefault();
                  y++;}
         
              break;
              default:
                  break;
                }
                 $ball.style.transform = `translate(${x*10}px, ${y*10}px)`;
                      
}




export function shortcut(e) {
    /* console.log(e.type);
    console.log(e.keyCode);// numero de tecla
    console.log(e.ctrlKey); //comprobar i se presiono tecla Ctrl
        */ 
    if (e.key === "a" && e.altKey) {
        alert("Haz lanzado una alerta con el teclado");
    }
}

