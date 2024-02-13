function menu() {
    const menuTrigger = document.querySelector('#mobilenavtrigger');
    const mobilenav = document.querySelector('.mobilenav')
    const ham = document.querySelectorAll('.first__ham, .second__ham, .third__ham')


    menuTrigger.addEventListener('click', toggleMenu);

    function toggleMenu() {
        ham.forEach(hams => {
            hams.classList.toggle('open')
        });

        mobilenav.classList.toggle('transparent');
    };
};

menu();

function slider() {
    const slider1 = document.querySelector('.first-slider-btn');
    const slider2 = document.querySelector('.second-slider-btn');
    const slider3 = document.querySelector('.third-slider-btn');
    const slider4 = document.querySelector('.fourth-slider-btn');
    const slide1 = document.querySelector('.slide1');
    const slide2 = document.querySelector('.slide2');
    const slide3 = document.querySelector('.slide3');
    const slide4 = document.querySelector('.slide4');

    
    function reSize() {
        const windowWidth = window.innerWidth;
        const para1 = document.querySelector('.one')
        const para2 = document.querySelector('.two')
        if (windowWidth <= 900) {
            const slide = document.querySelectorAll('.slide2, .slide3, .slide4');
            
            slide.forEach(element => {
                element.classList.add('none')
                element.classList.remove('testimonial-section')
            });
            slider1.classList.add('orange');
            para1.classList.remove('none')
            para2.classList.add('none')
        }
        else if (windowWidth > 900) {
            const slide = document.querySelectorAll('.slide1, .slide2, .slide3, .slide4');
            
            slide.forEach(element => {
                element.classList.remove('none')
                element.classList.add('testimonial-section')
            });
            para1.classList.add('none')
            para2.classList.remove('none')
        }
    } 
    reSize();
    
    window.addEventListener('resize', reSize)

    slider1.addEventListener('click', () => {
        const sliders = document.querySelectorAll('.second-slider-btn, .third-slider-btn, .fourth-slider-btn')
        const slides = document.querySelectorAll('.slide2, .slide3, .slide4')
        
        slider1.classList.add('orange');
        slide1.classList.add('testimonial-section');
        slide1.classList.remove('none');

        sliders.forEach(slider => {
            slider.classList.remove('orange');
        });
        slides.forEach(slide => {
            slide.classList.remove('testimonial-section');
            slide.classList.add('none')
        });

    });

    slider2.addEventListener('click', () => {
        const sliders = document.querySelectorAll('.first-slider-btn, .third-slider-btn, .fourth-slider-btn')
        const slides = document.querySelectorAll('.slide1, .slide3, .slide4')
        
        slider2.classList.add('orange');
        slide2.classList.add('testimonial-section');
        slide2.classList.remove('none');

        sliders.forEach(slider => {
            slider.classList.remove('orange');
        });
        slides.forEach(slide => {
            slide.classList.remove('testimonial-section');
            slide.classList.add('none')

        });

    
    });

    slider3.addEventListener('click', () => {
        const sliders = document.querySelectorAll('.first-slider-btn, .second-slider-btn, .fourth-slider-btn')
        const slides = document.querySelectorAll('.slide1, .slide2, .slide4')
        
        slider3.classList.add('orange');
        slide3.classList.add('testimonial-section');
        slide3.classList.remove('none');

        sliders.forEach(slider => {
            slider.classList.remove('orange');
        });
        slides.forEach(slide => {
            slide.classList.remove('testimonial-section');
            slide.classList.add('none')
        });

    
    });

    slider4.addEventListener('click', () => {
        const sliders = document.querySelectorAll('.first-slider-btn, .second-slider-btn, .third-slider-btn')
        const slides = document.querySelectorAll('.slide1, .slide2, .slide3')
        
        slider4.classList.add('orange');
        slide4.classList.add('testimonial-section');
        slide4.classList.remove('none');

        sliders.forEach(slider => {
            slider.classList.remove('orange');
        });
        slides.forEach(slide => {
            slide.classList.remove('testimonial-section');
            slide.classList.add('none')
        });

    })
}

slider();