$(document).ready(function($) {
    $('.home-slider').slick({
        lazyLoad: 'ondemand',
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        cssEase: 'linear',
        dots: true,
        arrows: false,
        infinite: true
    });
    $('.evo-owl-blog').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    });
    $('.brand-slick').slick({
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
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
    });
    $('.slick_ajax_tab').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true
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
    $('.three-col-slick').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(".not-dqtab").each(function(e) {
        var $this1 = $(this);
        var datasection = $this1.closest('.not-dqtab').attr('data-section');
        $this1.find('.tabs-title li:first-child').addClass('current');
        var view = $this1.closest('.not-dqtab').attr('data-view');
        $this1.find('.tab-content').first().addClass('current');

        var _this = $(this).find('.content .button_show_tab');
        var droptab = $(this).find('.tab-desktop');

        $(_this).click(function() {
            if ($(droptab).hasClass('evo-open')) {
                $(droptab).addClass('evo-close').removeClass('evo-open');
            } else {
                $(droptab).addClass('evo-open').removeClass('evo-close');
            }
        });
        $this1.find('.tabs-title.ajax li').click(function() {
            $(droptab).addClass('evo-close').removeClass('evo-open');
            var $this2 = $(this),
                tab_id = $this2.attr('data-tab'),
                url = $this2.attr('data-url');
            var etabs = $this2.closest('.e-tabs');
            etabs.find('.tab-viewall').attr('href', url);
            etabs.find('.tabs-title li').removeClass('current');
            etabs.find('.tab-content').removeClass('current');
            $this2.addClass('current');
            etabs.find("." + tab_id).addClass('current');
            if (!$this2.hasClass('has-content')) {
                $this2.addClass('has-content');
                getContentTab(url, "." + datasection + " ." + tab_id, view);
            }
        });
    });
    $('.not-dqtab .next').click(function(e) {
        var count = 0
        $(this).parents('.content').find('.tab-content').each(function(e) {
            count += 1;
        })
        var str = $(this).parent().find('.tab-titlexs').attr('data-tab'),
            res = str.replace("tab-", ""),
            datasection = $(this).closest('.not-dqtab').attr('data-section');
        res = Number(res);
        if (res < count) {
            var current = res + 1;
        } else {
            var current = 1;
        }
        action(current, datasection);
    })
    $('.not-dqtab .prev').click(function(e) {
        var count = 0
        $(this).parents('.content').find('.tab-content').each(function(e) {
            count += 1;
        })
        var str = $(this).parent().find('.tab-titlexs').attr('data-tab'),
            res = str.replace("tab-", ""),
            datasection = $(this).closest('.not-dqtab').attr('data-section'),
            res = Number(res);
        if (res > 1) {
            var current = res - 1;
        } else {
            var current = count;
        }
        action(current, datasection);
    })

    function action(current, datasection, view) {
        $('.' + datasection + ' .tab-titlexs').attr('data-tab', 'tab-' + current);
        var text = '',
            url = '',
            tab_id = '';
        $('.' + datasection + ' ul.tabs.tabs-title.hidden-xs li').each(function(e) {
            if ($(this).attr('data-tab') == 'tab-' + current) {
                var $this3 = $(this);
                title = $this3.find('span').text();
                url = $this3.attr('data-url');
                tab_id = $this3.attr('data-tab');
                if (!$this3.hasClass('has-content')) {
                    $this3.addClass('has-content');
                    getContentTab(url, "." + datasection + " ." + tab_id, view);
                }
            }
        })
        $("." + datasection + " .tab-titlexs span").text(title);
        $("." + datasection + " .tab-content").removeClass('current');
        $("." + datasection + " .tab-" + current).addClass('current');
    }

    function getContentTab(url, selector, view) {
        if (view == 'grid_4') {
            url = url + "?view=ajaxload4";
        } else {
            url = url + "?view=ajaxload";
        }
        var dataLgg = $(selector).parent().find('.tab-1 .owl-carousel').attr('data-lgg-items');
        var loadding = '<div class="loading"><div class="chasing-dots"><div></div><div></div><div></div></div></div>';
        $.ajax({
            type: 'GET',
            url: url,
            beforeSend: function() {
                $(selector).html(loadding);
            },
            success: function(data) {
                var content = $(data);
                $(selector).html(content.html());
                awe_lazyloadImage();
                ajaxCarousel(selector);
                $('.slick_ajax_tab .add_to_cart').bind('click', addToCart);
                if (window.BPR)
                    return window.BPR.initDomEls(), window.BPR.loadBadges();
            },
            dataType: "html"
        });
    }

    function ajaxCarousel(selector) {
        $(selector + ' .slick_ajax_tab').each(function() {
            $(this).slick({
                dots: false,
                infinite: false,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 4,
                responsive: [{
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4
                        }
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            dots: true
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
        })
    }
});