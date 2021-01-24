import { getContainers } from '../data/custom-function';

export function generateIndex() {
  getContainers(1, 'contactContainer', 'index');

  // squelette de l'index
  const index = document.querySelector('.index');
  index.innerHTML += `
  <div class="left-part">
    <div class="left-middle-arrow">
      <a href="#skills">
        <i class="fas fa-arrow-left direction"></i><br />
      </a>
    </div>
    <span>Skills</span>
  </div>
  <div class="floating-box-middle">
    <img src="images/index-about.png" alt=""/>
    <img class="avatar" src="images/index-avatar.png" alt=""/>
  </div>
  <div class="right-part">
    <div class="right-middle-arrow">
      <a class="test" href="#contact">
        <i class="fas fa-arrow-right direction"></i><br />
      </a>
    </div>
    <span>Contact</span>
  </div>
  <div class="bottom-part">
  <div class="bottom-middle-arrow">
    <a href="#projets">
      <i class="fas fa-arrow-down direction"></i>
    </a>
  </div>
  <span>Projects / Projets</span>
  </div>
  <div class="top-part">
    <div class="top-middle-arrow">
      <a href="#parcours">
        <i class="fas fa-arrow-up direction"></i><br />
      </a>
    </div>
    <span>Background / Parcours</span>
  </div>
  `;
}
