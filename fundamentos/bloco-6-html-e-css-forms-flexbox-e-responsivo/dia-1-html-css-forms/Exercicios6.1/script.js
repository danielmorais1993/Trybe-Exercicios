const buttonSend = document.getElementById('btn-send');
const buttonErase = document.getElementById('btn-clear');
const nome = document.querySelector('#name')
const email = document.querySelector('#email')
const textarea = document.querySelector('#text-area')




function checkAvailability(evento, Min, Max) {
  if (evento.value.length < Min || evento.value.length > Max) {
    window.alert('Invalid Data');
   
     

}
}




function callButton(event) {

  event.preventDefault();
  console.log(event.target)
  checkAvailability(nome, 10, 40);
  checkAvailability(email, 10, 50);
  checkAvailability(textarea, 0, 500);
  



  return ('All data was sent')






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
