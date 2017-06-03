//--------------------------------TABS PRODUCT PAGE------------------------------------------

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

//--------------------------------TABS PRODUCT PAGE END------------------------------------------

//-----------------------------PRODUCT ZOOM-----------------------------------
function zoom(){
    $(".wrapper__color-image .show img").imagezoomsl({

        zoomrange: [4, 4],
        magnifiersize: [500, 500],
        magnifierpos: "left"

    });
}
//-----------------------------PRODUCT ZOOM END-----------------------------------