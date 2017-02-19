var menu = $('.dropdown-menu');
var menuButton = $('.header__menu-indicator');
var hideButton = $('.header__menu-indicator-pushed');
var activeTabBackground = $('.wrapper__top-menu .active .background');
var tabBackground = $('.wrapper__top-menu .background');
activeTabBackground.show();
var tab = $('.wrapper__top-menu .top-menu__tab');
tabBackground.css(
    {
        'height': $('.top-menu__tab').height()
    }
);
activeTabBackground.css(
    {
        'height': $('.top-menu__tab').height()
    }
);


function nonActiveCheck($value) {
    if ($value == 'top-menu__tab') {
        return true;
    } else {
        return false;
    }
};

tab.on('click', function () {
    if (nonActiveCheck($(this).attr('class'))) {
        var oldActiveTab = $('.wrapper__top-menu .active');
        var newActiveTab = $(this);
        var oldTabContent = $('.container__' + oldActiveTab.attr('id'));
        var newTabContent = $('.container__' + newActiveTab.attr('id'));
        activeTabBackground.hide('clip', 500);
        oldTabContent.hide('fade', 500);
        activeTabBackground = newActiveTab.find('.background');
        setTimeout(function () {
            oldActiveTab.removeClass('active');


        }, 450);
        setTimeout(function () {
            newActiveTab.find('.background').show('clip', 500);
            newTabContent.show('fade', 500);
            newActiveTab.addClass('active');
        }, 450);
    }
});

menuButton.on('click', function () {
    menuButton.hide();
    hideButton.show();
    menu.show();
    $('.blur').css({
        'height': menu.height()
    });

    menu.animate({top: '+=1060'}, 1000);

    hideButton.on('click', function () {
        menu.animate({top: '-=1060'}, 1000);
        hideButton.unbind('click');
        setTimeout(function () {
            menu.hide();
            hideButton.hide();
            menuButton.show();

        }, 750);
    });
});


$('.products__big-item .big-item__wrap .info').css({
    'margin-top': '0'
});

padding();

function padding() {
    var paddingBigItem = $('.products__left-group').height() - $('.products__big-item').height();
    $('.products__big-item').css({
        'padding-bottom': paddingBigItem + 'px'
    });

    var paddingAcousticRight = $('.set-right__left-group').height() - $('.set-right__right-group .acoustic').height();
    $('.set-right__right-group .acoustic').css({
        'padding-bottom': paddingAcousticRight + 'px'
    });

    var paddingAcousticLeft = $('.set-left__right-group').height() - $('.set-left__left-group .acoustic').height();
    $('.set-left__left-group .acoustic').css({
        'padding-bottom': paddingAcousticLeft + 'px'
    });

    var paddingReciever5dot1 = $('.theater-5dot1__left-group').height() - $('.theater-5dot1__right-group .right-group__receiver').height();
    $('.theater-5dot1__right-group .right-group__receiver').css({
        'padding-bottom': paddingReciever5dot1 + 'px'
    });

    var paddingReciever7dot1 = $('.theater-7dot1__left-group').height() - $('.theater-7dot1__right-group .right-group__receiver').height() - $('.theater-7dot1__right-group .right-group__rear-surr').height();
    $('.theater-7dot1__right-group .right-group__receiver').css({
        'padding-bottom': paddingReciever7dot1 / 2 + 'px'
    });
    $('.theater-7dot1__right-group .right-group__rear-surr').css({
        'padding-bottom': paddingReciever7dot1 / 2 + 'px'
    });

    var paddingReciever9dot1 = $('.theater-9dot1__left-group').height() - $('.theater-9dot1__right-group .right-group__receiver').height();
    $('.theater-9dot1__right-group .right-group__receiver').css({
        'padding-bottom': paddingReciever9dot1 + 'px'
    });
}
$(window).resize(function () {
    padding();
});


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

$( function() {
    $( ".price-range" ).slider({
        range: true,
        min: 6750,
        max: 135000,
        values: [ 6750, 135000 ],
        slide: function( event, ui ) {
            $( "#amount" ).val(  ui.values[ 0 ] + " грн - " + ui.values[ 1 ] + ' грн' );
        }
    });
    $( "#amount" ).val(  $( ".price-range" ).slider( "values", 0 ) +
    " грн - " + $( ".price-range" ).slider( "values", 1 ) + ' грн' );
} );

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

