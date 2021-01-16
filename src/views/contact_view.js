export function generateContact() {
  const containers = document.querySelectorAll('.container');
  const background = containers[2];
  background.innerHTML += '<section class="contact" id="contact">contact</section>';
}
