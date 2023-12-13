let dropdown = $('#fruit-dropdown');

dropdown.empty();

dropdown.append('<option selected="true" disabled>Choose Fruit</option>');
dropdown.prop('selectedIndex', 0);

const url = 'https://brostkyl.github.io/wdd230/bountiful/scripts/fruit.json';

// Populate dropdown with list of fruits
$.getJSON(url, function (data) {
  $.each(data, function (key, entry) {
    dropdown.append($('<option></option>').attr('value', entry.name).text(entry.name));
  })
});
