import { getContainers, displayCopyright } from '../data/custom-function';

export function generateParcours() {
  getContainers(1, 'parcoursContainer', 'parcours');
  // squelette de la page parcours FR
  const parcours = document.querySelector('.parcours');
  parcours.innerHTML += `
    <div class="copyInfoTop"></div>
    <div class="title-top">PARCOURS__</div>
    <div class="nav-arrow-down">
      <a href="#index"><i class="fas fa-arrow-down direction"></i></a>
    </div>
  `;

  const copyInfo = document.querySelector('.copyInfoTop');
  displayCopyright(copyInfo);
}
