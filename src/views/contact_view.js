import { getContainers, displayCopyright } from '../data/custom-function';

export function generateContact() {
  getContainers(2, 'contactContainer', 'contact');

  // squelette de l'index
  const contact = document.querySelector('.contact');
  contact.innerHTML += `
  <div class="message">
    Looking for an internship __ À la recherche d'un stage !
  </div>
  <div class="nav-arrow-left">
    <a href="#index">
      <i class="fas fa-arrow-left direction"></i>
    </a>
  </div>
  <div class="contact-form">
    <form id="contact-form" method="get" enctype="text/plain">
      <label>Name/Nom</label><br/>
      <input
      type="text"
      class="input-name"
      id="input-name"
      required
      /><br/>
      <label>Email</label><br />
      <input
      type="text"
      class="input-email"
      id="input-email"
      required
      /><br/>
      <label>Object/Objet</label><br />
      <input
      type="text"
      class="input-object"
      id="input-object"
      required
      /><br/>
      <label>Message</label><br />
      <textarea id="user-message"></textarea><br/>
      <button class="submit-btn" type="button">
      Send/Envoyer
      </button>
    </form>
  </div>
  <div class="links">
    <i class="fas fa-user link-icon"></i>&nbsp;&nbsp;&nbsp;&nbsp;SORELLA Apollonia<br />
    <i class="fas fa-envelope link-icon"></i>&nbsp;&nbsp;&nbsp;&nbsp;sorella.apollonia@hotmail.com<br />
    <i class="fab fa-github link-icon"></i>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/apollonias">Github</a><br />
    <i class="fab fa-linkedin link-icon"></i>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.linkedin.com/in/apollonia-sorella/">LinkedIn</a>
  </div>
  <div class="copyInfoBottom"></div>
  <div class="title-bottom">CONTACT__</div>
  `;

  const copyInfo = document.querySelectorAll('.copyInfoBottom');
  displayCopyright(copyInfo[0]);

  // fonction d'envoi du form de contact
  document.querySelector('.submit-btn').addEventListener('click', () => {
    Email.send({
      SecureToken: 'db616db8-1b4c-410d-aa5a-94ca2015ff1c',
      To: 'sorella.apollonia@hotmail.com',
      From: document.querySelector('.input-email').value,
      Subject: document.querySelector('.input-object').value,
      Body: document.querySelector('#user-message').value,
    }).then(
      (message) => alert(message),
    );
  });
}
