const sliderSpecifications = function($) {
  const $sliderContainer = $('.swiper-specifications');

  function init() {
    if (!$sliderContainer.length) return;

    initSlider();
  }

  function initSlider() {
    let swiper = new Swiper('.swiper-specifications', {
      spaceBetween: 0,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      pagination: '.swiper-specifications .swiper-pagination',
      paginationClickable: true,
    });
  }

  return {
    init: init
  };
}(jQuery);

export default sliderSpecifications;
