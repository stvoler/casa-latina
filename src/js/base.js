window.addEventListener('load',function(){
  document.querySelector('body').classList.remove("loading")  
});

if (document.getElementsByClassName("menu-wrapper").length) {
  const headerW = document.querySelector('header');
  const menuTrigger = document.querySelector('.menu-trigger');
  const menuMobile = document.querySelector('.menu-wrapper');
  const menuClose = document.querySelector('.menu-close');
  const menuBg = document.querySelector('.menu-bg');
  const menuUla = document.querySelectorAll('.menu ul a');
  menuTrigger.onclick = function() {
    this.classList.toggle('active');
    menuMobile.classList.toggle('active');
    headerW.classList.toggle('is-menu');
  }
  menuClose.onclick = function() {
    this.classList.remove('active');
    menuMobile.classList.remove('active');
    headerW.classList.remove('is-menu');
  }
  menuBg.onclick = function() {
    this.classList.remove('active');
    menuMobile.classList.remove('active');
    headerW.classList.remove('is-menu');
  }
  menuUla.forEach((element) => {
    element.addEventListener("click", () => {
      menuMobile.classList.remove('active');
      headerW.classList.remove('is-menu');
    });
  })
  // let mobWidth = window.matchMedia("(max-width: 600px)");
  // if (mobWidth.matches) {
  //   const menuSub = document.querySelector('.menu > li');
  //   menuSub.onclick = function() {
  //     this.classList.toggle('active');
  //   }
  // }
}

const initAnchors = () => {
  const anchors = document.querySelectorAll('a[href*="#"]')
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const blockID = anchor.getAttribute('href').substr(1)
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
}

const initBaseScripts = () => {
  initAnchors();
};

document.addEventListener('DOMContentLoaded', initBaseScripts);



gsap.registerPlugin(ScrollTrigger, Draggable);

ScrollTrigger.update;
ScrollTrigger.refresh();

let scrollpos = window.scrollY

const header = document.querySelector("header")
const scrollChange = 360

const add_class_on_scroll = () => header.classList.add("is-fixed")
const remove_class_on_scroll = () => header.classList.remove("is-fixed")

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) { add_class_on_scroll() }
  else { remove_class_on_scroll() }
  
})