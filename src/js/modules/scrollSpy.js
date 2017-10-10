const scrollspy = function() {
  function init() {
    var spy = new ScrollSpy('body', {
      nav: '.navbar > li > a',
      className: 'active'
    });
  }

  return {init: init};
}();

export default scrollspy;
