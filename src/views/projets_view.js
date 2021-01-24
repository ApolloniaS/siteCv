import { getContainers, displayCopyright, switchLanguage } from '../data/custom-function';
import { projects } from '../data/projects-data';
import { translations } from '../data/translated-data';

export function generateProjets() {
  getContainers(2, 'projetsContainer', 'projets');

  // squelette de la page projets FR
  function renderProjets(lang) {
    const projets = document.querySelector('.projets');
    projets.innerHTML = '';
    projets.innerHTML += `
  <div class="nav-arrow-up">
    <a href="#index">
      <i class="fas fa-arrow-up direction"></i>
    </a>
  </div>
  <div class="switch-language current-${lang}">${translations[0][lang]}</div>
  <div class="projects-main">
  <div class="projects-menu"></div>            
  <div class="video"></div>
  </div>
  <div class="details"></div>
  <div class="copyInfoBottom"></div>
  <div class="title-bottom">${translations[6][lang]}</div>
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
        video.innerHTML = `<img src="images/${projects[j].preview}"/>`;
        details.innerHTML = `${translations[7][lang]}: ${projects[j].name}<br/>${translations[8][lang]}: ${projects[j].language}<br/>Description: ${projects[j].description[lang]}`;
      });
    }
  }
  renderProjets('en');
  switchLanguage(renderProjets);
}
