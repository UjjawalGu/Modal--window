'use strict'
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close');
const btnsOpenModal = document.querySelectorAll('.btn');

const openmodal = function () {
    overlay.classList.remove('hidden');
    modal.classList.remove('hidden');
};
const closemodal = function (){
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
}

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openmodal);


btnCloseModal.addEventListener('click', closemodal);
overlay.addEventListener('click', closemodal);


console.log(window);
