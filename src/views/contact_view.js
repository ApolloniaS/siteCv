import { getContainers, displayCopyright } from '../data/custom-function';

export function generateContact() {
  getContainers(2, 'contactContainer', 'contact');

  // squelette de l'index
  const contact = document.querySelector('.contact');
  contact.innerHTML += `
  <div class="message">
    Looking for an internship __ À la recherche d'un stage !
    </div>
    <div class="contact-form">
    <form id="contact-form" method="get" enctype="text/plain">
    <input
    type="text"
    class="input-name"
    id="input-name"
    value="Name/Nom"
    required
    /><br />
    <input
    type="text"
    class="input-email"
    id="input-email"
    value="Email"
    required
    /><br />
    <input
    type="text"
    class="input-object"
    id="input-object"
    value="Object/Objet"
    required
    /><br />
    <textarea id="user-message">Your message/Votre message</textarea><br/>
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
    </div>`;
  // displayCopyright(contact); ne se place pas correctement...
}
