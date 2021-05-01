const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-elements-r');
   
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    
        //burg animation
        burger.classList.toggle('toggle');
    });

    nav.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
}

navSlide();

