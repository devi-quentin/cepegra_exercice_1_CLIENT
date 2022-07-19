const msgForUser = document.querySelector('#msgForUser')
const GE = document.querySelector('#GE')
const formGE = document.querySelector('#formGE')
const formation_id = document.querySelector('#formation_id')
const test = document.querySelector('.test')
let id_formations = []

// Charger les stagiaires inscrits
fetch(urlApi + "inscriptions").then((response) => {
    return response.json();
  }).then((response) => {    
    console.log(response)
    response.data.forEach(e => {
        if (e.id_user == localStorage.userid) {
            id_formations.push(e.formation_id)
        }
    });

    msgForUser.innerHTML = (id_formations.length > 0) ? "" : "Vous n'êtes inscrit à aucune formation"
  })

// Charger le nom et l'id des formation
fetch(urlApi + "formations").then((response) => {
    return response.json();
  }).then((response) => {
    response.data.forEach(e => {
        id_formations.forEach(i => {
            if (e.id == i) {
                formation_id.innerHTML += `<option value="${e.id_metier}">${e.name}</option>`
            }
        })
    });
    console.log(response)
  })

// Quand formation choisie
formation_id.addEventListener("change", () => {
    
    // On cache le SELECT
    formation_id.parentNode.style.display = "none"

    // On récupère les critères sur l'API
    fetch(urlApi + "criteres-evaluations/metier/" + formation_id.value).then((response) => {
        return response.json();
      }).then((response) => {
        // Si le metier n'as pas de savoirs faires, on stop
        if (response.data.length == 0) {
            msgForUser.innerHTML = "Aucune évaluation n'est disponible pour ce métier"
            return
        }

        let iTheme = 0
        response.data.forEach(e => {
            // On ajoute un fieldset par theme
            if (e.type == "theme") {
                iTheme++
                let fieldset = `<fieldset id=theme${iTheme}>
                    <legend>${e.label}</legend>
                    <p class="explication">${e.content}</p>
                </fieldset>`
                GE.innerHTML += fieldset
            }
            // On ajoute les reponses
            else {
                document.querySelector('#theme'+e.id_theme).innerHTML += `
                    <p class="reponse">
                        <input type="radio" name="theme${e.id_theme}_reponse" id="theme${e.id_theme}_reponse${e.id}" required>
                        <label for="theme${e.id_theme}_reponse${e.id}">${e.content}</label>
                    </p>
                `
            }
        })

        GE.innerHTML += "<input type='hidden' id='id_metier' value='"+formation_id.value+"'>"
        GE.innerHTML += "<button>Envoyer ma GE</button>"
      })
})

formGE.addEventListener('submit', e => {
    e.preventDefault()
    let data = {
        id_user: localStorage.userid,
        // id_metier: document.querySelector("#id_metier").value,
        // id_theme_1: document.querySelector("#id_metier").value,
        // id_option_1: document.querySelector("#id_metier").value
    }
})

