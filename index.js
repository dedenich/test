let state = {
  step: 0,
}

const getStep = () => state.step;

const updateStep = () => {state.step = state.step + 1}

const progress = document.getElementById('progress');

const button = document.getElementById('form-button');

const slides = document.querySelectorAll('.form__slide');

const inputEmail = document.getElementById('ch-4-2');

const telBlock = document.querySelector('label[for="input-tel"]');
const emailBlock = document.querySelector('label[for="input-email"]');

const updateProgress = () => {
  progress.setAttribute('value', getStep());
}

const changeSlide = () => {
  slides[getStep()].classList.toggle('visually-hidden');
  updateStep();
  updateProgress();
  slides[getStep()].classList.toggle('visually-hidden');
}

const updateButton = () => {
  button.textContent = 'Отправить и получить ответ';
  button.setAttribute('type', 'submit');
}

button.addEventListener('click', () => {
  if (getStep() < (slides.length - 2)) {
    changeSlide();
  } else if (getStep() < (slides.length - 1)) {
    updateButton();
    changeSlide();
  };
});

const hideBlock = (el) => {
  el.classList.add('visually-hidden');
  el.firstChild.setAttribute('required', false);
}

document.getElementById('container').addEventListener('input', (e) => {
  if (e.target.closest('input') !== inputEmail) {
    telBlock.classList.remove('visually-hidden');
    hideBlock(emailBlock);
  } else {
    emailBlock.classList.remove('visually-hidden');
    hideBlock(telBlock);
  };
})