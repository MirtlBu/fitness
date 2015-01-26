var slider_content = [
    {
        title: 'Групповые занятия',
        text: 'Занятия в зале групповых программ — это отличный вариант для тех, кто предпочитает заниматься в компании друзей и единомышленников.'
    },
    {
        title: 'Занятия с тренером',
        text: 'Помогут вам достичь максимальных результатов за время, которое вы посвящаете занятиям фитнесом.'
    },
    {
        title: 'Аквааэробика',
        text: 'Cпециальные тренировки в воде, которые помогают укреплять мышцы тела и поддерживать себя в форме.'
    },
    {
        title: 'Йога',
        text: 'Традиционные принципы йоги с элементами хореографии, воздушной акробатики, пилатеса и художественной гимнастики.'
    }
];

$(function() {
    var ACTIVE = '--active';
    var NAVITEM = 'nav__item';
    var NAVITEM_ACTIVE = NAVITEM + ACTIVE;
    var SLIDERITEM = 'slider__item';
    var SLIDERITEM_ACTIVE = SLIDERITEM + ACTIVE;
    var TABITEM = 'tabs__item';
    var TABITEM_ACTIVE = TABITEM + ACTIVE;
    var slider_counter = 1;
    //action in header
    $('header').on('click', '.' + NAVITEM, function(e) {
        e.preventDefault();
        $('header').find('.' + NAVITEM).removeClass(NAVITEM_ACTIVE);
        $(this).addClass(NAVITEM_ACTIVE);
    });

    //action in slider
    function writeText(index) {
        $('.about__tips').find('.title').text(slider_content[index].title);
        $('.about__tips').find('.text').text(slider_content[index].text);
    }

    $('.about__slider').on('click', '.' + SLIDERITEM, function(e) {
        var dataindex = $(this).attr('data-index') - 1;
        writeText(dataindex);
        $('.about__slider').find('.' + SLIDERITEM).removeClass(SLIDERITEM_ACTIVE);
        $(this).addClass(SLIDERITEM_ACTIVE);
    });

    $('.about__slider').on('click', '.control', function() {
        if($(this).hasClass('control--prev')) {
            slider_counter--;
            if(slider_counter < 1) {
                slider_counter = 4;
            }
        }
        else if($(this).hasClass('control--next')) {
            slider_counter++;
            if(slider_counter > 4) {
                slider_counter = 1;
            }
        }
        writeText(slider_counter - 1);
        $('.about__slider').find('.' + SLIDERITEM).removeClass(SLIDERITEM_ACTIVE);
        $('.about__slider').find('[data-index=' + slider_counter + ']').addClass(SLIDERITEM_ACTIVE);
    });

    //action in treners
    $('.treners').on('click', '.' + TABITEM, function() {
        $('.treners').find('.' + TABITEM).removeClass(TABITEM_ACTIVE);
        $(this).addClass(TABITEM_ACTIVE);
    });
});

function renderGalleryItem(a, b) {
    return $('<div/>', {'class': 'frame'})
    .append($('<div/>', {'class': 'image'}).append($('<img/>', {'src': 'img/gallery-item-' + a + '.jpg'})))
    .append($('<div/>', {'class': 'image'}).append($('<img/>', {'src': 'img/gallery-item-' + b + '.jpg'})))
}

$(function() {
    for (var i = 0; i < 16; i++) {
        var a = Math.floor(Math.random() * 10);
        var b = Math.floor(Math.random() * 10);
        console.log(a, b);
        $('.gallery').find('.frame-wrap').append(renderGalleryItem(a, b));
    }
});

$(document).ready(function() {

    $('.container').flexslider({
        selector: '.frame-wrap > .frame',
        animation: "slide",
        itemWidth: 200,
        itemMargin: 0,
        slideshow: false,
        controlNav: false,
        move: 2,
        controlsContainer: '.gallery .controls',
    });
});








ymaps.ready(init);
var myMap, myPlacemark;

function init(){
    myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 14
    });
    myPlacemark = new ymaps.Placemark([55.76, 37.64],
        { content: 'Москва!', balloonContent: 'ул. Старая, 34/2' },
        {
            iconLayout: 'default#image',
            iconImageHref: 'img/icon-pin.png',
            iconImageSize: [33, 47],
            iconImageOffset: [-3, -42]
        });
    myMap.geoObjects.add(myPlacemark);
    myMap.controls.remove('typeSelector').remove('mapTools').remove('searchControl').remove('trafficControl');

}