$(function () {
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

$(function () {
    var colorName = $('.info__colors .color-name span');
    var colorButton = $('.info__colors .color');
    var colorImage = $('.wrapper__color-image .image');
    var activeColorButton = $('.info__colors .active');
    var activeColorImage = $('.wrapper__color-image .show');
    var colorOldPrice = $('.info__price .old-price span');
    var colorPrice = $('.info__price .price span');
    showPrice(colorOldPrice, colorPrice, activeColorButton);
    //formatLocalPrice(colorOldPrice, colorPrice);
    //formatLocalPrice(colorOldPrice, colorPrice);
    //console.log('old price: ' + colorOldPrice.html() + '; new price: ' + colorPrice.html());
    zoom();

    colorButton.on('click', function () {
        if (!checkOnActiveColor($(this))) {
            return;
        }
        var newActiveColorButton = $(this);
        newActiveColorButton.addClass('active');
        activeColorButton.removeClass('active');
        activeColorButton = newActiveColorButton;
        colorName.html(replaceUnderline(activeColorButton.data('color-name')));
        showPrice(colorOldPrice, colorPrice, activeColorButton);
        activeColorImage.removeClass('show');
        var newColorImage = showColorImage(activeColorButton.data('color-name'));
        activeColorImage = newColorImage;
        zoom();

    });
});

function replaceUnderline(data){
    return data.replace(/\_/gi, ' ');
}

$(function processProductList() {
    var product = $('.row__product-wrapper');
    product.each(function (i, elem) {
        $(elem + '.image img').attr('src', $(elem + '.info .colors .active').data('color-path'));
        if($(elem + '.info .colors .active').data('color-old-price')) {
            $(elem + '.info .prices .old-price span').html($(elem + '.info .colors .active').data('color-old-price'));
        }
        $(elem + '.info .prices .price span').html($(elem + '.info .colors .active').data('color-price'));
        $(elem + '.info .colors .color-name span').html(replaceUnderline($(elem + '.info .colors .active').data('color-name')));
        formatLocalPrice($(elem + '.info .prices .old-price span'), $(elem + '.info .prices .price span'));
    });
    //formatPrice();

    var colorButton = $('.info .colors .color');
    colorButton.on('click', function () {
        if(!checkOnActiveColor($(this))){
            return;
        }
        var colorPath = $(this).data('color-path');
        var productId = $(this).closest('.row__product-wrapper').data('product-id');
        console.log(productId);
        $('[data-product-id="'+productId+'"]' + ' .image img').attr('src', $(this).data('color-path'));
        if($(this).data('color-old-price')) {
            $('[data-product-id="' + productId + '"]' + ' .info .prices .old-price span').html($(this).data('color-old-price'));
        }
        $('[data-product-id="'+productId+'"]' + ' .info .prices .price span').html($(this).data('color-price'));
        $('[data-product-id="' + productId + '"]' + ' .info .colors .color-name span').html(replaceUnderline($(this).data('color-name')));
        $('[data-product-id="' + productId + '"]' + ' .info .colors .active').removeClass('active');
        $(this).addClass('active');
        formatLocalPrice($('[data-product-id="' + productId + '"]' + ' .info .prices .old-price span'), $('[data-product-id="'+productId+'"]' + ' .info .prices .price span'));
    });

});

function checkOnActiveColor(colorButton){
    if(!colorButton.hasClass('active')) {
        return true;

    } else {
        return false;
    }
}

function showPrice(colorOldPrice, colorPrice, activeColorButton){
    colorPrice.html(activeColorButton.data('color-price'));
    if(activeColorButton.data('color-old-price')){
        colorOldPrice.html(activeColorButton.data('color-old-price'));
    }
    //console.log('old price: ' + colorOldPrice.html() + '; new price: ' + colorPrice.html());
    formatPrice();

}

function showColorImage(data){
    var image = $('[data-color-name="'+data+'"]');
    image.addClass('show');
    return image;
}



function formatPrice(){
    $('.old-price span').each(function () {
        var value = $(this).html();
        value = value.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        if (value !== '')
            $(this).html(value + ' грн');
    });

    $('.price span').each(function () {
        var value = $(this).html();
        value = value.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        if (value !== '')
            $(this).html(value + ' грн');
    });
}

function formatLocalPrice(oldPriceSpan, priceSpan){
    var oldPriceValue = oldPriceSpan.html();
    var priceValue = priceSpan.html();
    if(oldPriceValue){
        oldPriceSpan.html(oldPriceValue.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + ' грн');
    }
    priceSpan.html(priceValue.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + ' грн');
}


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
function zoom(){
    $(".wrapper__color-image .show img").imagezoomsl({

        zoomrange: [4, 4],
        magnifiersize: [500, 500],
        magnifierpos: "left"

    });
}


