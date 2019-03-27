//(function($){$(document).ready(function(){$(".fancybox").fancybox({helpers:{overlay:{locked:false}}})})})(jQuery);

//(function($){$(document).ready(function(){$(".fancybox-detail").fancybox({helpers:{overlay:{locked:false}}})})})(jQuery);
$(document).ready(function() {
  $('.fancybox-detail').fancybox();
  $('[data-fancybox-group="slider-sm"]').fancybox();
  const icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 792.033 792.033"><path d="M617.858,370.896L221.513,9.705c-13.006-12.94-34.099-12.94-47.105,0c-13.006,12.939-13.006,33.934,0,46.874     l372.447,339.438L174.441,735.454c-13.006,12.94-13.006,33.935,0,46.874s34.099,12.939,47.104,0l396.346-361.191     c6.932-6.898,9.904-16.043,9.441-25.087C627.763,386.972,624.792,377.828,617.858,370.896z"/></svg>'

  const owlOptions_1 = {
    loop: true,
    margin: 10,
    nav: true,
    navText: [icon, icon],
    dot: false,
    items: 1,
    responsive: {
      979: {
        nav: true
      },
      0: {
        nav: false
      }
    }
  };

  const owlOptions_4 = {
    loop: true,
    margin: 20,
    nav: true,
    dot: false,
    items: 4,
    responsive: {
      1200: {
        nav: true,
        items: 4
      },
      979: {
        nav: true,
        items: 3
      },
      400: {
        items: 2,
        nav: false,
        margin: 10,
      },
      0: {
        items: 1,
        nav: false,
        margin: 10,
      }
    }
  };

  $('.js-slider-sm').owlCarousel(owlOptions_4);

  $('.js-detail-slider').owlCarousel(owlOptions_1);

  $('input[name="tel"]').inputmask({
    "mask": "+7 (999) 999-9999"
  });

  // валидация форм
  function checkInput(el) {
    const $this = el;
    const value = $this.val();
    const inputType = $this.attr('data-type');

    if (inputType === 'text') {
      if (!value.match(/^[\u0400-\u04FF]*$/)) {
        $this.parent().addClass('has-error');
      } else {
        $this.parent().removeClass('has-error');
      }
    }

    // phone
    if (inputType === 'tel') {
      const tel = value.replace(/[^0-9]/g, '');
      if (tel.length !== 11) {
        $this.parent().addClass('has-error');
      } else {
        $this.parent().removeClass('has-error');
      }
    }

    // checkbox
    if (inputType === 'checkbox' && !$this.prop('checked')) {
      $this.parent().addClass('has-error');
    }

    // Количество

    if (inputType === 'amount' && value < 1) {
      $this.parent().addClass('has-error');
    }

    //проверка на пустое значение
    if (el.prop('required') && value === '') {
      console.log($this.parent());
      $this.parent().addClass('has-error');
    }
  }

  $(document).on('input', '.modal-body input', function() {
    $(this).parent().removeClass('has-error');
    checkInput($(this));
  });

  //form
  function serializeFormJSON() {
    const o = {};
    const a = this.serializeArray();
    $.each(a, function() {
      if (o[this.name]) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }
        o[this.name].push(this.value || '');
      } else {
        o[this.name] = this.value || '';
      }
    });
    return o;
  };

  $.fn.serializeFormJSON = serializeFormJSON;
  $(document).on('click', '.js-submit', function(e) {
    e.preventDefault();
    const $this = $(this);
    const form = $this.parents('form');
    const url = form.attr('action');
    const input = form.find('input');
    const textarea = form.find('textarea');

    input.each(function() {
      checkInput($(this));
    });
    textarea.each(function() {
      checkInput($(this));
    });

    if (!form.find('.has-error').length) {
      $.ajax({
        type: 'POST',
        url: `${url}?_format=json`,
        data: JSON.stringify(form.serializeFormJSON()),
        contentType: 'application/json'
      });
      $('.modal').modal('hide');
    }
  });
});
