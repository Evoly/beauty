(function($) {
	$(document).ready(function() {
		if (!window.location.search) {
			ncc = '?ncc=1';
		} else {
			ncc = '&ncc=1';
		}
		$.get(window.location.href+ncc, function(data) {
			block = $('<div>'+data+'</div>').find('#ab-change-themes');
			$('body').prepend(block);
		});
	});
})(jQuery);