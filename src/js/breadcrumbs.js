$(function() {
  var breadcrumb = $('.breadcrumb'),
      links = breadcrumb.find('a');

  links.each(function() {
    var link = $(this),
        text = link.text();
    link.attr('title', text);
  });
});
