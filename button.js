const body = document.getElementById('body');
const btn = document.getElementById('button');
const modal = document.querySelector('.modal');
const button = document.querySelector('#btn');
const button3 = document.querySelector('#button3');
const button4 = document.querySelector('#button4');

button4.addEventListener('click', clearAll);

button3.addEventListener('click', removeModal);

btn.addEventListener('click', openModal);

button.addEventListener('click', openBtn);

function openBtn() {
    btn.style.display = 'flex';
    button3.style.display = 'block';
    button4.style.display = 'block';
}

function openModal() {
    modal.style.display = 'block';
}

function removeModal() {
    modal.style.display = 'none';
}

function clearAll() {
    modal.style.display = 'none';
    button3.style.display = 'none';
    btn.style.display = 'none';
    button4.style.display = 'none';
}