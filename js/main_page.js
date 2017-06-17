////-----------------PAGE LOAD-------------------------------
//
//$(document).ready(function(){
//    $("body").css("display","none").show('fade', 1200);
//});
//
////-----------------PAGE LOAD END----------------------------

////-----------------------------DROPDOWN MENU-------------------------------------------------
//var menu = $('.dropdown-menu');
//var menuButton = $('.header__menu-indicator');
//var hideButton = $('.header__menu-indicator-pushed');
//
//
//
//
//menuButton.on('click', function () {
//    menuButton.hide();
//    hideButton.show();
//    menu.show();
//    $('.blur').css({
//        'height': menu.height()
//    });
//
//    menu.animate({top: '+=1060'}, 1000);
//
//    hideButton.on('click', function () {
//        menu.animate({top: '-=1060'}, 1000);
//        hideButton.unbind('click');
//        setTimeout(function () {
//            menu.hide();
//            hideButton.hide();
//            menuButton.show();
//
//        }, 750);
//    });
//});
//
////-----------------------------DROPDOWN MENU END-------------------------------------
//
//
//
////----------------------------TABS INDEX PAGE---------------------------------------
//
//var activeTabBackground = $('.wrapper__top-menu .active .background');
//var tabBackground = $('.wrapper__top-menu .background');
//activeTabBackground.show();
//var tab = $('.wrapper__top-menu .top-menu__tab');
//tabBackground.css(
//    {
//        'height': tab.height()
//    }
//);
//activeTabBackground.css(
//    {
//        'height': tab.height()
//    }
//);
//
//
//function nonActiveCheck($value) {
//    if ($value == 'top-menu__tab') {
//        return true;
//    }
//}
//
//tab.on('click', function () {
//    if (nonActiveCheck($(this).attr('class'))) {
//        //setLocation($(this).attr('id'));
//        var oldActiveTab = $('.wrapper__top-menu .active');
//        var newActiveTab = $(this);
//        var oldTabContent = $('.container__' + oldActiveTab.attr('id'));
//        var newTabContent = $('.container__' + newActiveTab.attr('id'));
//        activeTabBackground.hide('clip', { direction: "horizontal" }, 500);
//        oldTabContent.hide('fade', 500);
//        activeTabBackground = newActiveTab.find('.background');
//        setTimeout(function () {
//            oldActiveTab.removeClass('active');
//
//
//        }, 450);
//        setTimeout(function () {
//            newActiveTab.find('.background').show('clip', { direction: "horizontal" }, 500);
//            newTabContent.show('fade', 500);
//            newActiveTab.addClass('active');
//        }, 450);
//        console.log(location.hash);
//    }
//});
//
//function setLocation(curLoc){
//    try {
//        history.pushState(null, null, curLoc);
//        return;
//    } catch(e) {}
//    window.location.hash = '#' + curLoc;
//
//}
//
////----------------------------TABS INDEX PAGE END---------------------------------------
//
//
//$('.products__big-item .big-item__wrap .info').css({
//    'margin-top': '0'
//});
//
//padding();
////-------------------------PADDING ON INDEX-------------------------------------------------------------
//function padding() {
//    var paddingBigItem = $('.products__left-group').height() - $('.products__big-item').height();
//    $('.products__big-item').css({
//        'padding-bottom': paddingBigItem + 'px'
//    });
//
//    var paddingAcousticRight = $('.set-right__left-group').height() - $('.set-right__right-group .acoustic').height();
//    $('.set-right__right-group .acoustic').css({
//        'padding-bottom': paddingAcousticRight + 'px'
//    });
//
//    var paddingAcousticLeft = $('.set-left__right-group').height() - $('.set-left__left-group .acoustic').height();
//    $('.set-left__left-group .acoustic').css({
//        'padding-bottom': paddingAcousticLeft + 'px'
//    });
//
//    var paddingReciever5dot1 = $('.theater-5dot1__left-group').height() - $('.theater-5dot1__right-group .right-group__receiver').height();
//    $('.theater-5dot1__right-group .right-group__receiver').css({
//        'padding-bottom': paddingReciever5dot1 + 'px'
//    });
//
//    var paddingReciever7dot1 = $('.theater-7dot1__left-group').height() - $('.theater-7dot1__right-group .right-group__receiver').height() - $('.theater-7dot1__right-group .right-group__rear-surr').height();
//    $('.theater-7dot1__right-group .right-group__receiver').css({
//        'padding-bottom': paddingReciever7dot1 / 2 + 'px'
//    });
//    $('.theater-7dot1__right-group .right-group__rear-surr').css({
//        'padding-bottom': paddingReciever7dot1 / 2 + 'px'
//    });
//
//    var paddingReciever9dot1 = $('.theater-9dot1__left-group').height() - $('.theater-9dot1__right-group .right-group__receiver').height();
//    $('.theater-9dot1__right-group .right-group__receiver').css({
//        'padding-bottom': paddingReciever9dot1 + 'px'
//    });
//}
//$(window).resize(function () {
//    padding();
//});
////-------------------------PADDING ON INDEX END-------------------------------------------------------------


