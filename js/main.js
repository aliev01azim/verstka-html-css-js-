console.clear();

const html = document.documentElement;
const toggle = document.getElementById("toggle");
const circle = document.getElementById("bg-circle");
const circleWidth = circle.clientWidth;

// Math calcul to get Height, Width, Diagonal and Circle Radius

const getVpdr = () => {
  const vph = Math.pow(html.offsetHeight, 2); // Height
  const vpw = Math.pow(html.offsetWidth, 2); // Width
  const vpd = Math.sqrt(vph + vpw); // Diagonal
  return vpd * 2 / circleWidth; // Circle radius
};

const openNavbar = () => {
  const openTimeline = new TimelineMax();
  openTimeline.to(".navbarr", 0, { display: "flex" });
  openTimeline.to("#bg-circle", 1.5, { scale: getVpdr(), ease: Expo.easeInOut });
  openTimeline.staggerFromTo(".navbarr ul li", 0.5, { y: 25, opacity: 0 }, { y: 0, opacity: 1 }, 0.1, 1);
};

const closeNavbar = () => {
  const closeTimeline = new TimelineMax();
  closeTimeline.staggerFromTo(".navbarr ul li", 0.5, { y: 0, opacity: 1, delay: 0.5 }, { y: 25, opacity: 0 }, -0.1);
  closeTimeline.to("#bg-circle", 1, { scale: 0, ease: Expo.easeInOut, delay: -0.5 });
  closeTimeline.to(".navbarr", 0, { display: "none" });
};

let isOpen = false;

toggle.onclick = function () {
  if (isOpen) {
    this.classList.remove("active");
    closeNavbar();
  } else {
    this.classList.add("active");
    openNavbar();
  }
  isOpen = !isOpen;
};

document.querySelectorAll('.navbarr ul li a').forEach(a=>{
  a.onclick = function () {
  if (isOpen) {
    this.classList.remove("active");
    closeNavbar();
    toggle.classList.remove('active');
  } else {
    this.classList.add("active");
    openNavbar();
    toggle.classList.add('active');
  }
   isOpen = !isOpen;
}})

 

// On windows resize, recalcule circle radius and update

window.onresize = () => {
  if (isOpen) {
    gsap.to("#bg-circle", 1, { scale: getVpdr(), ease: Expo.easeInOut });
  }
};

// Hello.
//
// This is The Scripts used for ___________ Theme
//
//

function main() {

  (function () {
     'use strict';
  
     /* ==============================================
      Testimonial Slider
      =============================================== */ 
  
      $('a.page-scroll').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top - 40
              }, 900);
              return false;
            }
          }
        });
  
      /*====================================
      Show Menu on Book
      ======================================*/
      $(window).bind('scroll', function() {
          var navHeight = $(window).height() - 100;
          if ($(window).scrollTop() > navHeight) {
              $('.navbar-default').addClass('on');
          } else {
              $('.navbar-default').removeClass('on');
          }
      });
  
      $('body').scrollspy({ 
          target: '.navbar-default',
          offset: 80
      })
  
      
  
      /*====================================
      Portfolio Isotope Filter
      ======================================*/
      $(window).load(function() {
          var $container = $('#lightbox');
          $container.isotope({
              filter: '*',
              animationOptions: {
                  duration: 750,
                  easing: 'linear',
                  queue: false
              }
          });
          $('.cat a').click(function() {
              $('.cat .active').removeClass('active');
              $(this).addClass('active');
              var selector = $(this).attr('data-filter');
              $container.isotope({
                  filter: selector,
                  animationOptions: {
                      duration: 750,
                      easing: 'linear',
                      queue: false
                  }
              });
              return false;
          });
  
      });
  
  
  
  }());
  
  
  }
  main();