import './style.scss';
import { generateParcours } from './src/views/parcours_view';
import { generateSkills } from './src/views/skills_view';
import { generateIndex } from './src/views/index_view';
import { generateContact } from './src/views/contact_view';
import { generateProjets } from './src/views/projets_view';

const site = document.querySelector('#site');

site.innerHTML += '<main></main>';
const main = document.querySelector('main');

// création des 5 containers principaux
for (let i = 0; i < 5; i++) {
  main.innerHTML += "<div class='container'></div>";
}

generateParcours();
generateSkills();
generateIndex();
generateContact();
generateProjets();

// page charge toujours sur 'index'
window.location = '#index';

// fonction pour le scroll de page
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      left: section.offsetLeft,
      behavior: 'smooth',
    });
  } else {
    console.error(`l'id ${id} n'existe pas, scroll impossible`);
  }
}
// scroll entre les sections

document.querySelector('a[href="#contact"]').addEventListener('click', (e) => {
  e.preventDefault();
  scrollToSection('contact');
});

document.querySelector('a[href="#skills"]').addEventListener('click', (e) => {
  e.preventDefault();
  scrollToSection('skills');
});

document.querySelector('a[href="#parcours"]').addEventListener('click', (e) => {
  e.preventDefault();
  scrollToSection('parcours');
});

document.querySelector('a[href="#projets"]').addEventListener('click', (e) => {
  e.preventDefault();
  scrollToSection('projets');
});

const indexes = document.querySelectorAll('a[href="#index"]');
for (const index of indexes) {
  index.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToSection('index');
  });
}
