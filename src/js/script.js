$(document).ready(function () {
    $('.image-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        prevArrow: '<div class="slick-arrow slick-prev"><img src="img/arrow-left.png" alt="Назад" style="width: 30px; height: 30px; background-color: transparent;"></div>',
        nextArrow: '<div class="slick-arrow slick-next"><img src="img/arrow-right.png" alt="Вперед" style="width: 30px; height: 30px; background-color: transparent;"></div>',
    });
});
