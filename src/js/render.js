import showDescriptionBar from './hw-5-3-function';
import Character from './app';

const root = document.querySelector('.root');

const charArr = [
  showDescriptionBar(new Character('Лук', 'Bowman')),
  showDescriptionBar(new Character('Мечник', 'Swordsman')),
  showDescriptionBar(new Character('Маг', 'Magician')),
  showDescriptionBar(new Character('Нежить', 'Undead')),
  showDescriptionBar(new Character('Зомби', 'Zombie')),
  showDescriptionBar(new Character('Демон', 'Daemon')),
];

charArr.forEach((item) => {
  root.insertAdjacentHTML('beforeend', `<div class="character">${item}</div>`);
});
