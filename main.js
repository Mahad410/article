const btn = document.getElementById('share');
const box = document.getElementById('box');
btn.addEventListener('click', () => {
    box.classList.toggle('show');
    btn.classList.toggle('color');
})