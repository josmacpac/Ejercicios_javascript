const d = document,
w = window;

export default function responsiveMedia(id, mediaQuery, mobileContent, desktopContent) {
    let breakpoint = w.matchMedia(mediaQuery);
    
    const responsive = (e)=>{
        if(e.matches){
            d.getElementById(id).innerHTML = desktopContent;
        }else{
            d.getElementById(id).innerHTML = mobileContent;
        }
       // console.log(e.matches); 
    }
    breakpoint.addListener(responsive);
    responsive(breakpoint); 
   // console.log(breakpoint);
} 