$(function () {
    $('.gnb, .gnbbg').hover(function () {
        $('.gnbbg, .sub').stop().animate({
            height: 'toggle',
            opacity: 'toggle'
        }, 200);
    }, function () {
        $('.gnbbg, .sub').stop().animate({
            height: 'toggle',
            opacity: 'toggle'
        }, 500);
    })

    //mobile submenu
    $('.mo .m-menu > li').click(function () {
        $('.mo .m-menu > li').find('ul').stop().slideUp();
        $('.mo .m-menu > li').removeClass('on');
        if (!$(this).find('ul').is(':hidden')) {
            $(this).addClass('on');
        }
        $(this).find('ul').stop().slideToggle();
        $(this).toggleClass('on');

    });
    $('.m-menu-open').click(function () {
        $('.mo li').find('ul').stop().slideUp();
        $('html, body').addClass('moon');
        $('.mo, .mbg').animate({
            right: '0',
            opacity: 'show'
        });
        $('.m-menu-close').animate({
            right: '78%',
            opacity: 'show'
        });
    });
    $('.m-menu-close').click(function () {
        $('.mo li').find('ul').stop().slideUp();
        $('html, body').addClass('moon');
        $('.mo, .mbg, .m-menu-close').animate({
            right: '-100%',
            opacity: 'hide'
        });
    });
    $('.mbg').click(function () {
        $('.mo li').find('ul').stop().slideUp();
        $('.mo, .mbg, .m-menu-close').animate({
            right: '-100%',
            opacity: 'hide'
        });
    });
});
