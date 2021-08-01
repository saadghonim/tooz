$(document).ready(function() {

    /* ************************start navbar******************* */

    $(".navbar_bt_bar ").click(function() {
        $(".navbar_").slideToggle(500);
    });
    $(".anc_hover").click(function() {
        $(".ul_toolse").slideToggle(400);
    })
    $(".dropdown-lang").click(function() {
        $(".dropdown-content-lang").slideToggle(400);
    })

    /* ************************end navbar******************* */

    /* ************************start slider******************* */

    $('.slider .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        rtl: true,
        autoplay: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        touchDrag: false,
        mouseDrag: false,
        navText: ["<i class='fas fa-arrow-right'></i>", "<i class='fas fa-arrow-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    /* ************************end slider******************* */

    /* ***************start Most-viewed******************* */
    console.log($("html").attr("dir"))
    $('.most_viewed .owl-carousel').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        rtl: $("html").attr("dir") == "rtl" ? true : false,
        stagePadding: 6,
        navText: ["<i class='fas fa-arrow-right'></i>", "<i class='fas fa-arrow-left'></i>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })

    /* ***************end Most-viewed********************* */

    /* ***************start shorkaa***************  */
    $('.shorakaa .owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            rtl: true,
            navText: ["<i class='fas fa-arrow-right'></i>", "<i class='fas fa-arrow-left'></i>"],
            responsive: {
                0: {
                    items: 3
                },
                600: {
                    items: 4
                },
                1000: {
                    items: 6
                }
            }
        })
        /* ***************end shorkaa*************** */

    /* ***************start Testimonials********  */

    $('.Testimonials .owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            rtl: true,
            navText: ["<i class='fas fa-arrow-right'></i>", "<i class='fas fa-arrow-left'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 2
                }
            }
        })
        /* ***************end Testimonials********  */


    /* ****************start wow ******************** */
    new WOW().init();
    document.documentElement.style.setProperty('--animate-duration', '.5s');
    /* ****************end wow ******************** */


})