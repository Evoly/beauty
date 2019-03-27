if (typeof jQuery === 'undefined') {
	throw new Error('abudagov.reporterror JavaScript requires jQuery')
}

(function($) {

	/**
	 * dobavlyaem po "range" vnachale i vkonce stroki
	 */
	function ab_makeText (text, range) {
		var textStart = document.createRange();
			textStart.setStartBefore(text.getRangeAt(0).startContainer);
			textStart.setEnd(text.getRangeAt(0).startContainer,text.getRangeAt(0).startOffset);
		textStart = textStart.toString();

		textEnd = text.getRangeAt(0).cloneRange();
			textEnd.setStart(text.getRangeAt(0).endContainer,text.getRangeAt(0).endOffset);
			textEnd.setEndAfter(text.getRangeAt(0).endContainer);
		textEnd = textEnd.toString();

		textStart = textStart.substr(textStart.length-range,textStart.length);
		textEnd = textEnd.substr(0,range);
		text = $('<div/>').text(text).html();
		textStart = $('<div/>').text(textStart).html();
		textEnd = $('<div/>').text(textEnd).html();
		text = textStart+'<b>'+text+'</b>'+textEnd;

		return text.replace(/[\s]+/g, ' ');
	}

	/**
	 * vy`vodim formy
	 */
	function ab_makeForm (strError, text, imgSrc) {
		$('#ab_reporterror').remove();
		form = '<div class="ab_reporterror" id="ab_reporterror">';
			form += '<div class="ab_reporterror-wrap">';
				form += '<a href="#" class="ab_reporterror__close"></a>';
				form += '<div class="ab_reporterror-inner">';
					form += '<div class="ab_reporterror__title">'+BX.message('AB_RS_TITLE')+'</div>';
					if (!strError) {
						form += '<form method="post" action="/" class="ab_reporterror__form">';
							if (imgSrc.length > 0) {
								form += '<input type="hidden" name="abimg" value="'+imgSrc+'">';
								form += '<div class="ab_reporterror__error-img"><img src="'+imgSrc+'" alt="screenshot" /></div>';
							}
							form += '<div class="ab_reporterror__error-text">'+text+'</div>';
							text = $('<div/>').text(text).html();
							form += '<input type="hidden" name="aberrortext" value="'+encodeURIComponent(text)+'">';
							form += '<input type="hidden" name="aburl" value="'+encodeURIComponent(window.location.href)+'">';
							form += '<textarea maxlength="500" name="abtext" placeholder="'+BX.message('AB_RS_PLACEHOLDER')+'" class="ab_reporterror__form-textarea"></textarea>';
							form += '<input type="submit" name="abreportsend" value="'+BX.message('AB_RS_BUTTON')+'" class="ab_reporterror__form-submit"><div class="ab_clear"></div>';
						form += '</form';
					} else {
						form += '<div class="ab_reporterror__error-text">'+strError+'</div>';
					}
				form += '</div>';
			form += '</div>';
		form += '</div>';
		$('body').append(form);
		setTimeout(function(){
			newForm = $('#ab_reporterror');
			newForm.addClass('ab_reporterror--active');
			newForm.find('.ab_reporterror__close').on('click', function(){
				newForm.removeClass('ab_reporterror--active');
				return false;
			});
			newForm.find('form').on('submit', function(){
				dataForm = newForm.find('form').serializeArray().reduce(function(obj, item) {
				    obj[item.name] = item.value;
				    return obj;
				}, {});
				$.post('/', {
					module: "abudagov.reporterror",
					src: dataForm.abimg,
					url: dataForm.aburl,
					text: encodeURIComponent(dataForm.abtext),
					errortext: dataForm.aberrortext,
					ncc: '1'
				}, function(res) {
					ab_makeForm(BX.message('AB_RS_SEND_TEXT'));
					setTimeout(function(){
						newForm.removeClass('ab_reporterror--active');
					}, 5000);
				});

				return false;
			});
		}, 100);
	}

	/**
	 * Poluchaem vy`delenny`j tekst i delaem skrinshot
	 */
	function ab_getForm () {
	    text = "";
    	img = "";
    	range = 80;

	    if (window.getSelection) {
	        text = window.getSelection();
	    }else if (document.getSelection) {
	        text = document.getSelection();
	    }
	    if (text.toString().length > 0) {
	    	if (text.toString().length < 500) {
	    		// prikreplyaem skrinshot
				parent = text.focusNode.parentNode;
				html2canvas($(parent).parent(), {
					onrendered: function(canvas) {
				    	$.post('/', {module: "abudagov.reporterror", img: canvas.toDataURL('image/png').replace(/data:image\/png;base64,/, ''), ncc: '1'}, function(data){
				    		imgSrc = data;
				    		text = ab_makeText(text, range);
				    		ab_makeForm(false, text, imgSrc);
				    	});
					}
				});
				return false;
	    	} else {
	    		return BX.message('AB_RS_MAX_SIZE');
	    	}
	    } else {
	    	return BX.message('AB_RS_MIN_SIZE');
	    }
	}

	$(document).ready(function(){
		$(document).on('keypress', function(e) {
			var keyCode = e.keyCode || e.charCode || e.which;
			if (keyCode == 10 || keyCode == 13) {
				if (e.ctrlKey) {
					strError = ab_getForm();
					if (strError) {
						ab_makeForm('<b>'+strError+'</b>');
					}
				}
			}
		});
		$('.ab_report-error').on('click', function(){
			strError = ab_getForm();
			if (strError) {
				ab_makeForm('<b>'+strError+'</b>');
			}
			return false;
		});
	});

})(jQuery);