'use strict';

(function ($) {
  $.fn.svgIcon = function(options) {
    var opts = $.extend({}, $.fn.svgIcon.options, options);

    if ($.fn.svgIcon.loading.indexOf(opts.path) > -1) {
      return;
    }

    if (!$.fn.svgIcon.icons) {
      $.fn.svgIcon.loading.push(opts.path);
      loadSvg(opts);
      return;
    }

    this.each(function () {
      if ($(this).children('svg').length > 0) {
        return;
      }

      var name    = $(this).attr('data-icon'),
          svg     = $.fn.svgIcon.icons.getElementById(name),
          classes = $(this).attr('data-icon-class') + ' iname-' + name;

      if (svg) {
        svg = svg.outerHTML;

        var html = svg.replace(/<symbol/g, '<svg class="'+classes+'" '+(!~svg.indexOf('xmlns') ? ' xmlns="http://www.w3.org/2000/svg"' : '')).replace(/symbol>/g, 'svg>');
        $(this).append(html);
      }
    });

    return this;
  };

  function loadSvg(options) {
    // Without $(window).on('load') this method is called very
    // early so the options path has not been set yet.
    if (!options.path) {
      return;
    }

    $.get(options.path, function (response) {
      $.fn.svgIcon.loading.splice($.fn.svgIcon.loading.indexOf(options.path), 1);
      $.fn.svgIcon.icons = response;
      $('[data-icon]').svgIcon();
    });
  }

  $.fn.svgIcon.icons = null;
  $.fn.svgIcon.loading = new Array;

  $.fn.svgIcon.options = {
    path: null,
    classes: '',
  };

  // $(window).on('load', function () {
    $('[data-icon]').svgIcon();
  // });

}(jQuery));