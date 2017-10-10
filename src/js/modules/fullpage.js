var fullPage = function($) {
  const fullPageSelector = $('.fullpage');

  function init() {
    if (!fullPageSelector.length) return;

    fullPageSelector.fullpage({
      // anchors: ['hero', 'features', 'feature-1', 'features-2', 'specifications', 'contact-us'],
      fixedElements: '.header',
      // menu: '#menu',
      paddingTop: '6rem',
		  paddingBottom: '0',
      responsiveWidth: 1024,
      scrollBar:true,
      afterResponsive: function(isResponsive){
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

export default fullPage;
