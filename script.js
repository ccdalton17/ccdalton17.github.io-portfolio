const toggleSwitch = document.querySelector('#toggle-switch');
toggleSwitch.addEventListener('click', function() {
  document.body.classList.toggle('night-mode');
  //const darkElements = document.querySelectorAll('.dark');
  //for(let i=0; i<darkElements.length; i++){
  //  darkElements[i].classList.toggle('night-mode');
  //}
});

