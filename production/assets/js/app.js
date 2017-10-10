(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _fullpage = require('./modules/fullpage');

var _fullpage2 = _interopRequireDefault(_fullpage);

var _sliderFeatures = require('./modules/sliderFeatures');

var _sliderFeatures2 = _interopRequireDefault(_sliderFeatures);

var _sliderPromo = require('./modules/sliderPromo');

var _sliderPromo2 = _interopRequireDefault(_sliderPromo);

var _sliderSpecifications = require('./modules/sliderSpecifications');

var _sliderSpecifications2 = _interopRequireDefault(_sliderSpecifications);

var _scrollSpy = require('./modules/scrollSpy');

var _scrollSpy2 = _interopRequireDefault(_scrollSpy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import wow from './modules/wow';

(function ($) {
  'use strict';

  // When DOM is ready

  $(function () {
    _sliderFeatures2.default.init();
    _sliderPromo2.default.init();
    _sliderSpecifications2.default.init();
    // scrollSpy.init();
    // wow.init();
  });
})(jQuery); // You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

function scrollTo(event) {
  var target = $($(this).attr('href'));

  if (target.length) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 500);
  }
}

},{"./modules/fullpage":2,"./modules/scrollSpy":3,"./modules/sliderFeatures":4,"./modules/sliderPromo":5,"./modules/sliderSpecifications":6}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var fullPage = function ($) {
  var fullPageSelector = $('.fullpage');

  function init() {
    if (!fullPageSelector.length) return;

    fullPageSelector.fullpage({
      // anchors: ['hero', 'features', 'feature-1', 'features-2', 'specifications', 'contact-us'],
      fixedElements: '.header',
      // menu: '#menu',
      paddingTop: '6rem',
      paddingBottom: '0',
      responsiveWidth: 1024,
      scrollBar: true,
      afterResponsive: function afterResponsive(isResponsive) {
        if (isResponsive) {
          $('.section').css('padding-top', '0');
        } else {
          $('.section').css('padding-top', '6rem');
        }
      }
      // afterLoad: function(anchorLink, index){
      //   if (index === 1) {
      //     $('.header').removeClass('affix').addClass('affix-top');
      //   }
      // }
    });
  }

  return {
    init: init
  };
}(jQuery);

exports.default = fullPage;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var scrollspy = function () {
  function init() {
    var spy = new ScrollSpy('body', {
      nav: '.navbar > li > a',
      className: 'active'
    });
  }

  return { init: init };
}();

