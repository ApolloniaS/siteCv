export function generateParcours() {
  const containers = document.querySelectorAll('.container');
  const background = containers[1];
  background.innerHTML += '<section class="parcours" id="parcours">Parcours FR</section>';
}
