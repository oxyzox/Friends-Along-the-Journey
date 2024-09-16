document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('main-content');

    // Preloader functionality
    setTimeout(function () {
        preloader.classList.add('fade-out');  
        mainContent.style.opacity = 1;        
    }, 3000);  

  
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const sliderItems = document.querySelectorAll('.slider-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

   
    function updateSliderPosition() {
        const width = sliderItems[0].clientWidth;
        sliderWrapper.style.transform = `translateX(-${currentIndex * width}px)`;

        
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === sliderItems.length - 1;
    }

   
    nextBtn.addEventListener('click', () => {
        if (currentIndex < sliderItems.length - 1) {
            currentIndex++;
            updateSliderPosition();
        }
    });

  
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSliderPosition();
        }
    });

  
    updateSliderPosition();
});


const music = document.getElementById('background-music');
const musicControl = document.getElementById('toggle-music');


musicControl.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        musicControl.classList.remove('fa-volume-mute');
        musicControl.classList.add('fa-volume-up');
    } else {
        music.pause();
        musicControl.classList.remove('fa-volume-up');
        musicControl.classList.add('fa-volume-mute');
    }
});
