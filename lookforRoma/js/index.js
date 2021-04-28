document.querySelector('.burgr').onclick=()=>{
    document.querySelector('.vsplyv').classList.toggle('oppen')
}



var swiper = new Swiper('.swiper-container', {
    slidesPerView: "auto",
    spaceBetween: 50,
    // init: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    breakpoints: {
        2000:{
            slidesPerView: 10,
        spaceBetween: 40
        },
      991: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      390: {
        slidesPerView: 3,
        spaceBetween: 10,
      }
    }
  });



  //popup


  const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding')
let unlock = true;
const timeout = 1000;
if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener('click', function(e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const currentPopup = document.getElementById(popupName);
            popupOpen(currentPopup);
            e.preventDefault();
        })
    }
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function(e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        })
    }
}


function popupOpen(currentPopup) {
    if (currentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock()
        }
        currentPopup.classList.add('open');
        currentPopup.addEventListener('click', function(e) {
            if (!e.target.closest('.popup_body')) {
                popupClose(e.target.closest('.popup'));
            }
        })
    }
    document.querySelectorAll('.el').forEach(a => {
        a.style.display = 'flex'
    })
}

function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth - 'px';
    for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = lockPaddingValue;
    }
    // body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');
    unlock = false;
    setTimeout(function() {
        unlock = true;
    }, timeout);
}

function bodyUnLock() {
    setTimeout(function() {
        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = '0px';
            }
        }
        body.style.paddingRight = '0px'
        body.classList.remove('lock')
    }, timeout);
    unlock = false;
    setTimeout(function() {
        unlock = true
    }, timeout);
}
document.addEventListener('keydown', function(e) {
    if (e.which === 27) {
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive)
    }
})




// bottom navigation

var btmnav = $('.botnav'),
	scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
 
	if ( scrolled > 100 && scrolled > scrollPrev ) {
		btmnav.addClass('out');
	} else {
		btmnav.removeClass('out');
	}
	scrollPrev = scrolled;
});