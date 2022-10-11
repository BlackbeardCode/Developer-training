const user = document.querySelector('.sidenav');
const openUser = document.querySelector('.openUser');
const setup = document.querySelector('.sidenav_setup');
const openSetup = document.querySelector('.openSetup');
const button = document.querySelector('#button');

console.log(button);
openUser.addEventListener('click', (e) => {
  e.preventDefault();
  user.classList.toggle('hidden');
  console.log('user button clicked!');
});

openSetup.addEventListener('click', (e) => {
  e.preventDefault();
  setup.classList.toggle('hidden');
  console.log('setup button clicked!');
});

function openExample() {
  let x = document.querySelector('#button');
  x.disabled = true;
}
