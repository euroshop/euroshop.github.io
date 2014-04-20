// scrolling and spying
$(function() {
	$('body').scrollspy({ target: '.inner_page_nav' })

	$(".inner_page_nav a[href^='#']").bind('click', function(event) {
		var top = $(this.hash).offset().top;

		$('html, body').stop().animate(
			{ scrollTop: top },
			1000,
			'easeInOutCube'
//			function() { window.location.hash = hash; }
		);

		event.preventDefault();
	});
});