$(function () {
    var colorButton = $('.info__length .length');
    var activeColorButton = $('.info__length .active');
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

        showPrice(colorOldPrice, colorPrice, activeColorButton);
        zoom();

    });
});





function checkOnActiveColor(colorButton){
    if(!colorButton.hasClass('active')) {
        return true;
    }
}

function showPrice(colorOldPrice, colorPrice, activeColorButton){
    colorPrice.html(activeColorButton.data('length-price'));
    if(activeColorButton.data('length-old-price') !== 'non'){
        colorOldPrice.html(activeColorButton.data('length-old-price'));
    } else {
        colorOldPrice.html('');
    }
    //console.log('old price: ' + colorOldPrice.html() + '; new price: ' + colorPrice.html());
    formatPrice();

}

function formatPrice(){
    $('.old-price span').each(function () {
        var value = $(this).html();
        if(value == ''){
            $(this).html('');
            return;
        } else {
            value = value.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
            $(this).html(value + ' грн');
        }
        //value = value.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        //if (value !== null) {
        //
        //}
    });

    $('.price span').each(function () {
        var value = $(this).html();
        value = value.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        if (value !== '')
            $(this).html(value + ' грн');
        else {
            $(this).html('');
        }
    });
}


//-----------------------------COLOR SELECTION PRODUCT PAGE END-----------------------------------



//-----------------------------COLOR SELECTION LIST PAGE--------------------------------------


