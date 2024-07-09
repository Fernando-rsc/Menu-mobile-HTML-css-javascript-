function toggleMenu() {
  var sideNav = document.getElementById('sideNav');
  if (sideNav.style.display === 'block') {
    sideNav.style.display = 'none'; // Fecha o menu
  } else {
    sideNav.style.display = 'block'; // Abre o menu
  }
}


function menuSection(sectionId) {
      var section = document.getElementById(sectionId);
      section.scrollIntoView({ behavior: 'smooth' });
      toggleMenu(); // Fecha o menu após o redirecionamento
    }
