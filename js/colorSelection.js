


function checkOnActiveColor(colorButton) {
    if (!colorButton.hasClass('active')) {
        return true;
    }
}


function formatLocalPrice(oldPriceSpan, priceSpan) {
    var oldPriceValue = oldPriceSpan.html();
    var priceValue = priceSpan.html();
    if (oldPriceValue !== 'non') {
        oldPriceSpan.show();
        oldPriceSpan.html(oldPriceValue.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + ' грн');
    } else {
        oldPriceSpan.hide();
    }
    priceSpan.html(priceValue.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + ' грн');
}

$(function () {

});

$(window).load(function () {
    processProductList();
});

function processProductList() {
    var container = $('.container__row');
    var product = $('.row__product-wrapper');
    var activeColorId = '';
    var getParams = (getAllUrlParams().sectionid ? '&sectionId=' + getAllUrlParams().sectionid : '') +
        (getAllUrlParams().brandid ? '&brandId=' + getAllUrlParams().brandid : '') +
        (getAllUrlParams().typeid ? '&typeId=' + getAllUrlParams().typeid : '') +
        (getAllUrlParams().minprice ? '&minPrice=' + getAllUrlParams().minprice : '') +
        (getAllUrlParams().maxprice ? '&maxPrice=' + getAllUrlParams().maxprice : '');
    container.each(function (i, elem) {
        var containerId = $(elem).attr('id');
        var product1 = $('#' + containerId + ' .row__product-wrapper:first-child');
        var product2 = $('#' + containerId + ' .row__product-wrapper:nth-child(2)');
        var product3 = $('#' + containerId + ' .row__product-wrapper:nth-child(3)');
        var limit = $('#' + containerId + ' .limit');
        product1.each(function(i, elem){
            var productId = $(elem).attr('id');
            var productIdRequest = $(elem).data('product-id');
            var elemImage = $('#' + productId + ' .image img');
            if($(elem).attr('class') == 'row__product-wrapper cable'){
                var href_cable = $('#' + productId + ' a');
                href_cable.attr('href', 'http://' + window.location.host + '/hifi-site/web/product/index?id=' + productIdRequest);
                if ($('#' + productId + ' .info .lengths .active').data('length-old-price')) {
                    $('#' + productId + ' .info .prices .old-price span').html($('#' + productId + ' .info .lengths .active').data('length-old-price'));
                }
                var length = $('#' + productId + ' .info .lengths .length');
                length.each(function (i, elem) {
                    var lengthId = $(elem).attr('id');
                    $('#' + lengthId + ' .checked i').html($('#' + lengthId).data('length'));

                });
                //$('#' + productId + ' .info .lengths .length .checked i').text($('#' + productId + ' .info .lengths .length').data('length'));
                $('#' + productId + ' .info .prices .price span').html($('#' + productId + ' .info .lengths .active').data('length-price'));
                formatLocalPrice($('#' + productId + ' .info .prices .old-price span'), $('#' + productId + ' .info .prices .price span'));
                return;
            }
            activeColorId = $('#' + productId + ' .info .colors .active').data('color-id');
            var href = $('#' + productId + ' a');
            href.attr('href', 'http://' + window.location.host + '/hifi-site/web/product/index?id=' + productIdRequest + '&color=' + activeColorId + getParams);
            elemImage.attr('src', $('#' + productId + ' .info .colors .active').data('color-path'));
            if ($('#' + productId + ' .info .colors .active').data('color-old-price')) {
                $('#' + productId + ' .info .prices .old-price span').html($('#' + productId + ' .info .colors .active').data('color-old-price'));
            }
            $('#' + productId + ' .info .prices .price span').html($('#' + productId + ' .info .colors .active').data('color-price'));

            formatLocalPrice($('#' + productId + ' .info .prices .old-price span'), $('#' + productId + ' .info .prices .price span'));
        });
        product2.each(function(i, elem){
            if ($(elem).attr('class') == 'row__product-wrapper limit') {
                var id = $(elem).attr('id');
                $('#' + id).height(($('#' + product1.attr('id')).height()) + 1);
                return;
            }
            var productId = $(elem).attr('id');
            var productIdRequest = $(elem).data('product-id');
            var elemImage = $('#' + productId + ' .image img');
            if($(elem).attr('class') == 'row__product-wrapper cable'){
                var href_cable = $('#' + productId + ' a');
                href_cable.attr('href', 'http://' + window.location.host + '/hifi-site/web/product/index?id=' + productIdRequest);
                if ($('#' + productId + ' .info .lengths .active').data('length-old-price')) {
                    $('#' + productId + ' .info .prices .old-price span').html($('#' + productId + ' .info .lengths .active').data('length-old-price'));
                }
                var length = $('#' + productId + ' .info .lengths .length');
                length.each(function (i, elem) {
                    var lengthId = $(elem).attr('id');
                    $('#' + lengthId + ' .checked i').html($('#' + lengthId).data('length'));

                });
                $('#' + productId + ' .info .prices .price span').html($('#' + productId + ' .info .lengths .active').data('length-price'));
                formatLocalPrice($('#' + productId + ' .info .prices .old-price span'), $('#' + productId + ' .info .prices .price span'));
                if($('#' + productId).height() > $('#' + product1.attr('id')).height()){
                    console.log('>');
                    $('#' + product1.attr('id')).height($('#' + productId).height());
                } else if($('#' + productId).height() < $('#' + product1.attr('id')).height()){
                    $('#' + productId).height($('#' + product1.attr('id')).height() + 1);
                }
                return;
            }
            activeColorId = $('#' + productId + ' .info .colors .active').data('color-id');
            var href = $('#' + productId + ' a');
            href.attr('href','http://' +  window.location.host + '/hifi-site/web/product/index?id=' + productIdRequest + '&color=' + activeColorId + getParams);
            elemImage.attr('src', $('#' + productId + ' .info .colors .active').data('color-path'));
            if ($('#' + productId + ' .info .colors .active').data('color-old-price')) {
                $('#' + productId + ' .info .prices .old-price span').html($('#' + productId + ' .info .colors .active').data('color-old-price'));
            }
            $('#' + productId + ' .info .prices .price span').html($('#' + productId + ' .info .colors .active').data('color-price'));
            //$('#' + productId + ' .info .colors .color-name span').html(replaceUnderline($('#' + productId + ' .info .colors .active').data('color-name')));
            formatLocalPrice($('#' + productId + ' .info .prices .old-price span'), $('#' + productId + ' .info .prices .price span'));
            $('#' + productId).height(($('#' + product1.attr('id')).height() + 1));
            //console.log('2nd height: ' + $('#' + productId).height());

        });
        product3.each(function(i, elem){
            if ($(elem).attr('class') == 'row__product-wrapper limit') {
                var id = $(elem).attr('id');
                $('#' + id).height(($('.row__product-wrapper').first().height()) + 1);
                return;
            }
            var productId = $(elem).attr('id');
            var productIdRequest = $(elem).data('product-id');
            var elemImage = $('#' + productId + ' .image img');
            if($(elem).attr('class') == 'row__product-wrapper cable'){
                var href_cable = $('#' + productId + ' a');
                href_cable.attr('href', 'http://' + window.location.host + '/hifi-site/web/product/index?id=' + productIdRequest);
                if ($('#' + productId + ' .info .lengths .active').data('length-old-price')) {
                    $('#' + productId + ' .info .prices .old-price span').html($('#' + productId + ' .info .lengths .active').data('length-old-price'));
                }
                var length = $('#' + productId + ' .info .lengths .length');
                length.each(function (i, elem) {
                    var lengthId = $(elem).attr('id');
                    $('#' + lengthId + ' .checked i').html($('#' + lengthId).data('length'));

                });
                $('#' + productId + ' .info .prices .price span').html($('#' + productId + ' .info .lengths .active').data('length-price'));
                formatLocalPrice($('#' + productId + ' .info .prices .old-price span'), $('#' + productId + ' .info .prices .price span'));
                if($('#' + productId).height() > $('#' + product1.attr('id')).height()){
                    console.log('>');
                    $('#' + product1.attr('id')).height($('#' + productId).height());
                } else if($('#' + productId).height() < $('#' + product1.attr('id')).height()){
                    $('#' + productId).height($('#' + product1.attr('id')).height() + 1);
                }
                return;
            }
            activeColorId = $('#' + productId + ' .info .colors .active').data('color-id');
            var href = $('#' + productId + ' a');
            href.attr('href', 'product?id=' + productIdRequest + '&color=' + activeColorId + getParams);
            elemImage.attr('src', $('#' + productId + ' .info .colors .active').data('color-path'));
            if ($('#' + productId + ' .info .colors .active').data('color-old-price')) {
                $('#' + productId + ' .info .prices .old-price span').html($('#' + productId + ' .info .colors .active').data('color-old-price'));
            }
            $('#' + productId + ' .info .prices .price span').html($('#' + productId + ' .info .colors .active').data('color-price'));
            //$('#' + productId + ' .info .colors .color-name span').html(replaceUnderline($('#' + productId + ' .info .colors .active').data('color-name')));
            formatLocalPrice($('#' + productId + ' .info .prices .old-price span'), $('#' + productId + ' .info .prices .price span'));
            $('#' + productId).height(($('#' + product1.attr('id')).height() + 1));
            //console.log('3rd height: ' + $('#' + productId).height());
        });
    });

    var colorButton = $('.info .colors .color');
    colorButton.on('click', function () {
        if (!checkOnActiveColor($(this))) {
            return;
        }
        var productId = $(this).closest('.row__product-wrapper').data('product-id');

        $('[data-product-id="' + productId + '"]' + ' .image img').attr('src', $(this).data('color-path'));
        if ($(this).data('color-old-price')) {
            $('[data-product-id="' + productId + '"]' + ' .info .prices .old-price span').html($(this).data('color-old-price'));
        }
        $('[data-product-id="' + productId + '"]' + ' .info .prices .price span').html($(this).data('color-price'));
        //$('[data-product-id="' + productId + '"]' + ' .info .colors .color-name span').html(replaceUnderline($(this).data('color-name')));
        $('[data-product-id="' + productId + '"]' + ' .info .colors .active').removeClass('active');
        $(this).addClass('active');
        formatLocalPrice($('[data-product-id="' + productId + '"]' + ' .info .prices .old-price span'), $('[data-product-id="' + productId + '"]' + ' .info .prices .price span'));
        activeColorId = $('[data-product-id="' + productId + '"]' + ' .info .colors .active').data('color-id');
        $('[data-product-id="' + productId + '"]' + ' a').attr('href', 'product?id=' + productId + '&color=' + activeColorId + getParams);
    });

    var lengthButton = $('.info .lengths .length');

    lengthButton.on('click', function(){
        if (!checkOnActiveColor($(this))) {
            return;
        }
        var productId = $(this).closest('.row__product-wrapper').data('product-id');
        if ($(this).data('length-old-price')) {
            $('[data-product-id="' + productId + '"]' + ' .info .prices .old-price span').html($(this).data('length-old-price'));
        }
        $('[data-product-id="' + productId + '"]' + ' .info .prices .price span').html($(this).data('length-price'));
        //$('[data-product-id="' + productId + '"]' + ' .info .colors .color-name span').html(replaceUnderline($(this).data('color-name')));
        $('[data-product-id="' + productId + '"]' + ' .info .lengths .active').removeClass('active');
        $(this).addClass('active');
        formatLocalPrice($('[data-product-id="' + productId + '"]' + ' .info .prices .old-price span'), $('[data-product-id="' + productId + '"]' + ' .info .prices .price span'));
    });
}



