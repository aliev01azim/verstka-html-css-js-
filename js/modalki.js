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
    const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';
    for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = lockPaddingValue;
    }
    body.style.paddingRight = lockPaddingValue;
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

// raschet2

let minus = document.querySelector('.mi1');
let plus = document.querySelector('.pl1');
let otmena = document.querySelector('.xxx1');


plus.onclick = () => {
    document.querySelector('.bmv1').innerHTML = Number(document.querySelector('.bmv1').innerHTML) + 13400
    document.querySelector('.auf1').value = Number(document.querySelector('.auf1').value) + 1;

}
minus.onclick = () => {
    document.querySelector('.bmv1').innerHTML = Number(document.querySelector('.bmv1').innerHTML) - 13400;
    document.querySelector('.auf1').value = Number(document.querySelector('.auf1').value) - 1;
    if (document.querySelector('.auf1').value <= 0) {
        document.querySelector('.el1').style.display = 'none';
    }
}
otmena.onclick = () => {
        document.querySelector('.el1').style.display = 'none';
    }
    // aaa
let minus2 = document.querySelector('.mi2');
let plus2 = document.querySelector('.pl2');
let otmena2 = document.querySelector('.xxx2');


plus2.onclick = () => {
    document.querySelector('.bmv2').innerHTML = Number(document.querySelector('.bmv2').innerHTML) + 9600
    document.querySelector('.auf2').value = Number(document.querySelector('.auf2').value) + 1;
}
minus2.onclick = () => {
    document.querySelector('.bmv2').innerHTML = Number(document.querySelector('.bmv2').innerHTML) - 9600;
    document.querySelector('.auf2').value = Number(document.querySelector('.auf2').value) - 1;
    if (document.querySelector('.auf2').value <= 0) {
        document.querySelector('.el2').style.display = 'none';
    }
}
otmena2.onclick = () => {
        document.querySelector('.el2').style.display = 'none';
    }
    // aaa

let minus3 = document.querySelector('.mi3');
let plus3 = document.querySelector('.pl3');
let otmena3 = document.querySelector('.xxx3');


plus3.onclick = () => {
    document.querySelector('.bmv3').innerHTML = Number(document.querySelector('.bmv3').innerHTML) + 13826
    document.querySelector('.auf3').value = Number(document.querySelector('.auf3').value) + 1;
}
minus3.onclick = () => {
    document.querySelector('.bmv3').innerHTML = Number(document.querySelector('.bmv3').innerHTML) - 13826;
    document.querySelector('.auf3').value = Number(document.querySelector('.auf3').value) - 1;
    if (document.querySelector('.auf3').value <= 0) {
        document.querySelector('.el3').style.display = 'none';
    }
}
otmena3.onclick = () => {
        document.querySelector('.el3').style.display = 'none';
    }
    // aaa

let minus4 = document.querySelector('.mi4');
let plus4 = document.querySelector('.pl4');
let otmena4 = document.querySelector('.xxx4');


plus4.onclick = () => {
    document.querySelector('.bmv4').innerHTML = Number(document.querySelector('.bmv4').innerHTML) + 3438
    document.querySelector('.auf4').value = Number(document.querySelector('.auf4').value) + 1;
}
minus4.onclick = () => {
    document.querySelector('.bmv4').innerHTML = Number(document.querySelector('.bmv4').innerHTML) - 3438;
    document.querySelector('.auf4').value = Number(document.querySelector('.auf4').value) - 1;
    if (document.querySelector('.auf4').value <= 0) {
        document.querySelector('.el4').style.display = 'none';
    }
}
otmena4.onclick = () => {
        document.querySelector('.el4').style.display = 'none';
    }
    // aaa

let minus5 = document.querySelector('.mi5');
let plus5 = document.querySelector('.pl5');
let otmena5 = document.querySelector('.xxx5');


plus5.onclick = () => {
    document.querySelector('.bmv5').innerHTML = Number(document.querySelector('.bmv5').innerHTML) + 48612
    document.querySelector('.auf5').value = Number(document.querySelector('.auf5').value) + 1;
}
minus5.onclick = () => {
    document.querySelector('.bmv5').innerHTML = Number(document.querySelector('.bmv5').innerHTML) - 48612;
    document.querySelector('.auf5').value = Number(document.querySelector('.auf5').value) - 1;
    if (document.querySelector('.auf5').value <= 0) {
        document.querySelector('.el5').style.display = 'none';
    }
}
otmena5.onclick = () => {
        document.querySelector('.el5').style.display = 'none';
    }
    // aaa

let minus6 = document.querySelector('.mi6');
let plus6 = document.querySelector('.pl6');
let otmena6 = document.querySelector('.xxx6');


plus6.onclick = () => {
    document.querySelector('.bmv6').innerHTML = Number(document.querySelector('.bmv6').innerHTML) + 6900
    document.querySelector('.auf6').value = Number(document.querySelector('.auf6').value) + 1;
}
minus6.onclick = () => {
    document.querySelector('.bmv6').innerHTML = Number(document.querySelector('.bmv6').innerHTML) - 6900;
    document.querySelector('.auf6').value = Number(document.querySelector('.auf6').value) - 1;
    if (document.querySelector('.auf6').value <= 0) {
        document.querySelector('.el6').style.display = 'none';
    }
}
otmena6.onclick = () => {
    document.querySelector('.el6').style.display = 'none';
}