document.addEventListener("DOMContentLoaded", function (event) {
    const items = document.querySelectorAll('.address__list li');
    const hideContent = function () {
        if (items.length > 2) {
            for (var i = 0; i < items.length; i++) {
                if (items[i + 3]) {
                    items[i + 3].classList.add('hide')
                }
            }
        }
    }
    hideContent();

    const write = document.querySelector('.develop__write');
    const feedback = document.querySelector('.feedback');
    const body = document.querySelector('body');

    const addressBtn = document.querySelector('.address__button');
    if (addressBtn) {
        addressBtn.addEventListener('click', function () {
            this.classList.toggle('active');
            items.forEach((item) => {
                item.classList.toggle('show');
            });
        })
    }

    if (write) {
        write.addEventListener('click', () => {
            feedback.classList.toggle('active');
            body.style.overflow = 'hidden';
        });
    }

    const itemsBasket = document.querySelectorAll('.basket-modal__item');
    const lengthItemsBasket = itemsBasket.length;
    const basketShowBtn = document.querySelector('#basket-item-show');
    const numberItems = document.querySelector('#number-items');
    const closeItemBtn = document.querySelectorAll('.close-item');

    // добавляет на страницу кол-во элементов в корзине
    const countItemNumbers = function () {
        if (numberItems) {
            numberItems.innerHTML = lengthItemsBasket;
        }
    }
    countItemNumbers();

    // удоляет элементы с корзины если их больше 2ух 
    if (lengthItemsBasket > 2 && document.documentElement.clientWidth < 321) {
        basketShowBtn.style.display = "block";
        for (var i = 0; i < lengthItemsBasket; i++) {
            itemsBasket[i + 2].classList.remove('active')
        }
    }

    // удоляет элемент с корзины по клику на крестик, запускает ф-ю countItemNumbers
    const closeItem = function () {
        closeItemBtn.forEach(item => {
            item.addEventListener('click', function () {
                this.parentElement.classList.remove('active');
                // countItemNumbers();
            });
        })
    }
    closeItem();

    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => tab.addEventListener('click', tabClick));

    function tabClick(event) {
        const tabId = event.target.dataset.id;

        tabs.forEach((tab, i) => {
            tab.classList.remove('active');
            tabContents[i].classList.remove('active');
        })

        tabs[tabId - 1].classList.add('active');
        tabContents[tabId - 1].classList.add('active');
    }

    // подробнее в личном кабинете
    const tabsLk = document.querySelectorAll('.order-lk__show');
    const contentsLk = document.querySelectorAll('.order-lk__footer');

    tabsLk.forEach((tab, i) => {
        tab.addEventListener('click', function () {
            tab.classList.toggle('active');
            contentsLk[i].classList.toggle('active');
        })
    })

    // const radioDelivery = document.querySelector('#delivery-check');
    // const radioPickup = document.querySelector('#pickup-check');

    // const contentDelivery = document.querySelector('#order-delivery');
    // const contentPickup = document.querySelector('#order-pickup');

    const radioContent = document.querySelectorAll('.order__address');
    const radioChecks = document.querySelectorAll('.order__check-radio');

    radioChecks.forEach((item, i) => {
        item.addEventListener('click', function () {
            radioContent.forEach(item => {
                item.classList.remove('active');
            })
            if (item.checked) {
                radioContent[i].classList.add('active');
            } else {
                radioContent[i].classList.remove('active');
            }
        })
    })

    const toggle = document.querySelectorAll('.toggle');
    toggle.forEach(item => {
        item.addEventListener('click', function () {
            this.classList.toggle('active');
            this.nextSibling.classList.toggle('hide');
        });
    });

    // $('.toggle').on('click', function () {
    //     $(this).toggleClass('active');
    //     $(this).siblings('.toggleHide').toggleClass('hide');
    // })
});

