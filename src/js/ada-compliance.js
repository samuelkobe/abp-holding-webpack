// Establishing Elements
const ada_open = document.getElementById('ada-open');
const ada_content = document.getElementById('ada-content');
const ada_close = document.getElementById('ada-close');

// add and remove ADA Compliance class 'open'
ada_open.addEventListener('click', e => {
  ada_content.classList.add('open');
})

ada_close.addEventListener('click', e => {
  ada_content.classList.remove('open');
})
