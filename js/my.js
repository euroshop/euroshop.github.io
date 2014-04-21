// scrolling and spying
$(function() {
	$('body').scrollspy({ target: '.inner_page_nav', offset: 200 })

	$("a[href^='#']").bind('click', function(event) {
		var hash = $(this).attr('href');
		var top = $(hash.length > 1 ? hash : 'body').offset().top - $('body').css('padding-top').replace('px', '');
		$('html, body').stop().animate(
			{ scrollTop: top },
			1000,
			'easeInOutCubic'
		);
		
		event.preventDefault();
	});
});