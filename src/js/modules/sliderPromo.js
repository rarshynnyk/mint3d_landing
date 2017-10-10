var sliderLarge = function($) {
  const $sliderContainer = $('.swiper-promo'),
        $sliderLinkItem = $sliderContainer.find('.swiper-promo__links li');

  function init() {
    if (!$sliderContainer.length)
      return;

    const promoSwiper = new Swiper('.swiper-promo', {
      spaceBetween: 0,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      onSlideChangeEnd(swiper) {
        $sliderLinkItem.removeClass('active');
        $sliderLinkItem.eq(swiper.activeIndex).addClass('active');
      }
    });


    $('.swiper-promo a[data-slide]').click(function(e) {
      e.preventDefault();
      promoSwiper.slideTo($(this).data('slide'));
      $sliderLinkItem.removeClass('active');
      $(this).parent().addClass('active');
    });
  }

  return {init: init};
}(jQuery);

export default sliderLarge;
