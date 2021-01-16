export function displayCopyright(selector) {
  selector.innerHTML += '<hr /><div class="copyright">&copy;&nbsp;Apollonia Sorella - Web Application Developer Junior - 2021</div><hr />';
}

export function getContainers(idContainer, nameContainer, nameSection) {
  const containers = document.querySelectorAll('.container');
  nameContainer = containers[idContainer];
  nameContainer.innerHTML += `<section class="${nameSection}" id="${nameSection}"></section>`;
}
