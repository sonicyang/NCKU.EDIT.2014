/*
 * main.js
 * Copyright (C) 2014 KuoE0 <kuoe0.tw@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */


$(function () {
	// initial Semantic UI modules
	$('.dropdown').dropdown();

	$(window).resize(function () {

		var target = $('div[id$="-content"] h1');

		target.each(function () {
			var w = $(window).width();

			$(this).removeClass('huge');
			$(this).removeClass('large');
			$(this).removeClass('medium');
			$(this).removeClass('small');

			if (w >= 980) {
				$(this).addClass('huge');
			}
			else if (w >= 768 && w < 980) {
				$(this).addClass('large');
			}
			else if (w > 480 && w < 768) {
				$(this).addClass('medium');
			}
			else {
				$(this).addClass('small');
			}

		});


	});

});
