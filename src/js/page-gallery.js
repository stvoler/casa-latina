const galleryTabs = () => {
  if (document.getElementsByClassName("gallery-block").length) {
    const tabGalleryTitle = document.querySelectorAll('.gallery-block .item');
    tabGalleryTitle.forEach(el => {
      el.addEventListener('click', () => {
				tabGalleryTitle.forEach((item) => {
          item.classList.remove("active");
        });
        el.classList.toggle('active');
      })
    })
  }
}

const initGalleryScripts = () => {
  galleryTabs();
};

document.addEventListener('DOMContentLoaded', initGalleryScripts);
