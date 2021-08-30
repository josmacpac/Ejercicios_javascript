const d = document;

export default function smartVideo(){
    const $video = d.querySelectorAll("video[data-smart-video]");
    const cb = (entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.play();
            }else{
                entry.target.pause();
            }

            window.addEventListener("visibilitychange", e=> d.visibilityState==="visible"
            ?entry.target.play()
            :entry.target.pause()
            );
        });
    };

    const observer = new IntersectionObserver(cb, {threshold:0.5});

    $video.forEach(el=>observer.observe(el));

//incluir autoplay cuando el cursor este sobre el video

}