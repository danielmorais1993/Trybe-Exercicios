const buttonSend = document.getElementById('btn-send');
const buttonErase= document.getElementById('btn-clear');



function callButton(event){
  event.preventDefault();

}

function Erase(event){
  document.querySelector('#name').value='';
  document.querySelector('#email').value='';
  document.querySelector('#opt1').checked=false;
  document.querySelector('#opt2').checked=false;
  document.querySelector('#opt3').checked=false;
  document.querySelector('#opt4').checked=false;
  document.querySelector('#date-call').value='';
  document.querySelector('#check1').checked=false;
  document.querySelector('#check2').checked=false;
  document.querySelector('#text-area').value='';





}




buttonSend.addEventListener('click',callButton)

buttonErase.addEventListener('click', Erase)

