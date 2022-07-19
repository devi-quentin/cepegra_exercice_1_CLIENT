const formation = document.querySelector("#formation");
const searchStagiaires = document.querySelector("#searchStagiaires");
const msgForUser = document.querySelector("#msgForUser");
const listInscriptionsHTML = document.querySelector("#listInscriptions");
const searchResults = document.querySelector("#searchResults");
const addFormationForm = document.querySelector("#addFormationForm");
let listAllUsers = [];
let listAllInscriptions = [];
let newListAllInscriptions = [];
let id_formation = 0

// A - récupération de la liste des formations
fetch(urlApi + "formations")
  .then((response) => response.json())
  .then((response) => {
    response.data.forEach((e) => {
      formation.innerHTML += `<option value="${e.id}">${e.name} [${e.start_date}]</option>`;
    });
  });

// B - récupération de la liste des tous les users
fetch(urlApi + "users")
  .then((response) => response.json())
  .then((response) => {
    response.data.forEach((user) => {
      if (user.id_fonction == 2) {
        listAllUsers.push(user);
      }
    });
  });

// C - récupération de la liste stagiaires déjà inscrits
fetch(urlApi + "inscriptions")
  .then((response) => response.json())
  .then((response) => {
    response.data.forEach((user) => {
      listAllInscriptions.push(user);
    });
  });

// choix formation dans la liste
formation.addEventListener("change", (e) => {
  id_formation = e.target.value;

  generateListUsers(id_formation);
  generateListInscriptions(id_formation);
  renderSearchResults();
  renderListInscriptions(id_formation);
});

// Génération de la liste des users
const generateListUsers = (id_formation) => {
  // On parcours la liste actuel
  listAllUsers.forEach((user) => {
    user["inscrit"] = false;
    listAllInscriptions.forEach((stagiaire) => {
      if (user.id == stagiaire.id_user && stagiaire.formation_id == id_formation) {
        user["inscrit"] = true;
      }
    });
  });

  console.log(listAllUsers)
};

// Génération de la liste des users
const generateListInscriptions = (id_formation) => {
  // On parcours la liste actuel
  listAllInscriptions.forEach((inscrit) => {
  });

  // console.log(listAllInscriptions)
};

// Affichage de la liste des users
const renderSearchResults = (query = "") => {
  const s = query;
  let tmp = `<table><tbody>`;

  listAllUsers.forEach((user) => {
    if (user.inscrit == false) {
      if (
        user.name.toLowerCase().includes(s.toLowerCase()) ||
        user.email.toLowerCase().includes(s.toLowerCase()) ||
        user.firstname.toLowerCase().includes(s.toLowerCase())
      ) {
        tmp += `
            <tr>
                <td>${user.name}</td>
                <td>${user.firstname}</td>
                <td>${user.email}</td>
                <td><a href="#" class="btn addUser" data-userId="${user.id}" data-name="${user.name}" data-firstname="${user.firstname}" data-email="${user.email}">Ajouter</a></td></td>
            </tr>
        `;
      }
    }
  });

  tmp += `</tbody></table>`;

  searchResults.innerHTML = tmp;

  document.querySelectorAll(".addUser").forEach(btn => {
    btn.addEventListener("click", (e) => {
      
      listAllInscriptions.push({
        id_user: e.target.dataset.userid,
        formation_id: id_formation,
        name: e.target.dataset.name,
        firstname: e.target.dataset.firstname,
        email: e.target.dataset.email,
        new: true
      })

      listAllUsers.forEach(user => {
        if (user.id == e.target.dataset.userid) {
          user["inscrit"] = true
        }
      })

      renderListInscriptions(id_formation)
      renderSearchResults()
    })
  })
};

const renderListInscriptions = (id_formation) => {
  let tmp = `<h2>Utilisateur inscrit à cette formation</h2>`;
  tmp += `<table><tbody>`;

  listAllInscriptions.forEach((user) => {
    if (user.formation_id == id_formation) {
      tmp += `
          <tr>
              <td>${user.name}</td>
              <td>${user.firstname}</td>
              <td>${user.email}</td>
          </tr>
      `;
    }
  });

  tmp += `</tbody></table>`;

  listInscriptionsHTML.innerHTML = tmp;
};

// Recherche de stagiaires
searchStagiaires.addEventListener("input", (e) =>
  renderSearchResults(e.target.value)
);

addFormationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // On construit les données à envoyer a l'API
  let data = []
  listAllInscriptions.forEach((e) => {
    // On ajoute seulement les nouveaux stagiaires (pour éviter de creer des doublons)
    if (e.new) {
      data.push({
        id_user: e.id_user,
        id_formation: e.formation_id,
      })
    }    
  })

  fetch(urlApi + "inscriptions", {
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
        addFormationForm.reset()
      }
      msgForUser.innerHTML = response.message
    })
    .catch((error) => {console.log(error)});

})