$(function () {
  const breadcrumb = $(".breadcrumb"),
    links = breadcrumb.find("a");

  links.each(function () {
    const link = $(this);
    const text = link.text();
    
    link.attr("title", text);
  });
});
