
$.fn.breadcrumb = function(options) {
  var el = $(this);

  // truncate individual titles if over set length
  $('a', el).each(function() {
    var crumbTitle = $(this).text();
    if (crumbTitle.length > options.crumbMaxLength) {
      $(this).text(
        $.trim(crumbTitle).substring(0, 40).split(" ").slice(0, -1).join(" ") + "..."
      );
    }
  });

  // remove the link from the current page crumb
  $('.active', el).replaceWith(
    $('<span/>').text($('.active', el).text())
  );

  var crumbs = $.map($('a, span', el).toArray(), function(x) {
    return x.outerHTML;
  });

  // if truncation needed
  if (crumbs.length > options.maxLevels) {
    var firstCrumbs = crumbs.slice(0, options.startCrumbs);
    var hideCrumbs = '<a href="#." title="Show all">...</a>';
    var lastCrumbs = crumbs.slice(crumbs.length - options.endCrumbs);
    var newCrumbs = firstCrumbs.concat([hideCrumbs]).concat(lastCrumbs);
    el.html(options.intro + newCrumbs.join(options.separator));
  } else {
    el.html(options.intro + crumbs.join(options.separator));
  }

  // show the hidden breadcrumbs when ellipsis is clicked
  $('[title]', el).click(function() {
    el.html(options.intro + crumbs.join(options.separator));
  });
};

// breadcrumb truncation settings
$('.breadcrumb').breadcrumb({
  intro: '',
  separator: ' > ',
  maxLevels: 3,
  startCrumbs: 1,
  endCrumbs: 3,
  crumbMaxLength: 40
});