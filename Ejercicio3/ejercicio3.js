function temperatura(celcius)
{
  var f=celcius*(9/5)+5;
  return f;
}

function convertirCelsius () {

  rpta.innerText  = temperatura(  document.getElementById('nro').value  ) ;
}
