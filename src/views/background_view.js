export function generateBackground() {
  const containers = document.querySelectorAll('.container');
  const background = containers[0];
  background.innerHTML += '<section class="background" id="background">Test; not yet sorry</section>';
}
