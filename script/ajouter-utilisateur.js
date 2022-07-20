const msgForUser = document.querySelector("#msgForUser");
const addUserForm = document.querySelector("#addUserForm");
const username = document.querySelector("#name");
const firstname = document.querySelector("#firstname");
const password = document.querySelector("#password");
const password_verif = document.querySelector("#password_verif");
const email = document.querySelector("#email");

addUserForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Vérification mdp indentique
  if (password.value === password_verif.value) {
    let data = {
      token: localStorage.token,
      name: username.value,
      firstname: firstname.value,
      password: password.value,
      email: email.value,
      id_fonction: document.querySelector('#id_function')
        .value,
    };

    fetch(urlApi + "users", {
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
            addUserForm.reset()
          }
        msgForUser.innerHTML = response.message
      })
      .catch((error) => {console.log(error)});
  } else {
    alert("Les mot de passe ne correspondent pas");
  }
});
