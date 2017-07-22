function randProdsWidgetPadding() {
    var paddingBigItem = $('.products__left-group').height() - $('.products__big-item').height();
    $('.products__big-item').css({
        'padding-bottom': paddingBigItem + 'px'
    });
}

randProdsWidgetPadding();

$(window).resize(function () {
    randProdsWidgetPadding();
});