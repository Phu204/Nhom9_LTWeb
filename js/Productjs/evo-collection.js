$(document).ready(function($) {
    $('.group-category').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true
                }
            }
        ]
    });
    $('.slide-collection').slick({
        lazyLoad: 'progressive',
        autoplay: true,
        autoplaySpeed: 3500,
        fade: true,
        cssEase: 'linear',
        dots: true,
        arrows: false,
        infinite: true
    });
});