var myMap;
//Дождёмся загрузки API и готовности DOM.
const mapStartPickup = function () {
    if (!myMap) {
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
                };

            myMap = new ymaps.Map('map', {
                // При инициализации карты обязательно нужно указать
                // её центр и коэффициент масштабирования.
                center: destinations['адрес-1'], // Москва
                controls: [],
                zoom: 17
            });

            // Создание экземпляра карты и его привязка к контейнеру с
            // заданным id ("map").
            // myMap = new ymaps.Map('map', {
            //     // При инициализации карты обязательно нужно указать
            //     // её центр и коэффициент масштабирования.
            //     center: destinations['адрес-1'], // Москва
            //     controls: [],
            //     zoom: 17
            // });

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
            var addressText = document.querySelector('#address-pickup');
            var btnChooseMagazine = document.querySelector('#btnChooseMagazine');
            var elemLabel;
            // куда скакать
            function clickGoto() {
                // город
                var pos = this.getAttribute('data-goto'); // или this.getAttribute('title')
                elemLabel = this.children[1].textContent;
                result.textContent = pos;
                // переходим по координатам
                myMap.panTo(destinations[pos], {
                    flying: 1
                });
                // addressText.textContent = elemLabel;
                return false;
            }

            // записываем выбранный адрес в поле забрать по адресу
            btnChooseMagazine.addEventListener('click', function (e) {
                e.preventDefault();
                addressText.textContent = elemLabel;
                const modal = document.querySelector('.choose-magazine__wrapper');
                const body = document.querySelector('body');
                modal.classList.remove('active');
                body.style.overflow = "";
            })

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
    }
}

const mapStartDelivery = function () {
    ymaps.ready(init);

    function init() {
        // Подключаем поисковые подсказки к полю ввода.
        var suggestView = new ymaps.SuggestView('suggest'),
            map,
            placemark;

        // При клике по кнопке запускаем верификацию введёных данных.
        // $('#button').bind('click', function (e) {
        //     geocode();
        // });
        suggestView.events.add(["select"], function (event) {
            console.log(event.get('item'))
            geocode()
        })

        function geocode() {
            // Забираем запрос из поля ввода.
            var request = $('#suggest').val();
            // Геокодируем введённые данные.
            ymaps.geocode(request).then(function (res) {
                var obj = res.geoObjects.get(0),
                    error, hint;

                if (obj) {
                    // Об оценке точности ответа геокодера можно прочитать тут: https://tech.yandex.ru/maps/doc/geocoder/desc/reference/precision-docpage/
                    switch (obj.properties.get('metaDataProperty.GeocoderMetaData.precision')) {
                        case 'exact':
                            break;
                        case 'number':
                        case 'near':
                        case 'range':
                            error = 'Неточный адрес, требуется уточнение';
                            hint = 'Уточните номер дома';
                            break;
                        case 'street':
                            error = 'Неполный адрес, требуется уточнение';
                            hint = 'Уточните номер дома';
                            break;
                        case 'other':
                        default:
                            error = 'Неточный адрес, требуется уточнение';
                            hint = 'Уточните адрес';
                    }
                } else {
                    error = 'Адрес не найден';
                    hint = 'Уточните адрес';
                }

                // Если геокодер возвращает пустой массив или неточный результат, то показываем ошибку.
                if (error) {
                    showError(error);
                    showMessage(hint);
                } else {
                    showResult(obj);
                }
            }, function (e) {
                console.log(e)
            })
        }

        function showResult(obj) {
            // Удаляем сообщение об ошибке, если найденный адрес совпадает с поисковым запросом.
            $('#suggest').removeClass('input_error');
            $('#notice').css('display', 'none');

            var mapContainer = $('#map2'),
                bounds = obj.properties.get('boundedBy'),
                // Рассчитываем видимую область для текущего положения пользователя.
                mapState = ymaps.util.bounds.getCenterAndZoom(
                    bounds,
                    [mapContainer.width(), mapContainer.height()]
                ),
                // Сохраняем полный адрес для сообщения под картой.
                address = [obj.getCountry(), obj.getAddressLine()].join(', '),
                // Сохраняем укороченный адрес для подписи метки.
                shortAddress = [obj.getThoroughfare(), obj.getPremiseNumber(), obj.getPremise()].join(' ');
            // Убираем контролы с карты.
            mapState.controls = [];
            // Создаём карту.
            createMap(mapState, shortAddress);
            // Выводим сообщение под картой.
            showMessage(address);
        }

        function showError(message) {
            $('#notice').text(message);
            $('#suggest').addClass('input_error');
            $('#notice').css('display', 'block');
            // Удаляем карту.
            if (map) {
                map.destroy();
                map = null;
            }
        }

        function createMap(state, caption) {
            // Если карта еще не была создана, то создадим ее и добавим метку с адресом.
            map.setCenter(state.center, state.zoom);
            placemark.geometry.setCoordinates(state.center);
            placemark.properties.set({
                iconCaption: caption,
                balloonContent: caption
            });

        }

        function showMessage(message) {
            $('#messageHeader').text('Данные получены:');
            $('#message').text(message);
        }
    }
}