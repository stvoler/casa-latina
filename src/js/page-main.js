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
        el.classList.toggle('active');
      })
    })
  }
}

const teacherTabs = () => {
  "use strict";
  document.querySelectorAll("main").forEach((tab) => {
    const tabHeading = tab.querySelectorAll(".teacher-nav a");
    const tabContent = tab.querySelectorAll(".teacher-content .item");
    let tabName;
    tabHeading.forEach((element) => {
      element.addEventListener("mouseover", () => {
        tabHeading.forEach((item) => {
          item.classList.remove("active");
        });
        element.classList.add("active");
        tabName = element.getAttribute("data-tab-index");
        tabContent.forEach((item) => {
          item.classList.contains(tabName)
            ? item.classList.add("active")
            : item.classList.remove("active");
        });
      });
    });
  });
}

const qaTabs = () => {
  if (document.getElementsByClassName("qa-block").length) {
    const qaTab = document.querySelectorAll('.qa-block .item .title-5');
    qaTab.forEach(el => {
      el.addEventListener('click', () => {
        el.parentNode.classList.toggle('active');
      })
    })
  }
}

const teacherMobTabs = () => {
  let mobWidth = window.matchMedia("(max-width: 700px)");
  if (mobWidth.matches) {
    const teacherItem = document.querySelectorAll('.teacher-content .item');
    teacherItem.forEach(el => {
      el.addEventListener('click', () => {
        el.classList.toggle('active');
      })
    })
  }
}

const initScripts = () => {
  accordionTabs();
  teacherTabs();
  qaTabs();
  teacherMobTabs();
};

document.addEventListener('DOMContentLoaded', initScripts);
