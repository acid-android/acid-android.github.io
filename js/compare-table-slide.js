//---------------------ELEMENTS-------------------


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
var removeButton = $('.main__head .head__remove-icon');
var legendSpecificationBlock = $('.legend__container .container__specifications .specification');
var productSpecificationBlock = $('.main__container .container__specifications .specification');


//---------------------ELEMENTS DIMENSIONS---------------------------
var compareBlockLength = compareBlock.length;
var compareBlockWidth = '';
var compareTableWidth = '';
var legendBlockWidth = '';
var tableMainWidth = '';
var tableMainWrapperWidth = '';
var infoBlockWidth = '';
var infoBlockHeight = '';

var maxVisibleBlocks = 5;
var deleteOffset = 0;
var mistakeOffset = 0;

var wrapperPosition = tableMainWrapper.position().left;
var positionStart = 0;
var positionEnd = '';

init();

function init() {
    initSlider();
    initButtons();
    two();
}
function initSlider() {
    tableMain.css({
        'width': compareTable.width() - legendBlock.width() - 3
    });
    tableMainWrapper.css({
        'height': legendBlock.height(),
        'width': compareBlock.width() * compareBlockLength
    });
    if (compareBlock.length > maxVisibleBlocks) {
        width = parseInt(tableMain.width() / maxVisibleBlocks);
        //console.log('>5   ' + width);
    } else {
        width = parseInt(tableMain.width() / compareBlockLength);
        //console.log('=<5   ' + width);
    }

    legendBlock.css({
        'width': parseInt(legendBlock.width()) - 1
    });

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
        'width': tableMain.width() + legendBlock.width()
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

    $('.container__num-of-items .num').html(compareBlockLength);

    compareBlock.each(function () {
        $('[data-product-id="' + $(this).data('product-id') + '"]' + ' .' + productSpecificationBlock.attr('class')).each(function (index) {
            $(this).css({
                'height': legendSpecificationBlock.eq(index).height()
            });
        });
    });

    $(window).resize(function () {
        compareBlock.each(function () {
            $('[data-product-id="' + $(this).data('product-id') + '"]' + ' .' + productSpecificationBlock.attr('class')).each(function (index) {
                $(this).css({
                    'height': legendSpecificationBlock.eq(index).height()
                });
            });
        });
    });

    compareTableWidth = compareTable.width();
    legendBlockWidth = legendBlock.width();
    tableMainWidth = tableMain.width();
    tableMainWrapperWidth = tableMainWrapper.width();
    infoBlockWidth = infoBlock.width();
    infoBlockHeight = infoBlock.height();
    compareBlockWidth = compareBlock.width();
    positionEnd = 0 - ((compareBlockLength - maxVisibleBlocks) * compareBlockWidth) + deleteOffset;

    if (wrapperPosition == positionStart) {
        compareLeftButton.hide();
    }

    if (compareBlockLength <= maxVisibleBlocks) {
        compareLeftButton.hide();
        compareRightButton.hide();
    }

}

function getPosition() {
    return tableMainWrapper.position().left;
}

