// api 976c5246-c889-47f5-9e0e-9e65a205bfdb

const initMaps = () => {
  ymaps.ready(init);
  function init() {
    const myMap = new ymaps.Map("map", {
        center: [55.634624, 37.812732],
        zoom: 16,
        controls: []
    });

    const myPlacemark = new ymaps.Placemark([55.634624, 37.812732], {
      hintContent: 'Дзержинский, ул. Энергетиков, 50',
    }, {
      iconLayout: 'default#image',
      iconImageHref: '/img/map-icon.svg',
      iconImageSize: [70, 80],
      iconImageOffset: [-50, -80]
    });

    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
  }
}

document.addEventListener('DOMContentLoaded', initMaps)
