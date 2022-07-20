const msgForUser = document.querySelector('#msgForUser')
const GE = document.querySelector('#GE')
const formGE = document.querySelector('#formGE')
const formation_id = document.querySelector('#formation_id')
const test = document.querySelector('.test')
let id_formations = []

// Charger les stagiaires inscrits
fetch(urlApi + "inscriptions")
.then((response) => response.json())
.then((response) => {    
    console.log(response)
    response.data.forEach(e => {
        if (e.id_user == localStorage.userid) {
            id_formations.push(e.formation_id)
        }
    });

    msgForUser.innerHTML = (id_formations.length > 0) ? "" : "Vous n'êtes inscrit à aucune formation"

    // Charger le nom et l'id des formation
    fetch(urlApi + "formations")
    .then((response) => response.json())
    .then((response) => {
        response.data.forEach(e => {
            id_formations.forEach(i => {
                if (e.id == i) {
                    formation_id.innerHTML += `<option value="${e.id_metier}">${e.name}</option>`
                    console.log('aaa')
                }
            })
        });
        console.log(response)
    })
})



// Quand formation choisie
formation_id.addEventListener("change", () => {
    
    // On cache le SELECT
    formation_id.parentNode.parentNode.style.display = "none"

    // On récupère les critères sur l'API
    fetch(urlApi + "criteres-evaluations/metier/" + formation_id.value).then((response) => {
        return response.json();
      }).then((response) => {
        // Si le metier n'as pas de savoirs faires, on stop
        if (response.data.length == 0) {
            msgForUser.innerHTML = "Aucune évaluation n'est disponible pour ce métier"
            return
        }

        console.log(response.data)

        let iTheme = 0
        let iOption = 0
        response.data.forEach(e => {
            // On ajoute un fieldset par theme
            if (e.type == "theme") {
                iTheme++
                let fieldset = `
                <fieldset id=theme${iTheme}>
                    <input type="hidden" id="idTheme_${iTheme}" value="${e.id}">
                    <legend>${e.label}</legend>
                    <p class="explication">${e.content}</p>
                </fieldset>`
                GE.innerHTML += fieldset
            }
            // On ajoute les reponses
            else {
                iOption++
                document.querySelector('#theme'+e.id_theme).innerHTML += `
                    <p class="reponse">
                        <input type="radio" name="theme${e.id_theme}_reponse" id="theme${e.id_theme}_reponse${e.id}" value="${e.id}" required>
                        <label for="theme${e.id_theme}_reponse${e.id}">${e.content}</label>

                        
                        <input type="hidden" id="idOption_${iOption}" value="${e.id}">
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
        id_metier: document.querySelector("#id_metier").value,
        id_theme_1: document.querySelector("#idTheme_1").value,
        id_option_1: document.querySelector("[name='theme1_reponse']:checked").value,
        id_theme_2: document.querySelector("#idTheme_2").value,
        id_option_2: document.querySelector("[name='theme2_reponse']:checked").value,
        id_theme_3: document.querySelector("#idTheme_3").value,
        id_option_3: document.querySelector("[name='theme3_reponse']:checked").value,
        id_theme_4: document.querySelector("#idTheme_4").value,
        id_option_4: document.querySelector("[name='theme4_reponse']:checked").value,
        id_theme_5: document.querySelector("#idTheme_5").value,
        id_option_5: document.querySelector("[name='theme5_reponse']:checked").value,
        id_theme_6: document.querySelector("#idTheme_6").value,
        id_option_6: document.querySelector("[name='theme6_reponse']:checked").value
    }

    fetch(urlApi + "ge", {
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
                location.reload()
            }
        })
        .catch((error) => {
            console.log(error);
        });

    console.log(data)
})

