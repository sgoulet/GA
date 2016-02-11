//here we establish the button IDs that we're going to be
//using to get the conversions happening.
document.getElementById('convert').onclick = tempConvert;
document.getElementById('reset').onclick = reset;

//this f(x) is processed following the user clicking on the
//convert button.
function tempConvert() {
//here we take the value from the input field that the user
//has altered to perform conversion math on afterwards.
  var fahrenheit = document.getElementById("fahrenheit").value;
  var celsius = document.getElementById("celsius").value;

//this if/else conditional statement checks to see which input
//the user has altered, then perform the calculation on the
//opposite input and display that value.  We want to perform
//math on floats, not integers because the wicked accurate wx
//people are always right and they want to be accurate down to
//the 10th of a degree.
  if (fahrenheit != '') {
    celsius = (parseFloat(fahrenheit) - 32) / 1.8;
  } else {
    fahrenheit = (parseFloat (celsius) * 1.8) + 32;
  }

//here we place the converted temp value from the tempConvert
//f(x) above & we place it in the appropriate input.  We also
//only care about the value to the 10th position, so we use
//parseFloat to cut the value to 1 digit after the decimal.
document.getElementById('fahrenheit').value =
parseFloat(fahrenheit).toFixed(1);

document.getElementById('celsius').value =
parseFloat(celsius).toFixed(1);
}

//here we clear the input temperature values through the
//button click by the user.
function reset(){
  document.getElementById('fahrenheit').value = '';
  document.getElementById('celsius').value = '';
}
