/*
 * main.js
 * Copyright (C) 2014 KuoE0 <kuoe0.tw@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */


$(function () {
	// initial Semantic UI modules
	$('.dropdown').dropdown();

	$('.speaker.image').popup();

	if(history.pushState)
	{
		var currentAnimate = null;

		function scrollTo(hash){
			if(currentAnimate)
				currentAnimate.stop();
			currentAnimate = $('html,body').animate({
				scrollTop: $(hash).offset().top
			}, 500);
		}

		$('#fix-menu-container a').click(function (event) {
			event.preventDefault();
			var url = event.currentTarget.href;
			var hash = url.substring(url.indexOf("#"));
			history.pushState(hash, ' ', hash);
			scrollTo(hash);
		});
	}
});
