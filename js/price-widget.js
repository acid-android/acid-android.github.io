$(function() {
    var minPriceInput = $('.filters__price .price__body .inputs .min-price');
    var maxPriceInput = $('.filters__price .price__body .inputs .max-price');
    var minPrice = minPriceInput.data('min-price-get');
    var maxPrice = maxPriceInput.data('max-price-get');
    var fixMinPrice = minPriceInput.data('min-price');
    var fixMaxPrice = maxPriceInput.data('max-price');
    var submitPriceButton = $('.price__body .body__list .submit');
    var newHref;

    minPriceInput.change(function(){
        var href = window.location.href;
        var oldMinPrice = getAllUrlParams().minprice;

        if(parseInt(minPriceInput.val()) >= fixMinPrice && parseInt(minPriceInput.val()) < parseInt(maxPriceInput.val())) {
            minPrice = parseInt(minPriceInput.val());
            $('.price-range').slider("values", 0, minPrice);
            newHref = href.replace('minPrice='+oldMinPrice, 'minPrice=' + minPrice);
            submitPriceButton.attr('href', newHref);
            submitPriceButton.addClass('submit-visible');
        }
        else if (parseInt(minPriceInput.val()) >= fixMinPrice && parseInt(minPriceInput.val()) >= parseInt(maxPriceInput.val())){
            minPrice = parseInt(maxPriceInput.val());
            minPriceInput.val(minPrice);
            $('.price-range').slider("values", 0, minPrice);
            newHref = href.replace('minPrice='+oldMinPrice, 'minPrice=' + minPrice);
            submitPriceButton.attr('href', newHref);
            submitPriceButton.addClass('submit-visible');
        } else {
            minPrice = fixMinPrice;
            minPriceInput.val(minPrice);
            $('.price-range').slider("values", 0, minPrice);
            newHref = href.replace('minPrice='+oldMinPrice, '');
            submitPriceButton.attr('href', newHref);
            submitPriceButton.addClass('submit-visible');
        }



    });

    maxPriceInput.change(function(){
        var href = window.location.href;
        var oldMaxPrice = getAllUrlParams().maxprice;
        if(parseInt(maxPriceInput.val()) <= fixMaxPrice && parseInt(maxPriceInput.val()) > parseInt(minPriceInput.val())) {
            maxPrice = parseInt(maxPriceInput.val());
            $('.price-range').slider("values", 1, maxPrice);
            newHref = href.replace('maxPrice='+oldMaxPrice, 'maxPrice=' + maxPrice);
            submitPriceButton.attr('href', newHref);
            submitPriceButton.addClass('submit-visible');
        }
        else if (parseInt(maxPriceInput.val()) <= fixMaxPrice && parseInt(maxPriceInput.val()) <= parseInt(minPriceInput.val())){
            maxPrice = parseInt(minPriceInput.val());
            maxPriceInput.val(maxPrice);
            $('.price-range').slider("values", 1, maxPrice);
            newHref = href.replace('maxPrice='+oldMaxPrice, 'maxPrice=' + maxPrice);
            submitPriceButton.attr('href', newHref);
            submitPriceButton.addClass('submit-visible');
        } else {
            maxPrice = fixMaxPrice;
            maxPriceInput.val(maxPrice);
            newHref = href.replace('maxPrice='+oldMaxPrice, '');
            submitPriceButton.attr('href', newHref);
            submitPriceButton.addClass('submit-visible');
            $('.price-range').slider("values", 1, maxPrice);
        }


        var newHref = href.replace('maxPrice='+oldMaxPrice, 'maxPrice=' + maxPrice);
        submitPriceButton.attr('href', newHref);
        console.log('new href: ',submitPriceButton.attr('href'));
    });
    $( ".price-range" ).slider({
        range: true,
        min: fixMinPrice,
        max: fixMaxPrice,
        animate: true,
        values: [ minPrice, maxPrice ],
        slide: function( event, ui ) {
            minPrice = ui.values[ 0 ];
            maxPrice = ui.values[ 1 ];
            minPriceInput.val(minPrice);
            maxPriceInput.val(maxPrice);
            var hrefOnSlideChange = window.location.href;
            var oldMinPrice = getAllUrlParams().minprice;
            var oldMaxPrice = getAllUrlParams().maxprice;
            var href1 = hrefOnSlideChange.replace('minPrice='+oldMinPrice, 'minPrice=' + minPrice);
            var href2 = href1.replace('maxPrice='+oldMaxPrice, 'maxPrice=' + maxPrice);
            submitPriceButton.attr('href', href2);
            submitPriceButton.addClass('submit-visible');
        }
    });

    minPriceInput.val($( ".price-range" ).slider( "values", 0 ));
    maxPriceInput.val( $( ".price-range" ).slider( "values", 1 ));
} );


function getAllUrlParams(url) {

    // извлекаем строку из URL или объекта window
    var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

    // объект для хранения параметров
    var obj = {};

    // если есть строка запроса
    if (queryString) {

        // данные после знака # будут опущены
        queryString = queryString.split('#')[0];

        // разделяем параметры
        var arr = queryString.split('&');

        for (var i=0; i<arr.length; i++) {
            // разделяем параметр на ключ => значение
            var a = arr[i].split('=');

            // обработка данных вида: list[]=thing1&list[]=thing2
            var paramNum = undefined;
            var paramName = a[0].replace(/\[\d*\]/, function(v) {
                paramNum = v.slice(1,-1);
                return '';
            });

            // передача значения параметра ('true' если значение не задано)
            var paramValue = typeof(a[1])==='undefined' ? true : a[1];

            // преобразование регистра
            paramName = paramName.toLowerCase();
            paramValue = paramValue.toLowerCase();

            // если ключ параметра уже задан
            if (obj[paramName]) {
                // преобразуем текущее значение в массив
                if (typeof obj[paramName] === 'string') {
                    obj[paramName] = [obj[paramName]];
                }
                // если не задан индекс...
                if (typeof paramNum === 'undefined') {
                    // помещаем значение в конец массива
                    obj[paramName].push(paramValue);
                }
                // если индекс задан...
                else {
                    // размещаем элемент по заданному индексу
                    obj[paramName][paramNum] = paramValue;
                }
            }
            // если параметр не задан, делаем это вручную
            else {
                obj[paramName] = paramValue;
            }
        }
    }

    return obj;
}