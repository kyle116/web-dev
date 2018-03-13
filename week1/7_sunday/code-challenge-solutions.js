// Convert Celsius to Fahrenheit
var celsius = prompt('Enter Temp in Celsius');
var fahrenheit = (9 / 5) * celsius + 32;
console.log(fahrenheit);

// Which January starts on a Sunday between a range of years
for(var year = 2014; year <= 2050; year++) {
  var d = new Date(year, 0, 1);
  if ( d.getDay() === 0 ) {
    console.log("January starts on Sunday in year: " + year);
  }
}
