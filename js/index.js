const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header');


            document.querySelectorAll('.qwq').forEach(a => {
                a.style.cursor='pointer'
            })



hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});


document.addEventListener('scroll', () => {
    if (document.documentElement.clientWidth > 1200) {
        var scroll_position = window.scrollY;
        if (scroll_position > 5) {
            header.style.opacity = 0;
            header.style.transition = '0.7s';
        } else {
            header.style.opacity = 1;
        }
    } else {
        if (window.scrollY > 5) {
            document.querySelector('.header .brand h1').style.opacity = 0;
            document.querySelector('.header .brand h1').style.transition = '0.7s';
        } else {
            document.querySelector('.header .brand h1').style.opacity = 1;
        }
    }
});





// raschet

var elem = document.querySelector('.calc-range');
var init = new Powerange(elem, { min: 0, max: 36, start: 12, step: 1 });
var changeInput = document.querySelector('.calc-range');
var kos = Number(document.querySelector('.kos').getAttribute('data-money'))

changeInput.onchange = function() {

    document.querySelector('.kolvoo').innerHTML = changeInput.value;
    var itogo = document.querySelector('.itogo')
    itogo.innerHTML = Math.floor(changeInput.value * 83.25)

};

document.querySelector('.kos').onclick = function() {
    this.classList.toggle('asd');
    if (this.classList.contains('asd')) {
        document.querySelector('.itogo').innerHTML = Number(document.querySelector('.itogo').innerHTML) + 1500
    } else {
        document.querySelector('.itogo').innerHTML = Number(document.querySelector('.itogo').innerHTML) - 1500
    }
}
document.querySelector('.minus').onclick = () => {
    document.querySelector('.itogo').innerHTML = Number(document.querySelector('.itogo').innerHTML) - 999;
    document.querySelector('.plusminus').value = Number(document.querySelector('.plusminus').value) - 1;
    if (document.querySelector('.plusminus').value < 0) {
        document.querySelector('.plusminus').value = 0;
        document.querySelector('.itogo').innerHTML = 0
    }
}
document.querySelector('.plus').onclick = () => {
    document.querySelector('.itogo').innerHTML = Number(document.querySelector('.itogo').innerHTML) + 999;
    document.querySelector('.plusminus').value = Number(document.querySelector('.plusminus').value) + 1;
}
if (Number(document.querySelector('.itogo').innerHTML) < 0) {
    document.querySelector('.itogo').innerHTML == '0'
}
// swiper slider

var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    effect: 'fade',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


// popups



// krugi

document.addEventListener('mousemove', parallax);

function parallax(e) {
    this.querySelectorAll('.krug').forEach(krug => {
        const speed = krug.getAttribute('data-speed')
        const x = (window.innerWidth - e.pageX * speed) / 100
        const y = (window.innerHeight - e.pageY * speed) / 100
        krug.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}

document.addEventListener('mousemove', parallaxx);

function parallaxx(e) {
    this.querySelectorAll('.krugg').forEach(krug => {
        const speed = krug.getAttribute('data-speed')
        const x = (window.innerWidth - e.pageX * speed) / 100
        const y = (window.innerHeight - e.pageY * speed) / 100
        krug.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}