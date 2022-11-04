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

if (document.getElementsByClassName("menu-title").length) {
  const footerMenuTitle = document.querySelectorAll('footer .menu-title');
  footerMenuTitle.forEach(el => {
    el.addEventListener('click', () => {
      el.classList.toggle('active');
      el.parentNode.classList.toggle('active');
    })
  })
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

// new ResizeObserver(() => scroll.update()).observe(document.querySelector("[data-scroll-container]"))

// const menuEl = document.querySelector('[data-scroll-container]');
// const scroll = new LocomotiveScroll({
// 	el: menuEl, 
// 	smooth: true,
// 	smoothMobile: false,
// 	reloadOnContextChange: true,
// 	smartphone: {
// 			smooth: false,
// 			breakpoint: 800
// 	},
// 	tablet: {
// 			smooth: false,
// 			breakpoint: 800
// 	},
// });

// scroll.on("scroll", ScrollTrigger.update);

// ScrollTrigger.scrollerProxy("[data-scroll-container]", {
// 	scrollTop(value) {
// 		return arguments.length
// 			? scroll.scrollTo(value, 0, 0)
// 			: scroll.scroll.instance.scroll.y;
// 	},
// 	getBoundingClientRect() {
// 		return {
// 			top: 0,
// 			left: 0,
// 			width: window.innerWidth,
// 			height: window.innerHeight
// 		};
// 	}
// });
// ScrollTrigger.defaults({
// 	toggleActions: "restart pause resume pause",
// 	scroller: "[data-scroll-container]"
// });

// ScrollTrigger.addEventListener("refresh", () => scroll.update());