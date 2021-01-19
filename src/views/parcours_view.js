import { experience } from '../data/background-data';
import { translations } from '../data/translated-data';
import { getContainers, displayCopyright, switchLanguage } from '../data/custom-function';

export function generateParcours() {
  getContainers(0, 'parcoursContainer', 'parcours');
  // squelette de la page parcours FR
  function renderParcours(lang) {
    const parcours = document.querySelector('.parcours');
    parcours.innerHTML = '';
    parcours.innerHTML += `
    <div class="copyInfoTop"></div>
    <div class="switch-language current-${lang}">${translations[0][lang]}</div>
    <div class="title-bottom">${translations[1][lang]}</div>
    <div class="timeline-container">
      <div class="timeline-area">
        <div class="line"></div>
      </div>
    </div>
    <div class="legend">
      <div class="txt-legend">${translations[2][lang]}</div>
      <div class="dot-box">
        <i class="fas fa-circle dot-xp"></i>${translations[3][lang]}
        <i class="fas fa-circle dot-study"></i>${translations[4][lang]}
      <div class="link-CV"><i class="far fa-file"></i>&nbsp; ${translations[5][lang]}</div>
      </div>
    </div>
    <div class="nav-arrow-down">
      <a href="#index"><i class="fas fa-arrow-down direction"></i></a>
    </div>
    `;

    const copyInfo = document.querySelector('.copyInfoTop');
    displayCopyright(copyInfo);

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
  renderParcours('en');

  switchLanguage(renderParcours);
}
