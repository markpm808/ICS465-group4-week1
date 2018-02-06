$('.ui.radio.checkbox')
    .checkbox()


function func() {
  var disaster1 = document.getElementById('1').checked;
  var disaster2 = document.getElementById('2').checked;
  var disaster3 = document.getElementById('3').checked;
  var disaster4 = document.getElementById('4').checked;


  if(disaster1)
  {
    alert(window.location.href ='http://dod.hawaii.gov/hiema/public-resources/types-of-disaster/#hurricane');
  }
  else if(disaster2)
  {
    alert(window.location.href ='http://dod.hawaii.gov/hiema/public-resources/types-of-disaster/#tsunami');
  }
  else if(disaster3)
  {
    alert(window.location.href ='http://dod.hawaii.gov/hiema/public-resources/types-of-disaster/#flood');
  }
  else if(disaster4)
  {
    alert(window.location.href ='http://dod.hawaii.gov/hiema/public-resources/types-of-disaster/#earthquake');
  }


}