var menu = $('.dropdown-menu');
var menuButton = $('.header__menu-indicator');
var hideButton = $('.header__menu-indicator-pushed');

menuButton.on('click', function () {
    menuButton.hide();
    hideButton.show();
    menu.show();
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

//var str = "25000";
//alert(str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));

//
//$('.old-price span').val().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
//$('.price span').val().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');

$('.old-price span').each(function(){
    var value = $(this).html();
    value = value.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    $(this).html('$ ' + value);
});

$('.price span').each(function(){
    var value = $(this).html();
    value = value.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    $(this).html('$ ' + value);
});