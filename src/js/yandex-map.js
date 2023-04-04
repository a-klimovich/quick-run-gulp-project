$(document).ready(function () {
  const contactsMap = $('#contactsMap');

  const getLocation = (node) => (
    node.attr('data-map-center').split(',')
  );

  ymaps.ready(init);
  
  function init() {
    var myMap = new ymaps.Map("contactsMap", {
      center: getLocation(contactsMap),
      zoom: 7,
    });
  }
});
