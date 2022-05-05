$(document).ready(function () {
    $('#slides').superslides({
        animation: 'fade',
        play: 3000,
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["Innovator", "Investor", "Entrepreneur", "Musician", "Digital Artist"],
        typeSpeed: 100,
        loop: true,
        startDelay: 200,
        showCursor: false
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            1000: {
                items: 3
            },
            1500: {
                item: 4
            }
        }
    });


    var skillsTopOffset = $(".skillSection").offset().top;
    var statsTopOffset = $(".statsSection").offset().top;
    var countUpFinished = false;

    $(window).scroll(function () {
        if (window.scrollY > skillsTopOffset - $(window).height() + 150) {
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#ef1e25',
                trackColor: '#f2f2f2',
                scaleColor: '#dfe0e0',
                scaleLength: 3,
                lineWidth: 10,
                size: 150,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }

        if (!countUpFinished && window.scrollY > statsTopOffset - $(window).height() + 150) {
            $(".counter").each(function(){
                var element = $(this);
                var endVal = parseInt(element.text());

                element.countup(endVal);
            })

            countUpFinished = true;
        }

    });




});