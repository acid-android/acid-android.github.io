var compareTable = $('.compare__table');
var compareBlock = $('.main');
var legendBlock = $('.table__legend');
var tableMain = $('.table__main');
var width = '';
var tableMainWrapper = $('.table__main .main__wrapper');
var numOfItemsBlock = $('.container__num-of-items');
var infoBlock = $('.container__product .info');
var compareLeftButton = $('.nav-buttons .button-left i');
var compareRightButton = $('.nav-buttons .button-right i');

init();

function init(){
    initSlider();
    two();
}
function initSlider() {
    tableMain.css({
        'width': compareTable.width() - legendBlock.width() - 3
    });
    tableMainWrapper.css({
        'height': legendBlock.height(),
        'width': compareBlock.width() * compareBlock.length
    });
    if (compareBlock.length > 5) {
        width = parseInt(tableMain.width() / 5);
        //console.log('>5   ' + width);
    } else {
        width = parseInt(tableMain.width() / compareBlock.length);
        //console.log('=<5   ' + width);
    }

    compareBlock.css({
        'width': width
    });

    numOfItemsBlock.css({
        'height': infoBlock.height()
    });

    tableMainWrapper.css({
        'height': legendBlock.height()
    });
    tableMain.css({
        'height': legendBlock.height()
    });
    compareTable.css({
        'width': compareTable.width() - 3
    });
    $('.content__compare').css({
        'width': compareTable.width()
    });
    $('.content').css({
        'width': compareTable.width()
    });

    $('.container__product .info .image img').css({
        'width': $('.container__product .info .image img').width()
    });


    if (tableMainWrapper.position().left == 0) {
        compareLeftButton.hide();
    }

    if (compareBlock.length <= 5) {
        compareLeftButton.hide();
        compareRightButton.hide();
    }

}
function two() {
    compareLeftButton.on('click', function () {
        setTimeout(function () {
            console.log(tableMainWrapper.position().left);
            if (tableMainWrapper.position().left <= 0) {
                compareRightButton.show();
            }
            if (tableMainWrapper.position().left == 0) {
                compareLeftButton.hide();
            }

        }, 210);

        //console.log(0 - ((compareBlock.length - 5) * compareBlock.width()));

        $('.main__wrapper').animate({left: '+=' + (compareBlock.width()) + 'px'}, 200);
    });

    compareRightButton.on('click', function () {
        //console.log(tableMainWrapper.position().left);

        setTimeout(function () {
            console.log(tableMainWrapper.position().left);
            compareLeftButton.show();

            if (tableMainWrapper.position().left == 0 - ((compareBlock.length - 5) * compareBlock.width())) {
                compareRightButton.hide();
            }
            //if(tableMainWrapper.position().left == 0 - ((compareBlock.length - 5) * compareBlock.width())){
            //    compareLeftButton.hide();
            //}
        }, 210);
        $('.main__wrapper').animate({left: '-=' + (compareBlock.width()) + 'px'}, 200);
    });
    $(window).resize(function () {
        numOfItemsBlock.css({
            'height': infoBlock.height()
        });
    });

    $('.container__num-of-items .num').html(compareBlock.length);

    var productTable = $('.main');
    var legendSpecificationBlock = $('.legend__container .container__specifications .specification');
    var productSpecificationBlock = $('.main__container .container__specifications .specification');

    productTable.each(function () {
        $('[data-product-id="' + $(this).data('product-id') + '"]' + ' .' + productSpecificationBlock.attr('class')).each(function (index) {
            $(this).css({
                'height': legendSpecificationBlock.eq(index).height()
            });
        });
    });

    $(window).resize(function () {
        productTable.each(function () {
            $('[data-product-id="' + $(this).data('product-id') + '"]' + ' .' + productSpecificationBlock.attr('class')).each(function (index) {
                $(this).css({
                    'height': legendSpecificationBlock.eq(index).height()
                });
            });
        });
    });


    var removeButton = $('.main__head .head__remove-icon');

//var compareBlockLengthResize = compareBlock.length;
//var blockWidthAfterResize = parseInt(compareTable.width() / (compareBlockLengthResize));
    removeButton.click(function () {
        var productId = $(this).data('product-id-dlt');
        var blockWidth = $(this).width();
        var productBlock = $('.main');
        var animateFlag = false;
        var parent = $(this).closest('.main');
        console.log(parent);
        if (parent.is('.main:last-child')) {
            animateFlag = true;
        }

        console.log(animateFlag);

        //compareBlockLengthResize = compareBlockNew.length;
        //$('[data-product-id="' + productId + '"').hide('fade', 1000);
        //$('[data-product-id="' + productId + '"').remove();
        productBlock.filter(function () {
            return productBlock.data('product-id') == $(this).data('product-id');
        }).remove();
        console.log(productBlock.className);
        //var compareBlockNew = $('.table__main');
        //compareBlock = compareBlockNew;

        var infoBlock = $('.container__product:nth-last-child(n) .info');
        productBlock.each(function () {
            if ((productBlock.length - 1) > 5) {
                if (animateFlag) {
                    $('.main__wrapper').animate({left: '+=' + (productBlock.width()) + 'px'}, 200);
                    animateFlag = false;
                }
                $(this).css({
                    'width': parseInt(tableMain.width() / 5)
                });
            } else if ((productBlock.length - 1) < 5) {
                console.log('<5');
                $(this).css({
                    'width': parseInt(tableMain.width() / (productBlock.length - 1))
                });
            } else if ((productBlock.length - 1) == 5) {
                if (tableMainWrapper.position().left < 0) {
                    $('.main__wrapper').animate({left: 0}, 200);
                }
                $(this).css({
                    'width': parseInt(tableMain.width() / 5)
                });
            }

            compareBlock = productBlock;
        });
        numOfItemsBlock.css({
            'height': infoBlock.height()
        });
        compareBlock.each(function () {
            $('[data-product-id="' + $(this).data('product-id') + '"]' + ' .' + productSpecificationBlock.attr('class')).each(function (index) {
                $(this).css({
                    'height': legendSpecificationBlock.eq(index).height()
                });
            });
        });
        $('.container__num-of-items .num').html(productBlock.length - 1);
        if (productBlock.length - 1 <= 5) {
            compareLeftButton.hide();
            compareRightButton.hide();
        }
    });

    $(window).resize(function () {
        if (width * (compareBlock.length + legendBlock.length) > compareTable.width()) {
            //legendBlock.css({
            //    'width': parseInt(compareTable.width() / (compareBlock.length + legendBlock.length)) - 1
            //});
            compareBlock.css({
                'width': parseInt(compareTable.width() / (compareBlock.length + legendBlock.length)) - 1
            });
        } else {
            //legendBlock.css({
            //    'width': parseInt(compareTable.width() / (compareBlock.length + legendBlock.length))
            //});
            compareBlock.css({
                'width': parseInt(compareTable.width() / (compareBlock.length + legendBlock.length))
            });
        }
    });
}


