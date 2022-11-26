const priceMobTabs = () => {
  let mobWidth = window.matchMedia("(max-width: 600px)");
  if (mobWidth.matches) {
    const priceItem = document.querySelectorAll('.price-block .item');
    priceItem.forEach(el => {
      el.addEventListener('click', () => {
        priceItem.forEach((item) => {
          item.classList.remove("active");
        });
        el.classList.toggle('active');
      })
    })
  }
}

const initPriceScripts = () => {
  priceMobTabs();
};

document.addEventListener('DOMContentLoaded', initPriceScripts);