//here we assign the total value to be 0 to start, then the total is updated as the user makes inputs
//as entries below.
var total = 0;

//here we call the userEntry funcation upon the user making the Enter keystroke.
document.getElementById('userEntry').onsubmit = enter;

//the enter function grabs the user's value just entered and assigns that value to the
//entry variable.  We then invoke the e.preventDefault() method to cancel the event without
//stopping the progression of the event.  Here we prevent the enter from refreshing the page.
//We then invoke the parseFloat on the entry because we want the value
//to have a decimal to the 100ths because that's what US currency is measured in.  We
//then assign the currencyFormat on the entry variable so we can do some currency math.
//We then perform the math taking the value entered and adding that to the total value.
//We then assign that amount as our updated total.
function enter(e) {
	e.preventDefault();
  var entry = document.getElementById('newUserEntry').value;
  var entry = parseFloat(entry);
  currency = currencyFormat(entry);
  document.getElementById('entries').innerHTML += '<tr><td></td><td>' + currency + '</td></tr>';
  total += entry;
  document.getElementById('total').innerHTML = currencyFormat(total);

  document.getElementById('newUserEntry').value = '';
}

//here we format the currency by invoking the parseFloat f(x) on the number
// to then use the number to a proper 100th decimal format and add the $ symbol
//prior to the value, then return what we have as a US currency value correctly
//formatted.
function currencyFormat(number) {
  var currency = parseFloat(number);
  currency = currency.toFixed(2);
  currency = '$' + currency;
  return currency;
}