//-----------------------------Sort Type--------------------

var sortButton = $('.sort__container .container__value');
var sortDropMenu = $('.sort__drop');
sortDropMenu.css({
    'width': sortButton.width()
});


sortButton.on('click', function(){
   if(sortDropMenu.attr('class') !== 'sort__drop drop'){
       sortDropMenu.addClass('drop');
   } else {
       sortDropMenu.removeClass('drop');
   }
});


var currentSort = $('.sort__drop .drop__menu .checked');
var sortValue = $('.sort__container .container__value span');
sortValue.html(currentSort.html());
$('.sort__drop .drop__menu .menu__item').on('click', function () {
    var newSort = $(this);
    newSort.addClass('checked');
    currentSort.removeClass('checked');
    currentSort = newSort;
    sortValue.html(currentSort.html());
    sortDropMenu.removeClass('drop');

});

//-----------------------------Sort Type END--------------------



//------------------Number Of Elements On Page-------------------------------

var numButton = $('.num-of-items__container .container__value');
var numDropMenu = $('.num-of-items__drop');
numDropMenu.css({
   'width': numButton.width()
});

numButton.on('click', function(){
    if(numDropMenu.attr('class') !== 'num-of-items__drop drop'){
        numDropMenu.addClass('drop');
    } else {
        numDropMenu.removeClass('drop');
    }
});


var currentNum = $('.num-of-items__drop .drop__menu .checked');
var numValue = $('.num-of-items__container .container__value span');
numValue.html(currentNum.html());
$('.num-of-items__drop .drop__menu .menu__item').on('click', function () {
    var newNum = $(this);
    newNum.addClass('checked');
    currentNum.removeClass('checked');
    currentNum = newNum;
    numValue.html(currentNum.html());
    numDropMenu.removeClass('drop');

});


//------------------Number Of Elements On Page END-------------------------------


//----------------------PRICE SLIDER--------------------------------------------

