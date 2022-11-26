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

const teacherMobTabs = () => {
  let mobWidth = window.matchMedia("(max-width: 700px)");
  if (mobWidth.matches) {
    const teacherItem = document.querySelectorAll('.teacher-content .item');
    teacherItem.forEach(el => {
      el.addEventListener('click', () => {
        teacherItem.forEach((item) => {
          item.classList.remove("active");
        });
        el.classList.toggle('active');
      })
    })
  }
}

const initStyleScripts = () => {
  teacherTabs();
  teacherMobTabs();
};

document.addEventListener('DOMContentLoaded', initStyleScripts);