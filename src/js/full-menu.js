(function($) {

	$(function() {

		var isOpen = false,
			$overlay = $('[data-js-overlay-menu]'),
			$burger = $('[data-js-open-menu]');

		$burger.click(function() {
			var $this = $(this);

			isOpen = !isOpen;

			$this.toggleClass('is-active', isOpen);
			$overlay.toggleClass('is-open', isOpen);

			if (isOpen) {
				window.noScroll.on();
				$overlay.attr('aria-hidden', 'false');
				$burger.attr('aria-expanded', 'true');
			} else {
				window.noScroll.off();
				$overlay.attr('aria-hidden', 'true');
				$burger.attr('aria-expanded', 'false');
			}
		});

	});

}(jQuery));
