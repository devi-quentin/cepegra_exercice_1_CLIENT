const menuItems = document.querySelectorAll("[data-connected]");
const logoutItem = document.querySelector("#logoutItem");
const fonction_name = document.querySelector("#fonction_name");
const user_name = document.querySelector("#user_name");

// BOUTON DECONNEXION
logoutItem.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.token = ""
  localStorage.function = ""
  location.reload()
});

// Par défaut le menu est masqué
menuItems.forEach((item) => {
  item.style.display = "none";
});

// On affiche le menu en fonction de l'utilisateur
if (localStorage.token != undefined) {
  menuItems.forEach((item) => {
    if (localStorage.function == 1) {
      if (item.dataset.connected == "secretaire") item.style.display = "block";
    }

    if (localStorage.function == 2) {
      if (item.dataset.connected == "stagiaire") item.style.display = "block";
    }

    if (item.dataset.connected == "") item.style.display = "block";
  });
}

// Affichage du nom et de la fonction de l'utilisateur
user_name.innerHTML = localStorage.username
fonction_name.innerHTML = (localStorage.function == 1) ? "Secrétaire" : "Stagiaire"

// Add active class to item menu
menuItems.forEach(item => {
  item.classList.remove("active");
  if (item.dataset.page == location.href.substring(location.href.lastIndexOf('/') + 1)) {
    item.classList.add("active");
  }
})