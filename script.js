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

var slideIndex1 = 0;
  carousel();
  
  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex1++;
    if (slideIndex1 > x.length) {slideIndex1 = 1}
    x[slideIndex1-1].style.display = "block";
    setTimeout(carousel, 1000); // Change image every 2 seconds
  }