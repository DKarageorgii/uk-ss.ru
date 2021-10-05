$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    autoplay:true,
    navText: ["<img src='img2/icon/arrow-left.svg'>","<img src='img2/icon/arrow-right.svg'>"],
    navContainer: '#v-nav',
    dotsContainer: '#v-navdot',
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
  })
});