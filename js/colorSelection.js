$(function () {
    var colorName = $('.info__colors .color-name span');
    var colorButton = $('.info__colors .color');
    var colorImage = $('.wrapper__color-image .image');
    var activeColorButton = $('.info__colors .active');
    var activeColorImage = $('.wrapper__color-image .show');
    var colorOldPrice = $('.info__price .old-price span');
    var colorPrice = $('.info__price .price span');
    showPrice(colorOldPrice, colorPrice, activeColorButton);
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

function showColorImage(data){
    var image = $('[data-color-name="'+data+'"]');
    image.addClass('show');
    return image;
}

function checkOnActiveColor(colorButton){
    if(!colorButton.hasClass('active')) {
        return true;
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

//-----------------------------COLOR SELECTION PRODUCT PAGE END-----------------------------------



//-----------------------------COLOR SELECTION LIST PAGE--------------------------------------

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

    var colorButton = $('.info .colors .color');
    colorButton.on('click', function () {
        if(!checkOnActiveColor($(this))){
            return;
        }
        var productId = $(this).closest('.row__product-wrapper').data('product-id');
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
