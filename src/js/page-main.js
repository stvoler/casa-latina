let sections = document.querySelectorAll(".carousel-about .item");
let scrollContainer = document.querySelector(".carousel-about");
let clamp, dragRatio;

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none"
});

let horizontalScroll = ScrollTrigger.create({
  animation: scrollTween,
  trigger: scrollContainer,
  start: "-200px 0",
  // scrub: true,
  scrub: 1.1,
  // pin: true,
  pin: ".carousel-about",
  pinSpacing: true,
  inertia: false,
  invalidateOnRefresh: true,
  // end: () => "+=" + scrollContainer.offsetWidth,
  end: "+=100%",
});

let drag = Draggable.create(".drag-proxy", {
  trigger: scrollContainer,
  type: "x",
  onPress() {
    clamp || ScrollTrigger.refresh();
    this.startScroll = horizontalScroll.scroll();
  },
  onDrag() {
    horizontalScroll.scroll(clamp(this.startScroll - (this.x - this.startX) * dragRatio));
    // horizontalScroll.getTween().progress(1);
  }
})[0];

ScrollTrigger.addEventListener("refresh", () => {
  clamp = gsap.utils.clamp(horizontalScroll.start + 1, horizontalScroll.end - 1);
  dragRatio = scrollContainer.offsetWidth / (window.innerWidth * (sections.length - 1));
});


const initTabs = () => {
  const DATA_ATTR = '[data-type="tab"]';
  const DATA_ATTR_FOCUS = '[data-tab]';
  const DATA_ATTR_RESULT = '[data-tab-result]';

  [...document.querySelectorAll(DATA_ATTR)].forEach(block => {
    const tabs = [...block.querySelectorAll(DATA_ATTR_FOCUS)];
    const results = [...block.querySelectorAll(DATA_ATTR_RESULT)];

    // Methods
    const disableTabs = (tabs) => tabs.forEach(tab => tab.classList.remove('active'));
    const enableTab = (target) => target.classList.add('active');
    const disableResults = (results) => results.forEach(result => result.classList.remove('active'));
    const enableResult = (result) => result.classList.add('active');
    // Methods: end

    tabs.forEach(tab => {
      tab.addEventListener('click', ({ target }) => {
        if ([...target.classList].findIndex(el => el === 'active') !== -1)
          return;
        disableTabs(tabs);
        disableResults(results);
        enableTab(target);
        enableResult(results.find(el => el.dataset.tabResult === target.dataset.tab));
      });
    });
  });
};

const initInfo = () => {
  const DATA_ATTR = '[data-info]';

  // Methods
  const showInfo = (el, item) => {
    el.appendChild(item);
  };
  const hideInfo = (item) => {
    item.remove();
  };
  // Methods: end

  [...document.querySelectorAll(DATA_ATTR)].forEach(el => {
    const TEXT = el.dataset.info;
    const INFO_BLOCK = document.createElement('div');
    const INFO_ICON = document.createElement('div');

    INFO_BLOCK.innerHTML = TEXT;
    INFO_BLOCK.classList.add('text');
    INFO_ICON.classList.add('icon');

    el.appendChild(INFO_ICON);
    
    INFO_ICON.addEventListener('mouseenter', () => { showInfo(el, INFO_BLOCK) });
    INFO_ICON.addEventListener('mouseleave', () => { hideInfo(INFO_BLOCK) });
  });
};

const initSwipers = () => {
  new Swiper(".item-carousel", {
    slidesPerView: 4,
    spaceBetween: 60,
    loop: false,
    autoHeight: true,
    slideClass: "item",
    setWrapperSize: true,
    longSwipesMs: 10,
		// centeredSlides: true,
		// autoplay: {
		// 	delay: 2500,
		// 	disableOnInteraction: false,
		// },
    breakpoints: {
      320: {
				spaceBetween: 6,
        slidesPerView: 'auto'
      },
      1000: {
				spaceBetween: 6,
        slidesPerView: 'auto'
      },
      1300: {
        spaceBetween: 8
      },
      1890: {
				spaceBetween: 10
      },
      3200: {
				spaceBetween: 20
      },
    },
  });
}

const initScripts = () => {
  initSwipers();
  initTabs();
  initInfo();
};

document.addEventListener('DOMContentLoaded', initScripts);
