// scrolling and spying
$(function() {
	$('body').scrollspy({ target: '.inner_page_nav' })

	$("a[href^='#']").bind('click', function(event) {
		var hash = $(this).attr('href');
		var top = $(hash.length <= 1 ? 'body' : hash).offset().top;

		$('html, body').stop().animate(
			{ scrollTop: top },
			1000,
			'easeInOutCubic'
		);

		//function() { window.location.hash = hash; }
		window.location.hash = hash;

		event.preventDefault();
	});
});