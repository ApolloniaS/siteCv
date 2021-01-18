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
  <div class="tabs">
    <div class="skill-tab">
      <div class="subtab-title front">Front-end</div>
      <div class="subtab-content front">
        <i class="fab fa-html5 skills-icon"></i>&nbsp; HTML<br/>
        <i class="fab fa-css3-alt skills-icon"></i>&nbsp; CSS<br/>
        <i class="fas fa-question-circle skills-icon"></i>&nbsp; jQuery<br/>
        <i class="fas fa-question-circle skills-icon"></i>&nbsp; XML/XSLT<br/>
        <i class="fas fa-question-circle skills-icon"></i>&nbsp; AJAX<br/>
        <i class="fas fa-question-circle skills-icon"></i>&nbsp; Responsive Web Design<br/>
        <i class="fas fa-question-circle skills-icon"></i>&nbsp; Normes W3C<br/>
        <i class="fab fa-wordpress skills-icon"></i>&nbsp; Wordpress<br/>
        <i class="fab fa-drupal skills-icon"></i>&nbsp; Drupal
      </div>
    </div>
    
    <div class="skill-tab">
      <div class="subtab-title back">Back-end</div>
      <div class="subtab-content back">
        <i class="fab fa-python skills-icon"></i>&nbsp; Python<br/>
        <i class="fas fa-question-circle skills-icon"></i>&nbsp; C#<br/>
        <i class="fab fa-java skills-icon"></i>&nbsp; Java<br />
        <i class="fab fa-js-square skills-icon"></i>&nbsp; JavaScript<br/>
        <i class="fab fa-php skills-icon"></i>&nbsp; PHP<br/>
        <i class="fas fa-question-circle skills-icon"></i>&nbsp; ASP.NET<br/>
        <i class="fab fa-symfony skills-icon"></i>&nbsp; Symfony<br/>
        <i class="fab fa-angular skills-icon"></i>&nbsp; Angular JS<br/>
        <i class="fab fa-node-js skills-icon"></i>&nbsp; Node JS<br/>
        <i class="fab fa-github skills-icon"></i>&nbsp; Github<br/>
        <i class="fas fa-question-circle skills-icon"></i>&nbsp; IIS<br/>
        <i class="fas fa-question-circle skills-icon"></i>&nbsp; Apache
      </div>
    </div>

    <div class="skill-tab">
      <div class="subtab-title DB">Databases<br/>Bases de données</div>
      <div class="subtab-content DB">
        <i class="fas fa-question-circle skills-icon"></i>&nbsp; UML<br/>
        <i class="fas fa-question-circle skills-icon"></i>&nbsp; Langage SQL<br/>
        <i class="fas fa-question-circle skills-icon"></i>&nbsp; Microsoft SQL Server<br/>
        <i class="fas fa-question-circle skills-icon"></i>&nbsp; MySQL<br/>
        <i class="fas fa-question-circle skills-icon"></i>&nbsp; phpMyAdmin
      </div>
    </div>
            
    <div class="skill-tab">
      <div class="subtab-title others">Others<br/>Autres</div>
      <div class="subtab-content others">
        blabla others
      </div>
    </div>
  </div>
  <div class="copyInfoBottom"></div>
  <div class="title-bottom">SKILLS__</div>
  `;

  const copyInfo = document.querySelectorAll('.copyInfoBottom');
  displayCopyright(copyInfo[0]);
}
