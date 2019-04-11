/*global $, window*/

$(function () {
    
    "use strict";
    
    // adjust header height
    var myHeader = $('.header');

    myHeader.height($(window).height());

    $(window).resize(function () {
        myHeader.height($(window).height());
        $('.bx-wrapper').each(function () {
            $(this).css('paddingTop', ($(window).height() - $('.bx-wrapper li').height()) / 2);
    
        });
    
    });
    
    // links add active class
    
    $('.links li a').click(function () {
       $(this).parent().addClass('active').siblings().removeClass('active');
    });
    
    // Set the slider in the center
    
    // Fire the Slider
    
    $('.slider').bxSlider({
        pager: false,
        auto: true
    });
    
    $('.bx-wrapper').each(function () {
        $(this).css('paddingTop', ($(window).height() - $('.bx-wrapper li').height()) / 2);
    });
    
    $('.links li a').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
    });
    
    // My Auto Slider with self-invoke function
    (function autoSlider() {
        $('.mySlider .activePerson').each(function () {
            if (!$(this).is(':last-child')) {
                $(this).delay(2000).fadeOut(1000, function () {
                    $(this).removeClass('activePerson').next().addClass('activePerson').fadeIn(1000);
                    autoSlider();
                    
                });
            } else {
                $(this).delay(2000).fadeOut(1000, function () {
                    $(this).removeClass('activePerson');
                    $('.mySlider div').eq(0).addClass('activePerson').fadeIn(1000);
                    autoSlider();
                });
            }
        });
        
    }());

    $('#Container').mixItUp();

    $('html').niceScroll({

        cursorcolor: '#1abc9c',
        cursorwidth: '10px',
        cursorborder: 'none'
    });










});