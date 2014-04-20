//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
		var $t = $($anchor.attr('href'));
        $('html, body').stop().animate({
            scrollTop: $t.offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});