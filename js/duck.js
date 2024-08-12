document.addEventListener("DOMContentLoaded", function() {
    
    // 초기 설정
    const images = document.querySelectorAll("#index main img");
    let i = 2;
    let interval = 2000;
    let fadeDuration = 1000;
    
    // 초기 설정
    images.forEach(img => {
        img.style.opacity = 0;
        //images[i].style.opacity = 1;
    });
    

    function fade() {
        i--; // [2,1,0]
        if (i < 0) {
            i = images.length - 1;
        }
        // Fade out the current image
        fadeOut(images[i]);
        // Fade in the next image
        fadeIn(images[i === images.length - 1 ? 0 : i + 1]);
    }

    function fadeIn(element) {
        let opacity = 0;
        element.style.opacity = opacity;
        element.style.display = 'block';
        let start = null;
        function step(timestamp) {
            if (!start) start = timestamp;
            let progress = timestamp - start;
            opacity = Math.min(progress / fadeDuration, 1);
            element.style.opacity = opacity;
            if (opacity < 1) {
                window.requestAnimationFrame(step);
            }
        }
        window.requestAnimationFrame(step);
    }

    function fadeOut(element) {
        let opacity = 1;
        element.style.opacity = opacity;
        let start = null;
        function step(timestamp) {
            if (!start) start = timestamp;
            let progress = timestamp - start;
            opacity = Math.max(1 - progress / fadeDuration, 0);
            element.style.opacity = opacity;
            if (opacity > 0) {
                window.requestAnimationFrame(step);
            } else {
                element.style.display = 'none';
            }
        }
        window.requestAnimationFrame(step);
    }

    // 슬라이드 시작
    setInterval(fade, interval);
});
