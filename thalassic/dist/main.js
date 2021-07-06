window.onload = function() {
    const body = document.body;
    const hamburger = document.getElementById('js-hamburger');
    const blackBg = document.getElementById('js-black-bg');
    hamburger.addEventListener('click', function() {
      body.classList.toggle('nav-open');
    }, false);
    blackBg.addEventListener('click', function() {
      body.classList.remove('nav-open');
    }, false);
  }
/*
const body = document.body;
const headerLinks = document.querySelectorAll('global-nav_list a');
headerLinks.addEventListener("click", function () {
  body.classList.remove('nav-open');
});
*/
    
//toggleNav();
  
  
//Change bcColor after scroll
window.addEventListener( "scroll", function() {
  //var header = document.getElementsByTagName('header');    
  const header = document.querySelector("header");
  const rect = header.getBoundingClientRect();
  const y = rect.top + window.pageYOffset; 
  if (y > 0) {    
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


let body = document.body;
const headerLinks = document.getElementsByClassName('headerLink');
for ( let i = 0; i < 10; i++ ) {
  headerLinks[i].addEventListener('click', function () {
    body.classList.remove('nav-open');
  })
};