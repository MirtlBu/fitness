$(function() {
    var ACTIVE = '--active';
    var NAVITEM = 'nav__item';
    var NAVITEM_ACTIVE = NAVITEM + ACTIVE;
    var SLIDERITEM = 'slider__item';
    var SLIDERITEM_ACTIVE = SLIDERITEM + ACTIVE;

    $('header').on('click', '.' + NAVITEM, function(e) {
        e.preventDefault();
        $('header').find('.' + NAVITEM).removeClass(NAVITEM_ACTIVE);
        $(this).addClass(NAVITEM_ACTIVE);
    });

    $('.about__slider').on('click', '.' + SLIDERITEM, function(e) {
        $('.about__slider').find('.' + SLIDERITEM).removeClass(SLIDERITEM_ACTIVE);
        $(this).addClass(SLIDERITEM_ACTIVE);
    });

});