// scrolling and spying
$(function() {
	$('body').scrollspy({ target: '.inner_page_nav' })

	$(".inner_page_nav a[href^='#']").bind('click', function(event) {
		var hash = this.hash;

		$('html, body').stop().animate(
			{scrollTop: $(hash).offset().top},
			1000,
			'easeInOutSine',
			function() { window.location.hash = hash; }
		);

		event.preventDefault();
	});
});