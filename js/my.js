//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
	$(".nav a[href^='#']").bind('click', function(event) {
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