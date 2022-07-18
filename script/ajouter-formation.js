const msgForUser = document.querySelector("#msgForUser");
const addFormationForm = document.querySelector("#addFormationForm");
const metier = document.querySelector("#metier");
const labelFormation = document.querySelector("#labelFormation");
const dateDebut = document.querySelector("#dateDebut");
const nomFormateur = document.querySelector("#nomFormateur");
const lieu = document.querySelector("#lieu");

// Récupération liste métiers
fetch(urlApi + "metiers").then((response) => {
  return response.json();
}).then((response) => {
  response.data.forEach(e => {
    metier.innerHTML += `<option value="${e.id}">${e.name}</option>`
  });
})

// Récupération liste des lieu
fetch(urlApi + "lieux").then((response) => {
  return response.json();
}).then((response) => {
  response.data.forEach(e => {
    lieu.innerHTML += `<option value="${e.id}">${e.name}</option>`
  });
})

// Envoi du formulaire
addFormationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Vérification mdp indentique
  let data = {
    token: localStorage.token,
    id_metier: metier.value,
    name: labelFormation.value,
    start_date: dateDebut.value,
    formateur: nomFormateur.value,
    id_lieu: lieu.value,
  };

  fetch(urlApi + "formations", {
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      if (response.code == 200) {
        addFormationForm.reset();
      }
      msgForUser.innerHTML = response.message;
    })
    .catch((error) => {
      console.log(error);
    });
});
