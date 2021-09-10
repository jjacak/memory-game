const startMsg = document.querySelector('.start-msg');
const startBtn = document.querySelector('.start-btn')
const cardsArea = document.querySelector('.cards-area');

const test = () => {
    cardsArea.classList.add('fade-in-animation')
}

startBtn.addEventListener('click', test);