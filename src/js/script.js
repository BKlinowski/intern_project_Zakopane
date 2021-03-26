$(document).ready(function () {
    $('.grid').isotope({
        // set itemSelector so .grid-sizer is not used in layout
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
    })
    $(".gallery-season__row").owlCarousel({
        loop: true,
        margin: 15,
        items: 1,
        center: true,
        nav: true,
        navRewind: false,
        navText: ["<svg class='gallery-season__nav--left' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28.38 50'><defs></defs><title>Zasób 57zak_</title><g id='Warstwa_2' data-name='Warstwa 2'><g id='Warstwa_1-2' data-name='Warstwa 1'><path d='M28.38,25,16.44,13.06,27.25,2.25,25,0,14.19,10.81l-1.13,1.13L0,25,13.06,38.06l1.13,1.13L25,50l2.25-2.25L16.44,36.94ZM4.5,25l9.69-9.69L23.87,25l-9.68,9.69Z'/></g></g></svg>", "<svg class='gallery-season__nav--right' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28.38 50'><defs></defs><title>Zasób 57zak_</title><g id='Warstwa_2' data-name='Warstwa 2'><g id='Warstwa_1-2' data-name='Warstwa 1'><path d='M28.38,25,16.44,13.06,27.25,2.25,25,0,14.19,10.81l-1.13,1.13L0,25,13.06,38.06l1.13,1.13L25,50l2.25-2.25L16.44,36.94ZM4.5,25l9.69-9.69L23.87,25l-9.68,9.69Z'/></g></g></svg>"],
        autoWidth: true,
        /* responsive: {
            0: {
                items: 3
            },
            /* 1199: {
                items: 3
            }, 
        } */
    });
    $(".slider__row").owlCarousel({
        loop:true,
        autoplay: true,
        autoplayTimeout: 1000,
        animateOut: 'fadeOut',
        margin:0,
        items: 1,
        center: true,
        nav: false,
        navRewind: false,
        autoWidth: false,
        dotsContainer: '#sliderDots',
        dots: true,
        dotsData: true
    })
    $('.owl-dot').click(function () {
        $(".slider__row").trigger('to.owl.carousel', [$(this).index(), 300]);
      });
      
    /* $('.owl-carousel').find('.owl-nav').removeClass('disabled');
    $('.owl-carousel').on('changed.owl.carousel', function (event) {
        $(this).find('.owl-nav').removeClass('disabled');
    }); */
});