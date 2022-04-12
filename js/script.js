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


})