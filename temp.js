function convert() {
  const fahrenheitInput = document.getElementById('fahrenheit');
  const celsiusInput = document.getElementById('celsius');

  if (fahrenheitInput.value !== '') {
    const fahrenheit = parseFloat(fahrenheitInput.value);
    const celsius = (fahrenheit - 32) * (5 / 9);
    celsiusInput.value = celsius.toFixed(2);
  }

  else {
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * (9 / 5)) + 32;
    fahrenheitInput.value = fahrenheit.toFixed(2);
	
  }
}