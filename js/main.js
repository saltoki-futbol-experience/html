(function ($) {
    "use strict";

    $(window).on('load', function () {
        //===== Prealoder
        $("#preloader").delay(200).fadeOut("");
    });

    $(document).ready(function () {
        //05. sticky header
        function sticky_header() {
            var wind = $(window);
            var sticky = $('header');
            wind.on('scroll', function () {
                var scroll = wind.scrollTop();
                if (scroll < 100) {
                    sticky.removeClass('sticky');
                } else {
                    sticky.addClass('sticky');
                }
            });
        }
        sticky_header();
        //===== Back to top

        // Show or hide the sticky footer button
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 600) {
                $('.back-to-top').fadeIn(200)
            } else {
                $('.back-to-top').fadeOut(200)
            }
        });

        //Animate the scroll to yop
        $('.back-to-top').on('click', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: 0,
            }, 1500);
        });

        // Hamburger-menu
        $('.hamburger-menu').on('click', function () {
            $('.hamburger-menu .line-top, #menu').toggleClass('current');
            $('.hamburger-menu .line-center').toggleClass('current');
            $('.hamburger-menu .line-bottom').toggleClass('current');
        });



        // nice-select Initialization
        $('select').niceSelect();



        //11. Video Popup Initialize
        function videoPopupInit() {
            $('#play_video').magnificPopup({
                type: 'iframe',
                iframe: {
                    patterns: {
                        youtube: {
                            index: 'youtube.com/',

                            id: 'v=',
                            src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                        },
                    },

                    srcAction: 'iframe_src',
                }
            });
        }
        videoPopupInit();


        // marquee js
        $('.marquee').marquee({
            duration: 20000,
            duplicated: true,
            pauseOnHover: false,
            gap: 0,
            startVisible: true,
            delayBeforeStart: 0,
        });


        // overons_slider
        $('.sponsor_slider').owlCarousel({
            loop: true,
            margin: 15,
            autoplay: false,
            nav: true,
            dots: true,
            navText: [
                '<img src="./img/long_arow_left.svg" class="custom_prev" alt="arrow">',
                '<img src="./img/long_arow_right.svg" class="custom_next" alt="arrow">'
            ],
            responsive: {
                0: { items: 1 },
                576: { items: 2 },
                768: { items: 3 },
                992: { items: 4 },
                1200: { items: 4 },
                1400: { items: 5 }
            }
        });

    });

})(jQuery);