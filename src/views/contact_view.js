import { getContainers, createCopyrightBottom } from '../data/custom-function';

export function generateContact() {
  getContainers(1, 'contactContainer', 'contact');

  // squelette de l'index
  const contact = document.querySelector('.contact');
  contact.innerHTML += `
  <div class="message">
    Looking for an internship __ À la recherche d'un stage&nbsp;!
  </div>
  <div class="nav-arrow-left">
    <a href="#index">
      <i class="fas fa-arrow-left direction"></i>
    </a>
  </div>
  <div class="contact-form">
    <form id="contact-form" action="https://formspree.io/f/mwkwyqql" method="POST">
    <label>Name/Nom</label><br/>
      <input
      type="text"
      class="input-name"
      name="name"
      required
      /><br/>
      <label>Email</label><br />
      <input
      type="text"
      class="input-email"
      name="_replyto"
      required
      /><br/>
      <label>Object/Objet</label><br />
      <input
      type="text"
      class="input-object"
      name="object"
      required
      /><br/>
      <label>Message</label><br />
      <textarea class="user-message" name="user-message"></textarea><br/>
      <button class="submit-btn" type="submit">
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

  createCopyrightBottom(1);
}
