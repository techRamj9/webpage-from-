const sigupButton=document.getElementById('signUpButton');
const sigInButton=document.getElementById('signInButton');
const sigInForm=document.getElementById('signIn');
const sigUpForm=document.getElementById('signup');

signUpButton.addEvetListener('click', function (){
 signInForm.style.display="none";
 singUpForm.style.display="block ";
})
signInButton.addEvetListener('click', function (){
  sigInForm.style.display="block";
  singnUpForm.style.display="none";
})
