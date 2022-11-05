window.addEventListener('load',function(){
  document.querySelector('body').classList.remove("loading")  
});

if (document.getElementsByClassName("menu-wrapper").length) {
  const headerW = document.querySelector('header');
  const menuTrigger = document.querySelector('.menu-trigger');
  const menuMobile = document.querySelector('.menu-wrapper');
  const menuClose = document.querySelector('.menu-close');
  const menuBg = document.querySelector('.menu-bg');
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
}



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