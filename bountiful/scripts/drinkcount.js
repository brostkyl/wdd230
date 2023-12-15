const DRINK_COUNT = 'drink-count'
const CURRENT = 0;

function getDiscoverMessage(){
    let message = "You have not ordered any drinks yet!"
    let lastVisitValue = localStorage.getItem(DRINK_COUNT)
    let today = new Date();
    if (lastVisitValue != null){
        lastVisit = parseInt(lastVisitValue)
        daysSinceLastVisit = Math.floor((today.getTime() - lastVisit) + CURRENT)
        
            if (daysSinceLastVisit == 1){
                message = "You have ordered 1 drink!"
            }
            else{
                message = `You have ordered ${daysSinceLastVisit} drinks!`
            }
            
        }
    }
    localStorage.setItem(DRINK_COUNT, `${today.getTime()}`)
    return message;
}


var count = 0;
$('.ticketf12c .add-amount').click(function() {
  count++;
});
$('.ticketf12c .subtract-amount').click(function() {
  count--;
});

// Get and return current count. Push to dataLayer
$('.test-submit-button').click(function(e) {
  e.preventDefault();
  console.log(count);

  dataLayer.push({
    'event': 'productDetail',
    'ecommerce': {
      'detail': {
        // Family tickets   
        'products': [{
          'name': 'Ticket Type Name Goes here',
          'id': '',
          'price': '100.00',
          'brand': 'Some Brand',
          'category': 'Ticket',
          'quantity': count
        }]
      }
    }
  });

});


// Set the message
document.querySelector("#discover-message h3").textContent = getDiscoverMessage()