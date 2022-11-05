// let sections = document.querySelectorAll(".carousel-about .item");
// let scrollContainer = document.querySelector(".carousel-about");
// let clamp, dragRatio;

// let scrollTween = gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1),
//   ease: "none"
// });

// let horizontalScroll = ScrollTrigger.create({
//   animation: scrollTween,
//   trigger: scrollContainer,
//   start: "-200px 0",
//   scrub: 1.1,
//   pin: ".carousel-about",
//   pinSpacing: true,
//   inertia: false,
//   invalidateOnRefresh: true,
//   end: "+=100%",
// });

// let drag = Draggable.create(".drag-proxy", {
//   trigger: scrollContainer,
//   type: "x",
//   onPress() {
//     clamp || ScrollTrigger.refresh();
//     this.startScroll = horizontalScroll.scroll();
//   },
//   onDrag() {
//     horizontalScroll.scroll(clamp(this.startScroll - (this.x - this.startX) * dragRatio));
//   }
// })[0];

// ScrollTrigger.addEventListener("refresh", () => {
//   clamp = gsap.utils.clamp(horizontalScroll.start + 1, horizontalScroll.end - 1);
//   dragRatio = scrollContainer.offsetWidth / (window.innerWidth * (sections.length - 1));
// });


const accordionTabs = () => {
  if (document.getElementsByClassName("style-block").length) {
    const tabTitle = document.querySelectorAll('.style-block .item');
    tabTitle.forEach(el => {
      el.addEventListener('click', () => {
        tabTitle.forEach(el => {
          el.classList.remove('active');
        })
        el.classList.toggle('active');
      })
    })
  }
}

const initScripts = () => {
  accordionTabs();
};

document.addEventListener('DOMContentLoaded', initScripts);
