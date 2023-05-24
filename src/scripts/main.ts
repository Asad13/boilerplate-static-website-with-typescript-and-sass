const pEl = document.getElementById('title') as HTMLParagraphElement;
const bEl = document.getElementById('change') as HTMLButtonElement;

bEl.addEventListener('click', () => {
  pEl.innerHTML = 'Changed';
});