$( function() {
    var minPriceInput = $('.filters__price .price__body .inputs .min-price');
    var maxPriceInput = $('.filters__price .price__body .inputs .max-price');
    var minPrice = minPriceInput.data('min-price-get');
    var maxPrice = maxPriceInput.data('max-price-get');
    var fixMinPrice = minPriceInput.data('min-price');
    var fixMaxPrice = maxPriceInput.data('max-price');
    var submitPriceButton = $('.price__body .body__list .submit');
    var resetPriceButton = $('.price__body .body__list .reset');
    var newHref;

    if(submitPriceButton){

    }

    minPriceInput.change(function(){
        var href = window.location.href;
        var oldMinPrice = getAllUrlParams().minprice;

        if(parseInt(minPriceInput.val()) >= fixMinPrice && parseInt(minPriceInput.val()) < parseInt(maxPriceInput.val())) {
            minPrice = parseInt(minPriceInput.val());
            $('.price-range').slider("values", 0, minPrice);
            newHref = href.replace('&minPrice='+oldMinPrice, '&minPrice=' + minPrice);
            submitPriceButton.attr('href', newHref);
            var reset1 = newHref.replace('&minPrice='+oldMinPrice, '');
            var reset2 = reset1.replace('&maxPrice='+maxPrice, '');
            resetPriceButton.attr('href', reset2);
            resetPriceButton.addClass('reset-visible');
            submitPriceButton.addClass('submit-visible');
        }
        else if (parseInt(minPriceInput.val()) >= fixMinPrice && parseInt(minPriceInput.val()) >= parseInt(maxPriceInput.val())){
            minPrice = parseInt(maxPriceInput.val());
            minPriceInput.val(minPrice);
            $('.price-range').slider("values", 0, minPrice);
            newHref = href.replace('&minPrice='+oldMinPrice, '&minPrice=' + minPrice);
            submitPriceButton.attr('href', newHref);
            var reset1 = newHref.replace('&minPrice='+oldMinPrice, '');
            var reset2 = reset1.replace('&maxPrice='+maxPrice, '');
            resetPriceButton.attr('href', reset2);
            resetPriceButton.addClass('reset-visible');
            submitPriceButton.addClass('submit-visible');
        } else {
            minPrice = fixMinPrice;
            minPriceInput.val(minPrice);
            $('.price-range').slider("values", 0, minPrice);
            newHref = href.replace('&minPrice='+oldMinPrice, '');
            submitPriceButton.attr('href', newHref);
            var reset1 = newHref.replace('&minPrice='+oldMinPrice, '');
            var reset2 = reset1.replace('&maxPrice='+maxPrice, '');
            resetPriceButton.attr('href', reset2);
            resetPriceButton.addClass('reset-visible');
            submitPriceButton.addClass('submit-visible');
        }





    });

    maxPriceInput.change(function(){
        var href = window.location.href;
        var oldMaxPrice = getAllUrlParams().maxprice;
        if(parseInt(maxPriceInput.val()) <= fixMaxPrice && parseInt(maxPriceInput.val()) > parseInt(minPriceInput.val())) {
            maxPrice = parseInt(maxPriceInput.val());
            $('.price-range').slider("values", 1, maxPrice);
            newHref = href.replace('&maxPrice='+oldMaxPrice, '&maxPrice=' + maxPrice);
            submitPriceButton.attr('href', newHref);
            var reset1 = newHref.replace('&minPrice='+oldMinPrice, '');
            var reset2 = reset1.replace('&maxPrice='+maxPrice, '');
            resetPriceButton.attr('href', reset2);
            resetPriceButton.addClass('reset-visible');
            submitPriceButton.addClass('submit-visible');
        }
        else if (parseInt(maxPriceInput.val()) <= fixMaxPrice && parseInt(maxPriceInput.val()) <= parseInt(minPriceInput.val())){
            maxPrice = parseInt(minPriceInput.val());
            maxPriceInput.val(maxPrice);
            $('.price-range').slider("values", 1, maxPrice);
            newHref = href.replace('&maxPrice='+oldMaxPrice, '&maxPrice=' + maxPrice);
            submitPriceButton.attr('href', newHref);
            var reset1 = newHref.replace('&minPrice='+oldMinPrice, '');
            var reset2 = reset1.replace('&maxPrice='+maxPrice, '');
            resetPriceButton.attr('href', reset2);
            resetPriceButton.addClass('reset-visible');
            submitPriceButton.addClass('submit-visible');
        } else {
            maxPrice = fixMaxPrice;
            maxPriceInput.val(maxPrice);
            newHref = href.replace('&maxPrice='+oldMaxPrice, '');
            submitPriceButton.attr('href', newHref);
            var reset1 = newHref.replace('&minPrice='+oldMinPrice, '');
            var reset2 = reset1.replace('&maxPrice='+maxPrice, '');
            resetPriceButton.attr('href', reset2);
            resetPriceButton.addClass('reset-visible');
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
            var href1 = hrefOnSlideChange.replace('&minPrice='+oldMinPrice, '&minPrice=' + minPrice);
            var href2 = href1.replace('&maxPrice='+oldMaxPrice, '&maxPrice=' + maxPrice);
            submitPriceButton.attr('href', href2);
            submitPriceButton.addClass('submit-visible');
            var reset1 = href2.replace('&minPrice='+minPrice, '');
            var reset2 = reset1.replace('&maxPrice='+maxPrice, '');
            resetPriceButton.attr('href', reset2);
            resetPriceButton.addClass('reset-visible');
        }
    });

    minPriceInput.val($( ".price-range" ).slider( "values", 0 ));
    maxPriceInput.val( $( ".price-range" ).slider( "values", 1 ));


} );
//--------------------PRICE SLIDER END------------------------------------------------


//--------------------FILTERS---------------------------------------------------------
$( function() {
  var filterHead = $('.filter__head');
  var filterBody = $('.f-body');

  filterHead.on('click', function(){
      var filter = $(this).parent();
      var body = filter.find(filterBody);
      var bodyWrap = body.find($('.body__list'));
      if(filter.attr('class').indexOf('opened') > -1) {
          bodyWrap.hide('blind', 300);
          setTimeout(function () {
              filter.removeClass('opened');
              filter.addClass('minimized');
          }, 300);
      } else if (filter.attr('class').indexOf('minimized') > -1){
          bodyWrap.show('blind', 300);
          setTimeout(function () {
              filter.removeClass('minimized');
              filter.addClass('opened');
          }, 300);
      }
  });
});

$( function() {
    var filterItem = $('.list__items');
    filterItem.on('click', function(){
        if($(this).attr('class').indexOf('checked') == -1){
            $(this).addClass('checked');
        } else {
            $(this).removeClass('checked');
        }
    });
});

