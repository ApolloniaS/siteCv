import { experience } from '../data/background-data';
import { translations } from '../data/translated-data';
import { getContainers, displayCopyright } from '../data/custom-function';

export function generateParcours() {
  getContainers(1, 'parcoursContainer', 'parcours');
  // squelette de la page parcours FR
  const parcours = document.querySelector('.parcours');
  parcours.innerHTML += `
  <div class="copyInfoTop"></div>
  <div class="switch-language">English</div>
  <div class="title-bottom">PARCOURS__</div>
  <div class="timeline-container">
    <div class="timeline-area">
      <div class="line"></div>
    </div>
  </div>
  <div class="legend">
    <div class="txt-legend">${translations[0].fr}</div>
    <div class="dot-box">
      <i class="fas fa-circle dot-xp"></i>Expérience professionnelle
      <i class="fas fa-circle dot-study"></i>Études
    </div>
  </div>
  <div class="nav-arrow-down">
    <a href="#index"><i class="fas fa-arrow-down direction"></i></a>
  </div>
  `;

  const copyInfo = document.querySelectorAll('.copyInfoTop');
  displayCopyright(copyInfo[1]);

  // switch FR -> EN
  const switchLanguage = document.querySelectorAll('.switch-language');
  switchLanguage[1].addEventListener('click', () => {
    window.location = '#background';
  });

  // generation des points sur la ligne
  const timeline = document.querySelector('.timeline-area');
  for (let i = 0; i < experience.length; i++) {
    timeline.innerHTML += `
    <div class="dot">
      <span class="date ${experience[i].type === 'work' ? 'color-work' : 'color-study'}">${experience[i].date}</span>
      <div class="info-card">
        <img src="${experience[i].card}" alt=""/>
      </div>
    </div>
  `;
  }

  // ligne du tps
  const dots = document.querySelectorAll('.date');

  for (const dot of dots) {
    dot.addEventListener('mouseenter', () => {
      document.querySelectorAll('.active').forEach((el) => el.classList.remove('active'));
      dot.parentNode.classList.add('active');
    });
    /* dot.addEventListener('mouseleave', () => {
      document.querySelectorAll('.active').forEach((el) => el.classList.remove('active'));
    }); */
  }
}
