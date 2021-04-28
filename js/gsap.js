let tl = gsap.timeline({});
tl.from('.header h1', { x: -200, opacity: 0, duration: .5 })
    .from('.firstStroke li', { x: 100, opacity: 0, stagger: 0.15 })
    .from('.secondStroke li', { x: -100, opacity: 0, stagger: 0.15 })
    .from('.main_section .right h1', { x: 300, opacity: 0, duration: 0.7 })
    .from('.main_section .right h3', { x: 300, opacity: 0, duration: 0.7 }, '-=0.6')
    .from('.main_section .right a', { x: 300, opacity: 0, duration: 0.7 }, '-=0.6')

let tl22 = gsap.timeline({
    scrollTrigger: {
        trigger: '.second_section',
        start: 'top bottom'
    }
});

tl22.from('.second_section .krug', { x: 100, opacity: 0, stagger: 0.3 })

let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.thirst_section',
        start: 'top bottom'
    }
});
tl3.from('.thirst_section .raschet', { x: 400, opacity: 0, duration: 1 });
tl3.from('.thirst_section .raschet *', { x: 100, opacity: 0, stagger: .04 });
tl3.from('.thirst_section .main_block', { x: -200, opacity: 0, duration: 1 }, '-=2');
tl3.from('.thirst_section .main_block *', { x: -100, opacity: 0, stagger: 0.1 });

let tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: '.slider_section',
        start: 'top bottom'
    }
});
tl4.from('.slider_section', { y: 300, opacity: 0, duration: 1 });
tl4.from('.slider_section .slide_img', { y: 300, opacity: 0, duration: 1 }, '-=0.6');
tl4.from('.slider_section .slide_content *', { x: -300, opacity: 0, stagger: 0.2 }, );

let tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: '.partners_section',
        start: 'top bottom'
    }
});
tl5.from('.partners_section .block', { x: 100, opacity: 0, stagger: 0.3 });
tl5.from('.partners_section .main_block *', { x: -100, opacity: 0, stagger: 0.3 }, '-=0.6');


let tl6 = gsap.timeline({
    // scrollTrigger: {
    //     trigger: '.partners_section',
    //     start: 'top bottom'
    // }
});
tl6.from('.about_main_section .a_left *', { x: -100, opacity: 0, stagger: 0.3 });

let tl7 = gsap.timeline({
    scrollTrigger: {
        trigger: '.about_second_section .wrapper',
        start: 'top bottom'
    }
});
tl7.from('.about_second_section .a_left2 *', { x: -100, opacity: 0, stagger: 0.3 });
tl7.from('.about_second_section .a_right2 *', { x: 100, opacity: 0, stagger: 0.3 });


let tl8 = gsap.timeline({
    scrollTrigger: {
        trigger: 'section.text',
        start: 'top bottom'
    }
});
tl8.from('section.text .wrapper', { y: 100, opacity: 0, stagger: 0.3 });

let tl9 = gsap.timeline({
    scrollTrigger: {
        trigger: 'section.grid',
        start: 'top bottom'
    }
});
tl9.from('section.grid .glavniy', { x: -100, opacity: 0, duration:0.3 });
tl9.from('section.grid .sub_glavniy .bl', { x: 100, opacity: 0, stagger: 0.3 });
let tl10 = gsap.timeline({
    scrollTrigger: {
        trigger: 'section.serenkiy',
        start: 'top bottom'
    }
});
tl10.from('section.serenkiy .wrapper *', { x: -100, opacity: 0, stagger:0.3 });

let tl11 = gsap.timeline({
    scrollTrigger: {
        trigger: 'section.voprosy',
        start: 'top bottom'
    }
});
tl11.from('section.voprosy .wrapper .vopros_sleva', { x: -100, opacity: 0, duration:0.5 });
tl11.from('section.voprosy .wrapper .last_btn',{x: 100, opacity: 0, duration:0.5 },'-=0.5')
let tlq = gsap.timeline({
    scrollTrigger: {
        trigger: 'section.display',
        start: 'top bottom'
    }
});
tlq.from('section.display .wrapper .ggrid>div', { x: 100, opacity: 0, stagger:0.3 });

let tlw = gsap.timeline({
    scrollTrigger: {
        trigger: 'section.brend_second_section .wrapper',
        start: 'top bottom'
    }
});
tlw.from('section.brend_second_section', { y: 200, opacity: 0, duration:0.6 });


let tle = gsap.timeline({
    scrollTrigger: {
        trigger: 'section.tri .wrapper',
        start: 'top bottom'
    }
});
tle.from('section.tri .space_around>div:nth-child(1)', { x: -100, opacity: 0, duration:0.5 });
tle.from('section.tri .space_around>div:nth-child(2)', { x: 100, opacity: 0, duration:0.5 });
tle.from('section.tri .space_around>div:nth-child(3)', { x: 100, opacity: 0, duration:0.5 });


let tlr = gsap.timeline({
    scrollTrigger: {
        trigger: 'section.dofiga .space_between img',
        start: 'top bottom'
    }
});
tlr.from('section.dofiga .space_between img', { rotate:'90deg', opacity: 0, stagger:0.2 });



let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.usls .container_flex',
        start: 'center bottom'
    }
});
tl2.from('.usls .second_section .sub_block', { x: 100, opacity: 0, stagger:0.1 })
tl2.from('.usls .second_section .main_block', { x: -100, opacity: 0, duration: 0.3 })

// obllachnaya-kassa