exports.default = scrollspy;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var sliderFeatures = function ($) {
  var sliderContainer = $('.swiper-features');

  function init() {
    if (!sliderContainer.length) return;

    initSlider();
  }

  function initSlider() {
    var swiper = new Swiper('.swiper-features', {
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

exports.default = sliderFeatures;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var sliderLarge = function ($) {
  var $sliderContainer = $('.swiper-promo'),
      $sliderLinkItem = $sliderContainer.find('.swiper-promo__links li');

  function init() {
    if (!$sliderContainer.length) return;

    var promoSwiper = new Swiper('.swiper-promo', {
      spaceBetween: 0,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      onSlideChangeEnd: function onSlideChangeEnd(swiper) {
        $sliderLinkItem.removeClass('active');
        $sliderLinkItem.eq(swiper.activeIndex).addClass('active');
      }
    });

    $('.swiper-promo a[data-slide]').click(function (e) {
      e.preventDefault();
      promoSwiper.slideTo($(this).data('slide'));
      $sliderLinkItem.removeClass('active');
      $(this).parent().addClass('active');
    });
  }

  return { init: init };
}(jQuery);

exports.default = sliderLarge;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var sliderSpecifications = function ($) {
  var $sliderContainer = $('.swiper-specifications');

  function init() {
    if (!$sliderContainer.length) return;

    initSlider();
  }

  function initSlider() {
    var swiper = new Swiper('.swiper-specifications', {
      spaceBetween: 0,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      pagination: '.swiper-specifications .swiper-pagination',
      paginationClickable: true
    });
  }

  return {
    init: init
  };
}(jQuery);

exports.default = sliderSpecifications;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIiwic3JjL2pzL21vZHVsZXMvZnVsbHBhZ2UuanMiLCJzcmMvanMvbW9kdWxlcy9zY3JvbGxTcHkuanMiLCJzcmMvanMvbW9kdWxlcy9zbGlkZXJGZWF0dXJlcy5qcyIsInNyYy9qcy9tb2R1bGVzL3NsaWRlclByb21vLmpzIiwic3JjL2pzL21vZHVsZXMvc2xpZGVyU3BlY2lmaWNhdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0tBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUNBOztBQUVBLENBQUMsVUFBQyxDQUFELEVBQU87QUFDTjs7QUFFQTs7QUFDQSxJQUFFLFlBQU07QUFDTiw2QkFBZSxJQUFmO0FBQ0EsMEJBQVksSUFBWjtBQUNBLG1DQUFxQixJQUFyQjtBQUNBO0FBQ0E7QUFDRCxHQU5EO0FBUUQsQ0FaRCxFQVlHLE1BWkgsRSxDQVpBO0FBQ0E7QUFDQTtBQUNBOztBQXVCQSxTQUFTLFFBQVQsQ0FBa0IsS0FBbEIsRUFBeUI7QUFDdkIsTUFBSSxTQUFTLEVBQUUsRUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLE1BQWIsQ0FBRixDQUFiOztBQUVBLE1BQUksT0FBTyxNQUFYLEVBQW1CO0FBQ2pCLFVBQU0sY0FBTjtBQUNBLE1BQUUsWUFBRixFQUFnQixPQUFoQixDQUF3QjtBQUN0QixpQkFBVyxPQUFPLE1BQVAsR0FBZ0I7QUFETCxLQUF4QixFQUVHLEdBRkg7QUFHRDtBQUNGOzs7Ozs7OztBQ25DRCxJQUFJLFdBQVcsVUFBUyxDQUFULEVBQVk7QUFDekIsTUFBTSxtQkFBbUIsRUFBRSxXQUFGLENBQXpCOztBQUVBLFdBQVMsSUFBVCxHQUFnQjtBQUNkLFFBQUksQ0FBQyxpQkFBaUIsTUFBdEIsRUFBOEI7O0FBRTlCLHFCQUFpQixRQUFqQixDQUEwQjtBQUN4QjtBQUNBLHFCQUFlLFNBRlM7QUFH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O0FBRUQsV0FBUyxVQUFULEdBQXNCO0FBQ3BCLFFBQUksU0FBUyxJQUFJLE1BQUosQ0FBVyx3QkFBWCxFQUFxQztBQUNoRCxvQkFBYyxDQURrQztBQUVoRCxrQkFBWSxxQkFGb0M7QUFHaEQsa0JBQVkscUJBSG9DO0FBSWhELGtCQUFZLDJDQUpvQztBQUtoRCwyQkFBcUI7QUFMMkIsS0FBckMsQ0FBYjtBQU9EOztBQUVELFNBQU87QUFDTCxVQUFNO0FBREQsR0FBUDtBQUdELENBdEI0QixDQXNCM0IsTUF0QjJCLENBQTdCOztrQkF3QmUsb0IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gWW91IGNhbiB3cml0ZSBhIGNhbGwgYW5kIGltcG9ydCB5b3VyIGZ1bmN0aW9ucyBpbiB0aGlzIGZpbGUuXG4vL1xuLy8gVGhpcyBmaWxlIHdpbGwgYmUgY29tcGlsZWQgaW50byBhcHAuanMgYW5kIHdpbGwgbm90IGJlIG1pbmlmaWVkLlxuLy8gRmVlbCBmcmVlIHdpdGggdXNpbmcgRVM2IGhlcmUuXG5cbmltcG9ydCBmdWxscGFnZSBmcm9tICcuL21vZHVsZXMvZnVsbHBhZ2UnO1xuaW1wb3J0IHNsaWRlckZlYXR1cmVzIGZyb20gJy4vbW9kdWxlcy9zbGlkZXJGZWF0dXJlcyc7XG5pbXBvcnQgc2xpZGVyUHJvbW8gZnJvbSAnLi9tb2R1bGVzL3NsaWRlclByb21vJztcbmltcG9ydCBzbGlkZXJTcGVjaWZpY2F0aW9ucyBmcm9tICcuL21vZHVsZXMvc2xpZGVyU3BlY2lmaWNhdGlvbnMnO1xuaW1wb3J0IHNjcm9sbHNweSBmcm9tICcuL21vZHVsZXMvc2Nyb2xsU3B5Jztcbi8vIGltcG9ydCB3b3cgZnJvbSAnLi9tb2R1bGVzL3dvdyc7XG5cbigoJCkgPT4ge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gV2hlbiBET00gaXMgcmVhZHlcbiAgJCgoKSA9PiB7XG4gICAgc2xpZGVyRmVhdHVyZXMuaW5pdCgpO1xuICAgIHNsaWRlclByb21vLmluaXQoKTtcbiAgICBzbGlkZXJTcGVjaWZpY2F0aW9ucy5pbml0KCk7XG4gICAgLy8gc2Nyb2xsU3B5LmluaXQoKTtcbiAgICAvLyB3b3cuaW5pdCgpO1xuICB9KTtcblxufSkoalF1ZXJ5KTtcblxuZnVuY3Rpb24gc2Nyb2xsVG8oZXZlbnQpIHtcbiAgdmFyIHRhcmdldCA9ICQoJCh0aGlzKS5hdHRyKCdocmVmJykpO1xuXG4gIGlmICh0YXJnZXQubGVuZ3RoKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICBzY3JvbGxUb3A6IHRhcmdldC5vZmZzZXQoKS50b3BcbiAgICB9LCA1MDApO1xuICB9XG59XG4iLCJ2YXIgZnVsbFBhZ2UgPSBmdW5jdGlvbigkKSB7XG4gIGNvbnN0IGZ1bGxQYWdlU2VsZWN0b3IgPSAkKCcuZnVsbHBhZ2UnKTtcblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIGlmICghZnVsbFBhZ2VTZWxlY3Rvci5sZW5ndGgpIHJldHVybjtcblxuICAgIGZ1bGxQYWdlU2VsZWN0b3IuZnVsbHBhZ2Uoe1xuICAgICAgLy8gYW5jaG9yczogWydoZXJvJywgJ2ZlYXR1cmVzJywgJ2ZlYXR1cmUtMScsICdmZWF0dXJlcy0yJywgJ3NwZWNpZmljYXRpb25zJywgJ2NvbnRhY3QtdXMnXSxcbiAgICAgIGZpeGVkRWxlbWVudHM6ICcuaGVhZGVyJyxcbiAgICAgIC8vIG1lbnU6ICcjbWVudScsXG4gICAgICBwYWRkaW5nVG9wOiAnNnJlbScsXG5cdFx0ICBwYWRkaW5nQm90dG9tOiAnMCcsXG4gICAgICByZXNwb25zaXZlV2lkdGg6IDEwMjQsXG4gICAgICBzY3JvbGxCYXI6dHJ1ZSxcbiAgICAgIGFmdGVyUmVzcG9uc2l2ZTogZnVuY3Rpb24oaXNSZXNwb25zaXZlKXtcbiAgICAgICAgaWYgKGlzUmVzcG9uc2l2ZSkge1xuICAgICAgICAgICQoJy5zZWN0aW9uJykuY3NzKCdwYWRkaW5nLXRvcCcsICcwJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJCgnLnNlY3Rpb24nKS5jc3MoJ3BhZGRpbmctdG9wJywgJzZyZW0nKTtcbiAgICAgICAgfVxuXG4gICAgXHR9XG4gICAgICAvLyBhZnRlckxvYWQ6IGZ1bmN0aW9uKGFuY2hvckxpbmssIGluZGV4KXtcbiAgICAgIC8vICAgaWYgKGluZGV4ID09PSAxKSB7XG4gICAgICAvLyAgICAgJCgnLmhlYWRlcicpLnJlbW92ZUNsYXNzKCdhZmZpeCcpLmFkZENsYXNzKCdhZmZpeC10b3AnKTtcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0OiBpbml0XG4gIH07XG59KGpRdWVyeSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bGxQYWdlO1xuIiwiY29uc3Qgc2Nyb2xsc3B5ID0gZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgdmFyIHNweSA9IG5ldyBTY3JvbGxTcHkoJ2JvZHknLCB7XG4gICAgICBuYXY6ICcubmF2YmFyID4gbGkgPiBhJyxcbiAgICAgIGNsYXNzTmFtZTogJ2FjdGl2ZSdcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7aW5pdDogaW5pdH07XG59KCk7XG5cbmV4cG9ydCBkZWZhdWx0IHNjcm9sbHNweTtcbiIsImNvbnN0IHNsaWRlckZlYXR1cmVzID0gZnVuY3Rpb24oJCkge1xuICBjb25zdCBzbGlkZXJDb250YWluZXIgPSAkKCcuc3dpcGVyLWZlYXR1cmVzJyk7XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBpZiAoIXNsaWRlckNvbnRhaW5lci5sZW5ndGgpIHJldHVybjtcblxuICAgIGluaXRTbGlkZXIoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRTbGlkZXIoKSB7XG4gICAgbGV0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXItZmVhdHVyZXMnLCB7XG4gICAgICBzcGFjZUJldHdlZW46IDAsXG4gICAgICBsb29wOiB0cnVlLFxuICAgICAgcGFnaW5hdGlvbjogJy5zd2lwZXItcGFnaW5hdGlvbicsXG4gICAgICBwYWdpbmF0aW9uQ2xpY2thYmxlOiB0cnVlLFxuICAgICAgYXV0b0hlaWdodDogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0OiBpbml0XG4gIH07XG59KGpRdWVyeSk7XG5cbmV4cG9ydCBkZWZhdWx0IHNsaWRlckZlYXR1cmVzO1xuIiwidmFyIHNsaWRlckxhcmdlID0gZnVuY3Rpb24oJCkge1xuICBjb25zdCAkc2xpZGVyQ29udGFpbmVyID0gJCgnLnN3aXBlci1wcm9tbycpLFxuICAgICAgICAkc2xpZGVyTGlua0l0ZW0gPSAkc2xpZGVyQ29udGFpbmVyLmZpbmQoJy5zd2lwZXItcHJvbW9fX2xpbmtzIGxpJyk7XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBpZiAoISRzbGlkZXJDb250YWluZXIubGVuZ3RoKVxuICAgICAgcmV0dXJuO1xuXG4gICAgY29uc3QgcHJvbW9Td2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLXByb21vJywge1xuICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxuICAgICAgbmV4dEJ1dHRvbjogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgICAgcHJldkJ1dHRvbjogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxuICAgICAgb25TbGlkZUNoYW5nZUVuZChzd2lwZXIpIHtcbiAgICAgICAgJHNsaWRlckxpbmtJdGVtLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJHNsaWRlckxpbmtJdGVtLmVxKHN3aXBlci5hY3RpdmVJbmRleCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgIH0pO1xuXG5cbiAgICAkKCcuc3dpcGVyLXByb21vIGFbZGF0YS1zbGlkZV0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBwcm9tb1N3aXBlci5zbGlkZVRvKCQodGhpcykuZGF0YSgnc2xpZGUnKSk7XG4gICAgICAkc2xpZGVyTGlua0l0ZW0ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge2luaXQ6IGluaXR9O1xufShqUXVlcnkpO1xuXG5leHBvcnQgZGVmYXVsdCBzbGlkZXJMYXJnZTtcbiIsImNvbnN0IHNsaWRlclNwZWNpZmljYXRpb25zID0gZnVuY3Rpb24oJCkge1xuICBjb25zdCAkc2xpZGVyQ29udGFpbmVyID0gJCgnLnN3aXBlci1zcGVjaWZpY2F0aW9ucycpO1xuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgaWYgKCEkc2xpZGVyQ29udGFpbmVyLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgaW5pdFNsaWRlcigpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdFNsaWRlcigpIHtcbiAgICBsZXQgc3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlci1zcGVjaWZpY2F0aW9ucycsIHtcbiAgICAgIHNwYWNlQmV0d2VlbjogMCxcbiAgICAgIG5leHRCdXR0b246ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICAgIHByZXZCdXR0b246ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgICAgIHBhZ2luYXRpb246ICcuc3dpcGVyLXNwZWNpZmljYXRpb25zIC5zd2lwZXItcGFnaW5hdGlvbicsXG4gICAgICBwYWdpbmF0aW9uQ2xpY2thYmxlOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0OiBpbml0XG4gIH07XG59KGpRdWVyeSk7XG5cbmV4cG9ydCBkZWZhdWx0IHNsaWRlclNwZWNpZmljYXRpb25zO1xuIl19
