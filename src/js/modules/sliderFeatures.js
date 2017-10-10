const sliderFeatures = function($) {
  const sliderContainer = $('.swiper-features');

  function init() {
    if (!sliderContainer.length) return;

    initSlider();
  }

  function initSlider() {
    let swiper = new Swiper('.swiper-features', {
      spaceBetween: 0,
      loop: true,
      pagination: '.swiper-pagination',
      paginationClickable: true,
      autoHeight: true
    });
  }

  return {
    init: init
  };
}(jQuery);

export default sliderFeatures;