$( function() {
    var colorItem = $('.colors-container');
    colorItem.on('click', function(){
        if($(this).attr('class').indexOf('checked') == -1){
            $(this).addClass('checked');
        } else {
            $(this).removeClass('checked');
        }
    });
});

//--------------------FILTERS END-----------------------------------------------

//--------------------PAGINATION-----------------------------------------------

$(function pagination() {
    var activePageButton = $('.pages-container .active');
    var pageButton = $('.pages-container .page');
    var firstPage = $('.pages-container .first-page');
    var plusPageButton = $('.right-button');
    var minusPageButton = $('.left-button');
    var stack = getStack();
    checkStackBounds(stack, plusPageButton, minusPageButton, activePageButton);

    pageButton.on('click', function () {
        if ($(this).attr('class') !== 'pages-container active') {
            var newActivePageButton = $(this);
            newActivePageButton.addClass('active');
            activePageButton.removeClass('active');
            activePageButton = newActivePageButton;
            checkStackBounds(stack, plusPageButton, minusPageButton, activePageButton);
        }

    });

    plusPageButton.on('click', function () {
        if(buttonNotActive(plusPageButton)){
            return;
        }
        var newActivePage = activePageButton.next();
        newActivePage.addClass('active');
        activePageButton.removeClass('active');
        activePageButton = newActivePage;
        checkStackBounds(stack, plusPageButton, minusPageButton, activePageButton);
    });

    minusPageButton.on('click', function(){
        if(buttonNotActive(minusPageButton)){
            return;
        }
        var newActivePage = activePageButton.prev();
        newActivePage.addClass('active');
        activePageButton.removeClass('active');
        activePageButton = newActivePage;
        checkStackBounds(stack, plusPageButton, minusPageButton, activePageButton);
    });
});

function getStack(){
    var  stack = [];
    $('.pages-container > .page').each(function(i, elem){
        stack.push($(elem).attr('data-page-number'));
    });
    return stack;
}

function checkStackBounds(stack, plusPageButton, minusPageButton, activePage){
    if(activePage.attr('data-page-number') == stack[0]){
        minusPageButton.addClass('not-active');
        plusPageButton.removeClass('not-active');
    } else if(activePage.attr('data-page-number') == stack[stack.length - 1]){
        plusPageButton.addClass('not-active');
        minusPageButton.removeClass('not-active');
    } else {
        minusPageButton.removeClass('not-active');
        plusPageButton.removeClass('not-active');
    }
}

function buttonNotActive(button){
    if(button.attr('class').indexOf('not-active') > -1) {
        return true;
    } else {
        return false;
    }
}

//--------------------------PAGINATION END----------------------------------------

//--------------------------COLOR SELECTION PRODUCT PAGE-------------------------




//-----------------------------COLOR SELECTION LIST PAGE END--------------------------------------







//--------------------------------TABS PRODUCT PAGE------------------------------------------

$(function(){
    var activeProductTab = $('.product-about__tabs .active');
    var activeProductTabUnderline = $('.product-about__tabs .active .tab__underline');
    var productTab = $('.product-about__tabs .tabs__tab');

    productTab.on('click', function(){
        var newActiveProductTab = $(this);
        if(productTabIsActive(newActiveProductTab)){
            return;
        }
        activeProductTabUnderline.hide('clip', { direction: "horizontal" }, 300);
        $('.' + activeProductTab.data('tab-content')).hide('fade', 300);
        $('.' + newActiveProductTab.data('tab-content')).show('fade', 300);
        setTimeout(function () {
            activeProductTab.removeClass('active');
        }, 300);
        newActiveProductTab.find('.tab__underline').show('clip', { direction: "horizontal" }, 300);
        setTimeout(function () {
            newActiveProductTab.addClass('active');
            activeProductTab = newActiveProductTab;
            activeProductTabUnderline = newActiveProductTab.find('.tab__underline');
        }, 300);
    });
});

function productTabIsActive(tab){
    if(tab.hasClass('active')){
        return true;
    }
}

//--------------------------------TABS PRODUCT PAGE END------------------------------------------

//-----------------------------PRODUCT ZOOM-----------------------------------
function zoom(){
    $(".wrapper__color-image .show img").imagezoomsl({

        zoomrange: [4, 4],
        magnifiersize: [500, 500],
        magnifierpos: "left"

    });
}
//-----------------------------PRODUCT ZOOM END-----------------------------------

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

console.log(getAllUrlParams().minprice);