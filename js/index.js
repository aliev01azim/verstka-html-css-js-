var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}



var slideIndexx = 1;
showSlidess(slideIndexx);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlidee() {
    showSlidess(slideIndexx += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlidee() {
    showSlidess(slideIndexx -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlidee(n) {
    showSlidess(slideIndexx = n);
}

/* Основная функция слайдера */
function showSlidess(n) {
    var i;
    var slidess = document.getElementsByClassName("itemm");
    var dotss = document.getElementsByClassName("slider-dots_itemm");
    if (n > slidess.length) {
      slideIndexx = 1
    }
    if (n < 1) {
        slideIndexx = slidess.length
    }
    for (i = 0; i < slidess.length; i++) {
        slidess[i].style.display = "none";
    }
    for (i = 0; i < dotss.length; i++) {
        dotss[i].className = dotss[i].className.replace(" active", "");
    }
    slidess[slideIndexx - 1].style.display = "block";
    dotss[slideIndexx - 1].className += " active";
}



// фывфывфывфыв



let headerH=document.querySelector('header').clientHeight;


var nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
  var scroll = window.pageYOffset || document.documentElement.scrollTop;
    if(scroll>headerH){
        nav.style.backgroundColor= "white";
        nav.style.boxShadow= '0px 3px 16px 0px rgba(0, 0, 0, 0.1)';
        document.querySelectorAll('.nav-button .line').forEach(b=>{
            b.style.background='grey'
        })
        document.querySelectorAll('nav span').forEach(a=>{
            a.style.color='grey';
            
        })
        document.querySelector('.logo').setAttribute('src',"img/ava.jpg");
        document.querySelectorAll('.spans').forEach(a=>{
            a.style.backgroundColor='black'
        })
    }else{
        document.querySelectorAll('nav span').forEach(a=>{
            a.style.color='rgba(255,255,255,0.75)';
        })
        nav.style.boxShadow= "none";
        nav.style.backgroundColor= "rgba(0,0,0,0.25)";
        document.querySelectorAll('.nav-button .line').forEach(b=>{
            b.style.background='white'
        })
        document.querySelector('.logo').setAttribute('src',"img/avaa.png");
        document.querySelectorAll('.spans').forEach(a=>{
            a.style.backgroundColor='white'

        })

    }
});





// asdasdasd/
$(document).ready(function() {
    $("#button").click(function() {
      $("#triangle-down, #triangle-up").addClass("usenand");
      $("#triangle-up, #triangle-down").delay(1500).fadeOut();
      $("#title").fadeOut(500);
      $("#button").addClass("toMenu");
      $("#button").fadeOut(500);
    });
  });
//   asdadads

var timelineOpen = new mojs.Timeline({ speed: 1.5 });
var timelineClose = new mojs.Timeline({ speed: 2 });

var _strokeWidth;
var RADIUS = 15;
var hamburger = document.querySelector("#hamburger-open");

var spans = document.getElementsByClassName("spans");
var spanOne = document.querySelector("#spanOne");
var spanTwo = document.querySelector("#spanTwo");
var spanThree = document.querySelector("#spanThree");

var modalMenu = document.querySelector(".modal-menu");

var burst1 = new mojs.Burst({
  parent: hamburger,
  x: "50%",
  y: "50%",
  angle: { 0: 90 },
  radius: { 30: 45 },
  count: 3,
  children: {
    shape: "circle",
    radius: RADIUS,
    scale: { 1: 0 },
    fill: ["#ff4338", "#00b3e3", "#3cd52e"],
    duration: 2000,
    easing: "quad.out"
  }
});

var burst2 = new mojs.Burst({
  parent: hamburger,
  x: "50%",
  y: "50%",
  angle: { 0: 90 },
  radius: { 30: 45 },
  count: 3,
  children: {
    shape: "circle",
    radius: RADIUS,
    scale: { 0: 1 },
    strokeWidth: { 1: 3 },
    opacity: { 1: 0 },
    fill: "transparent",
    stroke: ["#ff4338", "#00b3e3", "#3cd52e"],
    duration: 2000,
    easing: "quad.out"
  }
});

// OPEN
var openBackground = new mojs.Shape({
  fill: "#111820",
  scale: { 0: 8.5 },
  radius: 200,
  delay: 200,
  easing: "cubic.out",
  backwardEasing: "ease.out",
  duration: 2000
});

burst1.el.style.zIndex = 2;

// check if the hamburger's been crossed
let cross = spanOne.classList.contains("white");

//timeline with burst and background open
timelineOpen.add(burst1, burst2, openBackground);
//timeline with background close
timelineClose.add(openBackground);

//click on the hamburger
hamburger.addEventListener("click", function(e) {
  // check if the menu is a cross
  var cross = spanOne.classList.contains("white");

  modalMenu.classList.toggle("show");

  if (cross) {
    timelineClose.playBackward();
    for (var i = 0; i < spans.length; i++) {
      spans[i].classList.remove("white");
    }
    spanOne.classList.remove("spanOneRotate");
    spanTwo.classList.remove("spanTwoRotate");
    spanThree.classList.remove("spanThreeHide");
  } else {
    timelineOpen.play();

    for (var i = 0; i < spans.length; i++) {
      spans[i].classList.add("white");
    }

    spanOne.classList.add("spanOneRotate");
    spanTwo.classList.add("spanTwoRotate");
    spanThree.classList.add("spanThreeHide");
  }
});


// ФЫфвфывфывфывфыв

$(window).scroll(function() {
  var scroll2 = $(window).scrollTop();
  $(".aas").css({
    transform: 'scale('+(100 + scroll2/10)/100+')'
  })
})


document.querySelector('.ddsadasadsda').onclick=()=>{
    document.querySelector('body').classList.toggle('hidd');
}

document.querySelector('.otkr').onclick = ()=>{
  document.querySelectorAll('.modalmenu').forEach(a=>{
    a.classList.toggle('otkr2')}
    );
  if(document.querySelector('.modalmenu').classList.contains('otkr2')){
  document.querySelector('.otkr').style.cursor='grabbing';
  }else{
    document.querySelector('.otkr').style.cursor='grab';
  }
};
// asdsadadads video

