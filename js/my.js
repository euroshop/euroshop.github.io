// scrolling and spying
$(function() {
	$('body').scrollspy({ target: '.inner_page_nav' })

	$("a[href^='#']").bind('click', function(event) {
		if(!history.pushState) {
			reutrn;
		}
		
		var hash = $(this).attr('href');
		history.pushState(null, null, hash);
		
		var top = $(hash.length > 1 ? hash : 'body').offset().top;
		$('html, body').stop().animate(
			{ scrollTop: top },
			1000,
			'easeInOutCubic'
		);
		event.preventDefault();
	});
});