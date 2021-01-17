import { getContainers, displayCopyright } from '../data/custom-function';

export function generateSkills() {
  getContainers(2, 'skillsContainer', 'skills');

  // squelette de la page skills
  const skills = document.querySelector('.skills');
  skills.innerHTML += `
  <div class="nav-arrow-right">
    <a href="#index">
      <i class="fas fa-arrow-right direction"></i>
    </a>
  </div>
  <div class="copyInfoBottom"></div>
  <div class="title-bottom">SKILLS__</div>
  `;

  const copyInfo = document.querySelectorAll('.copyInfoBottom');
  displayCopyright(copyInfo[0]);
}
