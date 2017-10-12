import sliderFeatures from './modules/sliderFeatures';
import sliderPromo from './modules/sliderPromo';
import sliderSpecifications from './modules/sliderSpecifications';
import wow from './modules/wow';
import scrollTo from './modules/scrollTo';
import mobileMenu from './modules/mobileMenu';


(($) => {
  'use strict';

  // When DOM is ready
  $(() => {
    sliderFeatures.init();
    sliderPromo.init();
    sliderSpecifications.init();
    wow.init();
    scrollTo.init();
    mobileMenu.init();
  });

})(jQuery);
