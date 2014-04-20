//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
		var name = $anchor.attr('href').substr(1);
		var target = $('a[name=' + name + ']');
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
});