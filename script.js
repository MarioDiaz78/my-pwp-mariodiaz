// Smooth scrolling
$(document).ready(function () {
    $(".nav-link").on('click', function (event) {
        event.preventDefault();
        var hash = this.hash;
        var offsetTop = $(hash).offset().top;
        var extraScroll = 10;
        var scrollTo = offsetTop + extraScroll;

        $('html, body').animate({
            scrollTop: scrollTo
        }, 1500, function () {
            window.location.hash = hash;
        });
    });
});

