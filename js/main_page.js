var menu = $('.dropdown-menu');
var menuButton = $('.header__menu-indicator');
var hideButton = $('.header__menu-indicator-pushed');
//var blur = '<div class="blur" style="position: relative; top: 0; display: block; width: 100%; filter: blur(10px);z-index: 0;"></div>';

menuButton.on('click', function () {
    menuButton.hide();
    hideButton.show();
    menu.show();
    //menu.prepend(blur);
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

$('.old-price span').each(function(){
    var value = $(this).html();
    value = value.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    if(value !== '')
        $(this).html('$ ' + value);
});

$('.price span').each(function(){
    var value = $(this).html();
    value = value.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    if(value !== '')
        $(this).html('$ ' + value);
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
        'padding-bottom': paddingReciever7dot1/2 + 'px'
    });
    $('.theater-7dot1__right-group .right-group__rear-surr').css({
        'padding-bottom': paddingReciever7dot1/2 + 'px'
    });
}
$(window).resize(function() {
    padding();
});
