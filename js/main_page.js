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
$('.container__row .row__product-wrapper:first-child').css({
   'height':  $('.container__row .row__product-wrapper:last-child').height() + 1
});
console.log($('.container__row .row__product-wrapper:last-child').height());

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
        min: 0,
        max: 99999,
        values: [ 75, 20000 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val( "$" + $( ".price-range" ).slider( "values", 0 ) +
    " - $" + $( ".price-range" ).slider( "values", 1 ) );
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
    console.log(stack);

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
    var colorName = $('.color-name span');
    var colorButton = $('.info__colors .color');
    var colorImage = $('.wrapper__color-image .image');
    var activeColorButton = $('.info__colors .active');
    var activeColorImage = $('.wrapper__color-image .show');
    var colorOldPrice = $('.info__price .old-price span');
    var colorPrice = $('.info__price .price span');
    showPrice(colorOldPrice, colorPrice, activeColorButton);
    zoom()

    colorButton.on('click', function () {
        if (!checkOnActiveColor($(this))) {
            return;
        }
        console.log($(this).data('color-name'));
        var newActiveColorButton = $(this);
        newActiveColorButton.addClass('active');
        activeColorButton.removeClass('active');


        activeColorButton = newActiveColorButton;
        colorName.html(activeColorButton.data('color-name').replace(/\_/gi, ' '));
        showPrice(colorOldPrice, colorPrice, activeColorButton);
        activeColorImage.removeClass('show');
        var newColorImage = showColorImage(activeColorButton.data('color-name'));
        activeColorImage = newColorImage;
        zoom();

    });
});

function checkOnActiveColor(colorButton){
    if(!colorButton.hasClass('active')) {
        console.log('true');
        return true;

    } else {
        console.log('false');
        return false;
    }
}

function showPrice(colorOldPrice, colorPrice, activeColorButton){
    colorPrice.html(activeColorButton.data('color-price'));
    if(activeColorButton.data('color-old-price')){
        colorOldPrice.html(activeColorButton.data('color-old-price'));
    }
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

//$('.wrapper__color-image img').imagezoomsl({
//    zoomrange: [3, 3]
//});

function zoom(){
    $(".wrapper__color-image .show img").imagezoomsl({

        zoomrange: [4, 4],
        magnifiersize: [500, 500]

    });
}


