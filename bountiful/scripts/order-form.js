let dropdown = $('#fruit-dropdown');

dropdown.empty();

dropdown.append('<option selected="true" disabled>select a fruit</option>');
dropdown.prop('selectedIndex', 0);

const url = 'https://brostkyl.github.io/wdd230/bountiful/scripts/fruit.json';

// Populate dropdown with list of fruit
$.getJSON(url, function (data) {
  $.each(data, function (key, entry) {
    dropdown.append($('<option></option>').attr('value', entry.name).text(entry.name));
  })
});

let orderform = document.getElementById("orderform")
let sudmitButton = document.getElementById("order-button")
 submitButton.addEventListener('click', (Event) =>{
 alert("Order Placed!")
 window.open(confirmation.html)
 })

/*myform.addEventListener('submit', (event)=>{
    let food = document.getElementById("food").value 
    if (food.toLowerCase()) != 'pizza'){
        alert('Enter Valid Input')
        event.preventDefault();
    }
})*/

