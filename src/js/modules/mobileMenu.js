const mobileMenu = function($) {
  const $mobileMenuSelector = $('.mobile-menu'),
        $mobileMenuLink = $mobileMenuSelector.find('a'),
        $mobileToggle = $mobileMenuSelector.find('.close');

  function init () {

    if (!$mobileMenuSelector.length)
      return;

    $mobileMenuLink.on('click', function(){
      $mobileMenuSelector.collapse('hide');
    });
  }

  return {
    init: init
  };

}(jQuery);

export default mobileMenu;
