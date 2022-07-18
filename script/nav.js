const menuItems = document.querySelectorAll("[data-connected]");
const logoutItem = document.querySelector("#logoutItem");
const fonction_name = document.querySelector("#fonction_name");

// DECONNEXION
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

// Afficha de la fonction de l'utilisateur
fonction_name.innerHTML = (localStorage.function == 1) ? "Secrétaire" : "Stagiaire"
