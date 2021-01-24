import { getContainers, displayCopyright } from '../data/custom-function';

export function generateSkills() {
  getContainers(1, 'skillsContainer', 'skills');

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
        <i class="fab fa-html5 skills-icon"></i><span class="name-skill">&nbsp; HTML</span><br/>
        <i class="fab fa-css3-alt skills-icon"></i><span class="name-skill">&nbsp; CSS</span><br/>
        <i class="fas fa-code skills-icon"></i><span class="name-skill">&nbsp; jQuery</span><br/>
        <i class="fas fa-code skills-icon"></i><span class="name-skill">&nbsp; XML/XSLT</span><br/>
        <i class="fas fa-code skills-icon"></i><span class="name-skill">&nbsp; AJAX</span><br/>
        <i class="fas fa-file-alt skills-icon"></i><span class="name-skill">&nbsp; Responsive Design</span><br/>
        <i class="fas fa-file-alt skills-icon"></i><span class="name-skill">&nbsp; Normes W3C</span><br/>
        <i class="fab fa-wordpress skills-icon"></i><span class="name-skill">&nbsp; Wordpress</span><br/>
        <i class="fab fa-drupal skills-icon"></i><span class="name-skill">&nbsp; Drupal</span>
      </div>
    </div>
    
    <div class="skill-tab">
      <div class="subtab-title back">Back-end</div>
      <div class="subtab-content back">
        <i class="fab fa-python skills-icon"></i><span class="name-skill">&nbsp; Python</span><br/>
        <i class="fas fa-code skills-icon"></i><span class="name-skill">&nbsp; C#</span><br/>
        <i class="fab fa-java skills-icon"></i><span class="name-skill">&nbsp; Java</span><br/>
        <i class="fab fa-js-square skills-icon"></i><span class="name-skill">&nbsp; JavaScript</span><br/>
        <i class="fab fa-php skills-icon"></i><span class="name-skill">&nbsp; PHP</span><br/>
        <i class="fas fa-code skills-icon"></i><span class="name-skill">&nbsp; ASP.NET</span><br/>
        <i class="fab fa-symfony skills-icon"></i><span class="name-skill">&nbsp; Symfony</span><br/>
        <i class="fab fa-angular skills-icon"></i><span class="name-skill">&nbsp; Angular</span><br/>
        <i class="fab fa-node-js skills-icon"></i><span class="name-skill">&nbsp; Node JS</span><br/>
        <i class="fab fa-github skills-icon"></i><span class="name-skill">&nbsp; Github</span><br/>
        <i class="fas fa-server skills-icon"></i><span class="name-skill">&nbsp; IIS</span><br/>
        <i class="fas fa-server skills-icon"></i><span class="name-skill">&nbsp; Apache</span><br/>

        
        
        
      </div>
    </div>

    <div class="skill-tab">
      <div class="subtab-title DB">Databases<br/>Bases de données</div>
      <div class="subtab-content DB">
        <i class="fas fa-database skills-icon"></i><span class="name-skill">&nbsp; UML</span><br/>
        <i class="fas fa-database skills-icon"></i><span class="name-skill">&nbsp; SQL Language</span><br/>
        <i class="fas fa-database skills-icon"></i><span class="name-skill">&nbsp; Microsoft SQL Server</span><br/>
        <i class="fas fa-database skills-icon"></i><span class="name-skill">&nbsp; MySQL</span><br/>
        <i class="fas fa-database skills-icon"></i><span class="name-skill">&nbsp; phpMyAdmin</span>
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
