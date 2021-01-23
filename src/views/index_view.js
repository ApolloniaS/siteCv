import { getContainers } from '../data/custom-function';

export function generateIndex() {
  getContainers(1, 'contactContainer', 'index');

  // squelette de l'index
  const index = document.querySelector('.index');
  index.innerHTML += `
  <div class="left-part"></div>
  <div class="floating-box-middle"></div>
  <div class="right-part"></div>
  <div class="bottom-middle-arrow">
    <a href="#projets">
      <i class="fas fa-arrow-down direction"></i>
    </a>
  </div>
  <div class="top-middle-arrow">
    <a href="#parcours">
      <i class="fas fa-arrow-up direction"></i><br />
    </a>
  </div>
  `;

  // remplissage de la partie gauche
  const leftPart = document.querySelector('.left-part');
  leftPart.innerHTML += `

  <div class="left-middle-arrow">
    <a href="#skills">
      <i class="fas fa-arrow-left direction"></i><br />
      
    </a>
  </div>
  
  <div class="description">
    Hello and welcome!<br/>
    My name's Apollonia. I'm a former translator, now on a journey to the coding adventure.<br/>
    (After all, we could say that coding is like learning a new foreign language, don't you agree? ;))
  </div>
  `;

  // box au milieu
  const floatingBox = document.querySelector('.floating-box-middle');
  floatingBox.innerHTML += 'A.s__<br />Web Application Developer';

  // remplissage de la partie droite
  const rightPart = document.querySelector('.right-part');
  rightPart.innerHTML += `
  
  <div class="right-middle-arrow">
    <a href="#contact">
      <i class="fas fa-arrow-right direction"></i><br />
      
      </a>
  </div>
  
  <div class="description">
    Bonjour et bienvenue !<br/>
    Je suis Apollonia, ancienne traductrice, désormais en route pour l'aventure du code.<br/>
    (Après tout, coder, c'est un peu comme apprendre une nouvelle langue étrangère non ;) ?)
  </div>`;
}
