/**
 * Created by cwilliams on 1/9/17.
 */

;(function ($) {
	'use strict';
	$(document).ready(function () {
		$('.wallet-tile a').click(function (event) {
			event.stopImmediatePropagation();
		});

		$('.wallet-modal-container button[data-url]').click(function (event) {
			window.open($(event.currentTarget).data('url'));
		});
	});
}(jQuery));
