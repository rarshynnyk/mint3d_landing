import PerfectScrollbar from 'perfect-scrollbar';
import {mobilecheck} from '../helpers/mobileCheck';

var sliderLarge = function($) {
  const $sliderContainer = $('.swiper-promo'),
    $sliderLinkItem = $sliderContainer.find('.swiper-promo__links li'),
    is_mobile = mobilecheck();

  function init() {
    if (!$sliderContainer.length)
      return;

    const promoSwiper = new Swiper('.swiper-promo', {
      spaceBetween: 0,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      pagination: '.swiper-pagination',
      paginationClickable: true,
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

    // if (!is_mobile) {
    //   const ps = initScrollBar();
    // }
  }

  function initScrollBar() {
    return new PerfectScrollbar('.swiper__scrollbar', {
      wheelSpeed: 1,
      wheelPropagation: true
    });
  }

  return {init: init};
}(jQuery);

export default sliderLarge;
