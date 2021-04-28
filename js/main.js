$(document).ready(function () {
  var $demo = $(".card-menu");
  var numOfSections = $(".card-menu-section").length;

  $(document).on("click", ".card-menu-menu-btn", function () {
    $demo.addClass("menu-active");
  });

  $(document).on("click", ".card-menu-close-menu", function () {
    $demo.removeClass("menu-active");
  });

  $(document).on(
    "click",
    ".card-menu.menu-active .card-menu-section",
    function () {
      var $section = $(this);
      var index = +$section.data("section");

      $(".card-menu-section.active").removeClass("active");
      $(".card-menu-section.inactive").removeClass("inactive");
      $section.addClass("active");
      $demo.removeClass("menu-active");

      for (var i = index + 1; i <= numOfSections; i++) {
        $(".card-menu-section[data-section=" + i + "]").addClass("inactive");
      }
    }
  );
});
const phrases = [
  "Ruslan",
  "Is the Best!",
];
const el = document.querySelector(".text");
const fx = new TextScramble(el);
let counter = 0;

const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 800);
  });
  counter = (counter + 1) % phrases.length;
};

var string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, molestiae! At quam quo tempora, optio excepturi quas minus dolorem vero?";
var str = string.split("");
var ell = document.getElementById('str');
(function animate(){
    str.length > 0 ? ell.innerHTML += str.shift() : clearTimeout(running);
    var running = setTimeout(animate,50) 
})();

next(); 
"use strict"
$(window).on("load", function() {
    function countDown(){
        var today = new Date();
        var eventDate = new Date("September 28,2020 21:00:00");
        var currentTime = today.getTime();
        var eventTime = eventDate.getTime();
        var remTime = eventTime - currentTime;

        var sec = Math.floor(remTime/1000);
        var min = Math.floor(sec/60);
        var hrs = Math.floor(min/60);
        var days = Math.floor(hrs/24);

        hrs %= 24;
        min %= 60;
        sec %= 60;
        
        days = (days<10)  ? "0"+days : lyt;
        hrs = (hrs<10) ?"0"+ hrs : hrs;
        min = (min<10) ?"0"+ min : min;
        sec = (sec<10) ?"0"+ sec : sec;

        var elTimeCounter = $('.time-counter');
        var elDays = $('.days', elTimeCounter);
        var elHours = $('.hours', elTimeCounter);
        var elMinutes = $('.minutes', elTimeCounter);
        var elSeconds = $('.seconds', elTimeCounter);

        $('.num', elDays).html(days);
        $('.num', elHours).html(hrs);
        $('.num', elMinutes).html(min);
        $('.num', elSeconds).html(sec);

        setTimeout(countDown, 1000);
    }
    countDown();
});