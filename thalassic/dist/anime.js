if(location.href=='http://192.168.1.52:3000/'){
gsap.config({nullTargetWarn: false});

const tl = gsap.timeline();


tl.set('main', {opacity: 0}) 
tl.set('.op-wrapper', {opacity: 0}) 
tl.set('.op-wrapper svg path, .op-wrapper h2', {opacity: 0}) 
tl.to('.op-wrapper', 1, {autoAlpha: 1, ease: Expo.easeOut}, "op") 
tl.from('.op-wrapper svg path', 2, {opacity: 0, ease: Expo.easeInOut, stagger: 0.15}, "op+=.5")
tl.from('.op-wrapper h2', 1.5, {opacity: 0, ease: Expo.easeInOut}, "op+=.5")
tl.to('.prevent', .1, {autoAlpha: 0}, "op+=1")
tl.to('.op-wrapper svg, .op-wrapper h2', 1.5, {opacity: 0, ease: Expo.easeInOut}, "op+=2")
tl.to('.op-wrapper', 1, {autoAlpha: 0, ease: Expo.easeInOut}, "op+=2.5") 
tl.to('main', 1, {autoAlpha:1, ease: Expo.easeInOut}, "op+=3") 

tl.from('.top img', 2, {scale: 1.3, ease: Expo.easeOut}, "op+=3") 
tl.from('.top h1 .box1 span', 2, {opacity: 0, y: 30, ease: Expo.easeInOut, stagger: 0.025}, "op+=3.5") 
tl.from('.top h1 .box2 span', 2, {opacity: 0, y: 30, ease: Expo.easeInOut, stagger: 0.025}, "op+=3.5") 
tl.from('.top h1 .box3 span', 2, {opacity: 0, y: 30, ease: Expo.easeInOut, stagger: 0.025}, "op+=3.5") 
tl.from('.top p', 2, {opacity: 0, yPercent: 10, ease: Expo.easeOut}, "op+=5") 



/*
tl.set('main', {css: {autoAlpha: 0}}) 
tl.to('.op-wrapper', {css: {opacity: 1, duration: 1}, ease: Expo.easeInOut}, "op") 
//tl.to('.op-wrapper', {css: {opacity: 1, duration: 1}, ease: Expo.easeInOut}, "op+=.5") 
tl.to('.op-wrapper svg path', 2.5, {css: {opacity: 1}, ease: Expo.easeInOut, stagger: 0.1}, "op+=1.5")
*/
}

if(location.href=='http://localhost:3000/'){
    let preventer = document.getElementsByClassName('prevent');
    window.addEventListener('load', function() {
        preventer[0].classList.toggle('none');
    })
};


