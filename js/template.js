//-----------------------------DROPDOWN MENU-------------------------------------------------
var menu = $('.dropdown-menu');
var menuButton = $('.header__menu-indicator');
var hideButton = $('.header__menu-indicator-pushed');




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

//-----------------------------DROPDOWN MENU END-------------------------------------



//----------------------------TABS INDEX PAGE---------------------------------------

var activeTabBackground = $('.wrapper__top-menu .active .background');
var tabBackground = $('.wrapper__top-menu .background');
activeTabBackground.show();
var tab = $('.wrapper__top-menu .top-menu__tab');
tabBackground.css(
    {
        'height': tab.height()
    }
);
activeTabBackground.css(
    {
        'height': tab.height()
    }
);


function nonActiveCheck($value) {
    if ($value == 'top-menu__tab') {
        return true;
    }
}

tab.on('click', function () {
    if (nonActiveCheck($(this).attr('class'))) {
        //setLocation($(this).attr('id'));
        var oldActiveTab = $('.wrapper__top-menu .active');
        var newActiveTab = $(this);
        var oldTabContent = $('.container__' + oldActiveTab.attr('id'));
        var newTabContent = $('.container__' + newActiveTab.attr('id'));
        activeTabBackground.hide('clip', { direction: "horizontal" }, 500);
        oldTabContent.hide('fade', 500);
        activeTabBackground = newActiveTab.find('.background');
        setTimeout(function () {
            oldActiveTab.removeClass('active');


        }, 450);
        setTimeout(function () {
            newActiveTab.find('.background').show('clip', { direction: "horizontal" }, 500);
            newTabContent.show('fade', 500);
            newActiveTab.addClass('active');
        }, 450);
        console.log(location.hash);
    }
});

function setLocation(curLoc){
    try {
        history.pushState(null, null, curLoc);
        return;
    } catch(e) {}
    window.location.hash = '#' + curLoc;

}

//----------------------------TABS INDEX PAGE END---------------------------------------


$('.products__big-item .big-item__wrap .info').css({
    'margin-top': '0'
});

$(document).ready(function () {
    padding();
});
//-------------------------PADDING ON INDEX-------------------------------------------------------------
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
//-------------------------PADDING ON INDEX END-------------------------------------------------------------