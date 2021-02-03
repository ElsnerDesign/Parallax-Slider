(function ($) {
  $(function () {

    var agSlideFlickity = $('.flickity-slider').flickity({
      autoPlay: 2000,
      imagesLoaded: true,
      percentPosition: false,
      prevNextButtons: false,
      initialIndex: 5,
      pageDots: false,
      groupCells: 1,
      freeScroll: true,
      // wrapAround: true
    });

    var agCard = agSlideFlickity.find('.slider-parallax .card-slider'),
      agTransform = 'string' == typeof document.documentElement.style.transform ? 'transform' : 'WebkitTransform',
      agSlide = agSlideFlickity.data('flickity');

    agSlideFlickity.on('scroll.flickity', function () {
      agSlide.slides.forEach(function (t, e) {
        var n = agCard[e],
          i = -1 * (t.target + agSlide.x) / 4;

        n.style[agTransform] = 'translateX(' + i + 'px)';
      });
    });

    agSlideFlickity.on('dragStart.flickity', function (t, e) {
      document.ontouchmove = function (t) {
        t.preventDefault();
      }
    });

    agSlideFlickity.on('dragEnd.flickity', function (t, e) {
      document.ontouchmove = function (t) {
        return true;
      }
    });

  });
})(jQuery);