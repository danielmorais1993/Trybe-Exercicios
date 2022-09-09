const buttonSend = document.getElementById('btn-send');
const buttonErase = document.getElementById('btn-clear');
const nome = document.querySelector('#name')
const email = document.querySelector('#email')
const textarea = document.querySelector('#text-area');
const dateValidity = document.querySelector("#date-call");


$(function() {
  $( "#calendario" ).datepicker({
      showOn: "button",
      buttonImage: "googlecalendar.jpeg",
      buttonImageOnly: true,
      showButtonPanel:true,
      changeMonth: true,
      changeYear: true
      
      
  });
  $("#calendario").datepicker({dateFormat: 'dd-mm-yy'});
 
});









function checkAvailability(evento, Min, Max) {
  if (evento.value.length < Min || evento.value.length > Max) {
    return false;
   }
   return true;
}




function callButton(event) {
  


  
  console.log(event.target)
  if(checkAvailability(nome, 10, 40) && checkAvailability(email, 10, 50) && checkAvailability(textarea, 0, 500)){
    alert('all data sent');
  }else{
    alert('invalid data , check the password or email  correctly');
  }
  event.preventDefault();
 
}

function Erase(event) {
  document.querySelector('#name').value = '';
  document.querySelector('#email').value = '';
  document.querySelector('#opt1').checked = false;
  document.querySelector('#opt2').checked = false;
  document.querySelector('#opt3').checked = false;
  document.querySelector('#opt4').checked = false;
  document.querySelector('#date-call').value = '';
  document.querySelector('#check1').checked = false;
  document.querySelector('#check2').checked = false;
  document.querySelector('#text-area').value = '';





}




buttonSend.addEventListener('click', callButton)



buttonErase.addEventListener('click', Erase)


