//Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init() {
    var result = document.getElementById('result'), // для отладки

        // в этой версии координаты просто элементы массива (и они поменяны местами)
        destinations = {
            'адрес-1': [51.706079, 36.167159],
            'адрес-2': [51.727970, 36.185071],
            'адрес-3': [51.743198, 36.134441],
            'адрес-4': [51.738123, 36.192350],
            'адрес-5': [51.654623, 35.684827],
            'адрес-6': [52.351162, 35.353913]
        },

        // Создание экземпляра карты и его привязка к контейнеру с
        // заданным id ("map").
        myMap = new ymaps.Map('map', {
            // При инициализации карты обязательно нужно указать
            // её центр и коэффициент масштабирования.
            center: destinations['адрес-1'], // Москва
            controls: [],
            zoom: 17
        }),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/img/svg/balloon.svg',
            iconImageSize: [37, 50],
            iconImageOffset: [-5, -38]
        });

    myPlacemark0 = new ymaps.Placemark([51.727970, 36.185071], {
        hintContent: 'Собственный значок метки',
        balloonContent: 'Это красивая метка'
    }, {
        iconLayout: 'default#image',
        iconImageHref: '/img/svg/balloon.svg',
        iconImageSize: [37, 50],
        iconImageOffset: [-5, -38]
    });
    myPlacemark1 = new ymaps.Placemark([51.743198, 36.134441], {
        hintContent: 'Собственный значок метки',
        balloonContent: 'Это красивая метка'
    }, {
        iconLayout: 'default#image',
        iconImageHref: '/img/svg/balloon.svg',
        iconImageSize: [37, 50],
        iconImageOffset: [-5, -38]
    });
    myPlacemark2 = new ymaps.Placemark([51.738123, 36.192350], {
        hintContent: 'Собственный значок метки',
        balloonContent: 'Это красивая метка'
    }, {
        iconLayout: 'default#image',
        iconImageHref: '/img/svg/balloon.svg',
        iconImageSize: [37, 50],
        iconImageOffset: [-5, -38]
    });
    myPlacemark3 = new ymaps.Placemark([51.654623, 35.684827], {
        hintContent: 'Собственный значок метки',
        balloonContent: 'Это красивая метка'
    }, {
        iconLayout: 'default#image',
        iconImageHref: '/img/svg/balloon.svg',
        iconImageSize: [37, 50],
        iconImageOffset: [-5, -38]
    });
    myPlacemark4 = new ymaps.Placemark([52.351162, 35.353913], {
        hintContent: 'Собственный значок метки',
        balloonContent: 'Это красивая метка'
    }, {
        iconLayout: 'default#image',
        iconImageHref: '/img/svg/balloon.svg',
        iconImageSize: [37, 50],
        iconImageOffset: [-5, -38]
    });

    // все ок
    result.textContent = 'map init';

    // куда скакать
    function clickGoto() {

        const mapBox = $('#map').offset().top - 50
        $('html, body').animate({
            scrollTop: mapBox
        }, 400)


        // город
        var pos = this.getAttribute('data-goto'); // или this.getAttribute('title')
        result.textContent = pos;

        // переходим по координатам
        myMap.panTo(destinations[pos], {
            flying: 1
        });

        return false;
    }

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemark0)
        .add(myPlacemark1)
        .add(myPlacemark2)
        .add(myPlacemark3)
        .add(myPlacemark4);

    // навешиваем обработчики
    var col = document.getElementsByClassName('goto');
    for (var i = 0, n = col.length; i < n; ++i) {
        col[i].onclick = clickGoto;
        result.textContent = result.textContent + ' ' + i;
    }

    return false
}