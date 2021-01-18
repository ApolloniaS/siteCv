import { getContainers, displayCopyright } from '../data/custom-function';
// import { translations } from '../data/translated-data';

export function generateBackground() {
  getContainers(0, 'backgroundContainer', 'background');
  // squelette de la page background EN
  const background = document.querySelector('.background');
  background.innerHTML += `
  <div class="copyInfoTop"></div>
  <div class="switch-language">Français</div>
  <div class="title-bottom">BACKGROUND__</div>
  <div class="nav-arrow-down">
    <a href="#index"><i class="fas fa-arrow-down direction"></i></a>
  </div>
  `;

  const copyInfo = document.querySelectorAll('.copyInfoTop');
  displayCopyright(copyInfo[0]);

  // switch EN -> FR
  const switchToFR = document.querySelectorAll('.switch-language');
  switchToFR[0].addEventListener('click', () => {
    window.location = '#parcours';
  });
}
