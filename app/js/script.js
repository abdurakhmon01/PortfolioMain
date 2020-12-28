$(document).ready(function () {
    $('.header-menu__link').click(function(e){
        e.preventDefault();
        $('.header-menu__link').removeClass('header-menu__link_active');
        $(this).addClass('header-menu__link_active');
    })
});