function initButtons() {
    compareLeftButton.on('click', function () {
        setTimeout(function () {
            wrapperPosition = getPosition();
            console.log(positionStart - mistakeOffset);
            console.log(positionStart);
            console.log(wrapperPosition);
            if (wrapperPosition <= compareBlockLength) {
                compareRightButton.show();
            }
            if (wrapperPosition >= positionStart - mistakeOffset) {
                compareLeftButton.hide();
            }

        }, 210);
        $('.main__wrapper').animate({left: '+=' + (compareBlockWidth) + 'px'}, 200);
    });

    compareRightButton.on('click', function () {
        setTimeout(function () {
            wrapperPosition = getPosition();
            console.log(compareBlockWidth);
            console.log(tableMainWrapper.position().left);
            console.log(positionEnd);
            compareLeftButton.show();

            if (tableMainWrapper.position().left <= positionEnd) {
                compareRightButton.hide();
            }
            //if(tableMainWrapper.position().left == 0 - ((compareBlock.length - 5) * compareBlock.width())){
            //    compareLeftButton.hide();
            //}
        }, 210);
        $('.main__wrapper').animate({left: '-=' + (compareBlockWidth) + 'px'}, 200);
    });
}
function two() {

    $(window).resize(function () {
        numOfItemsBlock.css({
            'height': infoBlock.height()
        });
    });





    removeButton.click(function () {
        var productBlock = $('.main');
        var animateFlag = false;
        var parent = $(this).closest('.main');
        console.log(parent);
        if (parent.is('.main:last-child')) {
            animateFlag = true;
        }
        productBlock.filter(function () {
            return productBlock.data('product-id') == $(this).data('product-id');
        }).remove();
        compareBlockLength--;
        console.log(productBlock.className);
        var infoBlock = $('.container__product:nth-last-child(n) .info');
        productBlock.each(function () {
            if (compareBlockLength > 5) {
                if (animateFlag) {
                    $('.main__wrapper').animate({left: '+=' + (productBlock.width()) + 'px'}, 200);
                    animateFlag = false;
                }
                $(this).css({
                    'width': parseInt(tableMain.width() / 5)
                });
            } else if (compareBlockLength < 5) {
                console.log('<5');
                $(this).css({
                    'width': parseInt(tableMain.width() / (productBlock.length - 1))
                });
            } else if (compareBlockLength == 5) {
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
        $('.container__num-of-items .num').html(compareBlockLength);
        if (compareBlockLength <= 5) {
            compareLeftButton.hide();
            compareRightButton.hide();
        }

        deleteOffset += 2;
        productBlock = $('.main');
        tableMainWrapper = $('.table__main .main__wrapper');
        compareLeftButton = $('.nav-buttons .button-left i');
        compareRightButton = $('.nav-buttons .button-right i');
        mistakeOffset++;
        wrapperPosition = getPosition();
        positionEnd = 0 - ((compareBlockLength - maxVisibleBlocks) * compareBlockWidth) + deleteOffset;
    });


}

function resize(){
    $(window).resize(function () {
        // if (compareBlock.length > 5) {
        //     width = parseInt(tableMain.width() / 5);
        //     compareBlock.css({
        //         'width': width
        //     });
        //
        //     //console.log('>5   ' + width);
        // } else {
        //     width = parseInt(tableMain.width() / compareBlock.length);
        //     compareBlock.css({
        //         'width': width
        //     });
        //
        // }


        numOfItemsBlock.css({
            'height': infoBlock.height()
        });

        legendBlock.css({
            'width': parseInt(legendBlock.width()) - 1
        });


        if(compareBlockLength >= maxVisibleBlocks) {
            compareBlock.css({
                'width': parseInt(compareTableWidth / maxVisibleBlocks)
            });

        } else if (compareBlockLength < maxVisibleBlocks){
            compareBlock.css({
                'width': parseInt(compareTableWidth / compareBlockLength)
            });
        }

        tableMain.css({
            'width': (compareBlockWidth * maxVisibleBlocks)
        });
        // tableMainWrapper.css({
        //     'height': legendBlock.height(),
        //     'width': compareBlock.width() * compareBlockLength
        // });
        // if (compareBlock.length > maxVisibleBlocks) {
        //     width = parseInt(tableMain.width() / maxVisibleBlocks);
        //     //console.log('>5   ' + width);
        // } else {
        //     width = parseInt(tableMain.width() / compareBlockLength);
        //     //console.log('=<5   ' + width);
        // }
        //
        // legendBlock.css({
        //     'width': parseInt(legendBlock.width()) - 1
        // });

        // compareBlock.css({
        //     'width': width
        // });

        // numOfItemsBlock.css({
        //     'height': infoBlock.height()
        // });
        //
        // tableMainWrapper.css({
        //     'height': legendBlock.height()
        // });
        // tableMain.css({
        //     'height': legendBlock.height()
        // });
        compareTable.css({
            'width': tableMain.width() + legendBlock.width()
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
        // compareTableWidth = compareTable.width();
        // legendBlockWidth = legendBlock.width();
        // tableMainWidth = tableMain.width();
        // tableMainWrapperWidth = tableMainWrapper.width();
        // infoBlockWidth = infoBlock.width();
        // infoBlockHeight = infoBlock.height();
        // compareBlockWidth = compareBlock.width();
        // positionEnd = 0 - ((compareBlockLength - maxVisibleBlocks) * compareBlockWidth) + deleteOffset;
    });
}


