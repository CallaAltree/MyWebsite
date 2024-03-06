
const loginForm = document.getElementById('login-form');
const loginButton = document.getElementById('login-form-submit');
const loginErrorMsg = document.getElementById('login-error-msg');

var strikeCounter = 0;
let changeBackdrop;

loginButton.addEventListener('click', e => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;



  if (username === 'callaxoxo' && password ==='1009') {
    alert("Don't be basic, be SLAYSIC.");
    window.location = 'calla_homepage.html';
  } else {
    alert('WROOOOOOOOOOOOOOONG!');
    
     strikeCounter++;
    


      if ( strikeCounter === 2) {
     window.location = 'Calla_YOUNEEDTOLEAVE.html';

}

  }



});




