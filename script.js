const cursorBlue = document.querySelector('.cursor-blue');
const cursorTransparent = document.querySelector('.cursor-transparent');

// Variables pour le suivi fluide
let mouseX = 0, mouseY = 0; // Position de la souris
let transparentX = 0, transparentY = 0; // Position du rond transparent

// Écouteur pour le mouvement de la souris
document.addEventListener('mousemove', (e) => {
  mouseX = e.pageX; // Position X globale (prend en compte le défilement horizontal)
  mouseY = e.pageY; // Position Y globale (prend en compte le défilement vertical)

  // Met à jour immédiatement la position du rond bleu
  cursorBlue.style.left = `${mouseX}px`;
  cursorBlue.style.top = `${mouseY}px`;
});

// Fonction d'animation pour interpoler le mouvement
function animate() {
  // Suivi fluide : interpolation des positions du rond transparent
  transparentX += (mouseX - transparentX) * 0.1; // Ajuster la vitesse avec 0.1
  transparentY += (mouseY - transparentY) * 0.1;

  // Met à jour la position du rond transparent
  cursorTransparent.style.left = `${transparentX}px`;
  cursorTransparent.style.top = `${transparentY}px`;

  // Demande la prochaine image pour l'animation
  requestAnimationFrame(animate);
}

// Lancer l'animation
animate();
window.addEventListener('load', function () {
  const parallax = document.querySelector('.navbar');

  if (window.innerWidth > 425) {
    parallax.style.backgroundImage = "url('img/cyan-blue-abstract-5120x2880-20127.jpg')";
    parallax.style.backgroundAttachment = "fixed";
  } else {
    parallax.style.backgroundImage = "url('img/fnd-ecran.jpg')";
    parallax.style.backgroundSize = "cover";
    parallax.style.backgroundPosition = "center";
    parallax.style.backgroundAttachment = "fixed";
  }

  document.body.classList.add('loaded');
});

window.addEventListener('resize', () => {
  const parallax = document.querySelector('.navbar');
  
  if (window.innerWidth > 425) {
    parallax.style.backgroundImage = "url('img/cyan-blue-abstract-5120x2880-20127.jpg')";
    parallax.style.backgroundAttachment = "fixed";
  } else {
    parallax.style.backgroundImage = "url('img/fnd-ecran.jpg')";
    parallax.style.backgroundSize = "cover";
    parallax.style.backgroundPosition = "center";
    parallax.style.backgroundAttachment = "scroll";
  }
});

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const hamburger = document.querySelector('.hamburger');
  sidebar.classList.toggle('active');
  hamburger.classList.toggle('active');
}

const scrollLinks = document.querySelectorAll('.scroll-link');
  scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Empêche le comportement par défaut

      const targetId = link.getAttribute('href'); // Récupère l'ID cible
      const targetElement = document.querySelector(targetId);

      // Vérifie si l'élément cible existe avant de défiler
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      } else {
        console.error(`L'élément avec l'ID "${targetId}" n'existe pas.`);
      }
    });
  });

document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Empêche le rechargement de la page

  // Message de maintenance
  const maintenanceMessage = "Le formulaire de contact est actuellement en maintenance. Veuillez nous contacter directement via mon mail à Yaszemmouri@gmail.com.";

  // Simule l'envoi du formulaire et retourne une "erreur"
  console.error(maintenanceMessage); // Affiche le message dans la console
  alert(maintenanceMessage); // Alerte utilisateur
});

document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress");

  progressBars.forEach(bar => {
    const targetWidth = bar.getAttribute("data-progress");
    bar.style.width = `${targetWidth}%`;
  });
});

// Sélection des éléments
const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');
const modal = document.getElementById('modal');


function showDetails(category) {
  // Hide all panels
  const panels = document.querySelectorAll('.details-panel');
  panels.forEach(panel => panel.classList.remove('active'));

  // Show the selected panel
  const selectedPanel = document.getElementById(category);
  selectedPanel.classList.add('active');
}

