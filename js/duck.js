document.addEventListener("DOMContentLoaded", function() {
    
    // 초기 설정
    const images = document.querySelectorAll("#index main img");
    let z= 2;
    const fade = () => {
        images.forEach( ( i , j ) => {
            i.style.transition = "opacity 1s";
            if(j != 0 ) i.style.opacity = 0;
        });
        if( z > 0 ) {
            images[z].style.opacity = 1;
            z--;
        }
        else  {
             images.forEach(  i => {
                i.style.opacity = 0;
                images[0].style.opacity = 1;
                z = 2;
             });
        }
    }

    // 슬라이드 시작
    setInterval(fade, 2000);
});
