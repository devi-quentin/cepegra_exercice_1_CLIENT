const urlApi = "http://localhost/cepegra_exercice_1_api/";
const connexionForm = document.querySelector("#connexionForm");

// Check si connecté
// fetch(urlApi + "check-connected", {
//     headers: {
//       "content-type": "application/json",
//     },
//     method: "POST",
//     body: JSON.stringify({
//         token: (localStorage.token == undefined) ? "none" : localStorage.token
//     }),
//   })
// .then((response) => response.json())
// .then((response) => {
//     if (response.code == 200) {
//         if (response.function == 1) window.location.href = "ajouter-utilisateur"
//         if (response.function == 2) window.location.href = "evaluation"
//     }
// })
// .catch((error) => console.log(error));

// FORMULAIRE CONNEXION
connexionForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let loginData = {
    login: document.querySelector("#connexionEmail").value,
    password: document.querySelector("#connexionPassword").value,
  };

  fetch(urlApi + "auth", {
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(loginData),
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      switch (response.code) {
        case 200:
          localStorage.setItem("token", response.token);
          localStorage.setItem("function", response.function);
          if (response.function == 1) window.location.href = "ajouter-utilisateur"
          if (response.function == 2) window.location.href = "evaluation"
          break;
        case 403:
          alert(response.message);
          break;
      }
    })
    .catch((error) => console.log(error));
});
