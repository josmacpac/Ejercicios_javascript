const d = document,
w = window;


export default function scrollUp(btn) {
    const $scrollBtn = d.querySelector(btn);
    
    
    w.addEventListener("scroll", (e) =>{
        let pageScroll = w.pageYOffset;
      //  console.log(pageScroll);
        if (pageScroll > 576) {
            $scrollBtn.classList.remove("hidden");
        } else{
            $scrollBtn.classList.add("hidden");
        }

    });
    d.addEventListener("click", (e)=>{
        if (e.target.matches(btn)) {
            w.scrollTo(0,0);
                
        }
    });


}