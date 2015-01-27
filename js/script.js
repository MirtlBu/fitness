var slider_content = [
    {
        title: 'Групповые занятия',
        text: 'Занятия в зале групповых программ — это отличный вариант для тех, кто предпочитает заниматься в компании друзей и единомышленников.',
        url: 'img/bg-1.jpg'
    },
    {
        title: 'Занятия с тренером',
        text: 'Помогут вам достичь максимальных результатов за время, которое вы посвящаете занятиям фитнесом.',
        url: 'img/bg-2.jpg'
    },
    {
        title: 'Аквааэробика',
        text: 'Cпециальные тренировки в воде, которые помогают укреплять мышцы тела и поддерживать себя в форме.',
        url: 'img/bg-3.jpg'
    },
    {
        title: 'Йога',
        text: 'Традиционные принципы йоги с элементами хореографии, воздушной акробатики, пилатеса и художественной гимнастики.',
        url: 'img/bg-4.jpg'
    }
];

var treners = [
    {
        name: 'Иван Петров',
        specification: 'Тяжелая атлетика',
        description: '<p>Корпоративный университет инструкторов тренажерного зала. КМС по конькобежному спорту. Лейтенант запаса ВМФ</p>'+
        '<p>Индивидуальный подход ко всем ученикам, составление тренировочных программ и программ питания исходя из поставленных целей. Постоянная мотивация и контроль результатов на всем пути к достижению результатов.</p>',
        url: 'img/workout-1.jpg'
    },
    {
        name: 'Пётр Иванов',
        specification: 'Плавание',
        description: '<p>Призер чемпионатов СПБ. КМС по плаванию. Школа Fitness House</p>'+
        '<p>Виды обучения плаванию: Совершенствование техник плавания. Персональные тренировки взрослых и детей (дети от 5 лет). Совершенствование техник плавания. Подготовка к соревнованиям и выполнение спортивных разрядов по плаванию. Силовые тренировки в бассейне (развитие силы, выносливости, координации движений)</p>',
        url: 'img/workout-2.jpg'
    },
    {
        name: 'Мария Сидорова',
        specification: 'Йога',
        description: '<p>Мастер Спорта СССР по Художественной гимнастике. Член Молодежной Сборной команды СССР по Художественной гимнастике.</p>'+
        '<p>Чемпионата города Ленинграда, бронзовый призер Советского Союза в Групповых упражнениях. Стаж работы в фитнесе 20 лет. Призентер городских Конвенций.</p>',
        url: 'img/workout-3.jpg'
    },
    {
        name: 'Кошечкин Васисуалий',
        specification: 'Тяжелая атлетика',
        description: '<p>Высшее образование НГУ им. П.Ф.Лесгафта, специалист по физической культуре и спорту, oпыт работы в фитнесе 6 лет. КМС по плаванию</p>' +
        '<p>Призёр и победитель чемпионатов и кубков России по юношам в 2006-2008 году. Неоднократный призёр Кубков Мира и Европы по скоростному подводному плаванию в ластах</p>',
        url: 'img/workout-4.jpg'
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
        $('.bg').find('img').attr('src', slider_content[index].url);
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
        var index = $(this).attr('data-index');
        $('.treners').find('.' + TABITEM).removeClass(TABITEM_ACTIVE);
        $(this).addClass(TABITEM_ACTIVE);
        $('.tabs-content').find('img').attr('src', treners[index].url);
        $('.tabs-content').find('.name').text(treners[index].name);
        $('.tabs-content').find('.specification').text(treners[index].specification);
        $('.tabs-content').find('.description').html(treners[index].description);
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
        $('.gallery').find('.frame-wrap').append(renderGalleryItem(a, b));
    }
});

$('.gallery').on('click', '.image', function() {
    var url = $(this).find('img').attr('src');
    $('.popup__overlay').addClass('visibled');
    $('body').addClass('forbiddenscroll');
    $('.popup').find('.popup__image').html('<img src="' + url + '">');
});

$('.gallery').on('click', '.popup__close', function() {
    $('.popup__overlay').removeClass('visibled');
    $('body').removeClass('forbiddenscroll');
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