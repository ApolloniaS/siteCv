import { getContainers, displayCopyright } from '../data/custom-function';
import { projects } from '../data/projects-data';

export function generateProjets() {
  getContainers(3, 'projetsContainer', 'projets');

  // squelette de la page projets FR
  const projets = document.querySelector('.projets');
  projets.innerHTML += `
  <div class="nav-arrow-up">
    <a href="#index">
      <i class="fas fa-arrow-up direction"></i>
    </a>
  </div>
  <div class="switch-language">English</div>
  <div class="projects-main">
  <div class="projects-menu"></div>            
  <div class="video"></div>
  </div>
  <div class="details"></div>
  <div class="copyInfoBottom"></div>
  <div class="title-bottom">PROJETS__</div>
  `;

  const copyInfo = document.querySelectorAll('.copyInfoBottom');
  displayCopyright(copyInfo[2]);

  // génération du menu
  // et du projet correspondant
  const projectsMenu = document.querySelector('.projects-menu');
  const video = document.querySelector('.video');
  const details = document.querySelector('.details');

  for (let i = 0; i < projects.length; i++) {
    projectsMenu.innerHTML += `<div class="project-name" id="${projects[i].id}">${projects[i].name}</div>`;
  }

  const projectNames = document.querySelectorAll('.project-name');

  for (let j = 0; j < projectNames.length; j++) {
    projectNames[j].addEventListener('click', () => {
      video.innerHTML = `<img src="${projects[j].preview}">`;
      details.innerHTML = `Nom: ${projects[j].name}<br/>Technologies utilisées: ${projects[j].language}<br/>Description: ${projects[j].description}`;
    });
  }

  // switch FR -> EN
  const switchToEN = document.querySelector('.switch-language');
  switchToEN.addEventListener('click', () => {
    window.location = '#projects';
  });
}
