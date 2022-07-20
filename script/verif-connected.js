const urlApi = "http://localhost/cepegra_exercice_1_api/";

// Check si connecté
fetch(urlApi + "check-connected", {
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
        token: (localStorage.token == undefined) ? "none" : localStorage.token
    }),
  })
.then((response) => response.json())
.then((response) => {
  console.log(response)
    if (response.code != 200) {
        window.location.href = "./"
    }
})
.catch((error) => console.log(error));