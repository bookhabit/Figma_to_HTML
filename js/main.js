$(document).ready(function(){
   
    var shopSwiper = new Swiper('.shop_products', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 2.5,
        spaceBetween:25
    });
    var catergorySwiper = new Swiper('.category_slider_wrap', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.category_slider_wrap .pager',
            type: 'bullets',
            clickable:true
        }
    });

}); //document ready