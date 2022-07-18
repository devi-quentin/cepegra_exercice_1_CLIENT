const formation = document.querySelector('#formation')
const searchStagiaires = document.querySelector('#searchStagiaires')
const msgForUser = document.querySelector('#msgForUser')
const tableUsersList = document.querySelector('#tableUsersList')
let listUsers = []
let listStagiaires = []

// récupération de la liste des formations
fetch(urlApi + "formations")
.then((response) => response.json())
.then((response) => {
    response.data.forEach((e) => {
        formation.innerHTML += `<option value="${e.id}">${e.name} [${e.start_date}]</option>`
    })
})

// récupération de la liste des tous les stagiaires
fetch(urlApi + "users")
.then((response) => response.json())
.then((response) => {
    response.data.forEach((user) => {
        if (user.id_fonction == 2) {
            listUsers.push(user)
        }
    })
})

// récupération de la liste stagiaires déjà inscrits
fetch(urlApi + "stagiaires")
.then((response) => response.json())
.then((response) => {
    response.data.forEach((user) => {
        listStagiaires.push(user)
    })

    console.log("id user dejà inscrit à une formations", listStagiaires)
})

// choix formation dans la liste
formation.addEventListener("change", e => {
    const id_formation = e.target.value

    generateListUsers(id_formation)
    renderListUsers()
})

// Génération de la liste des users
const generateListUsers = (id_formation) => {
    console.log("id formation", id_formation)
    // On parcours la liste actuel
    listUsers.forEach((user) => {
        user["inscrit"] = false
        listStagiaires.forEach((stagiaire) => {
            if (user.id == stagiaire.id_user && stagiaire.formation_id == id_formation) {
                user["inscrit"] = true
            }
        })
    })
}

// Affichage de la liste des users
const renderListUsers = (query = "") => {
    const s = query
    let tmp = `<table>
    <thead>
        <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Inscrire</th>
        </tr>
    </thead>
    <tbody>`
    
    listUsers.forEach((user) => {
        if (user.name.toLowerCase().includes(s.toLowerCase()) || user.email.toLowerCase().includes(s.toLowerCase()) || user.firstname.toLowerCase().includes(s.toLowerCase())){
            tmp += `
                <tr>
                    <td>${user.name}</td>
                    <td>${user.firstname}</td>
                    <td>${user.email}</td>
                    <td>${(user.inscrit) ? "<input type='checkbox' name='inscrit' value="+user.id+" checked>" : "<input type='checkbox' name='inscrit' value="+user.id+">"}</td>
                </tr>
            `
        }    
    })

    tmp += `</tbody></table>`

    tableUsersList.innerHTML = tmp

    // On écoute chaque bouton checkbox d'inscription
    document.querySelectorAll("input[name='inscrit']").forEach(i => {
        i.addEventListener("change", e => {
            // On sélection celles qui sont cochées
            document.querySelectorAll("input[name='inscrit']:checked").forEach(item => {
                console.log(item.value)
            })
        })
    })
}




// Recherche de stagiaires
searchStagiaires.addEventListener('input', e => renderListUsers(e.target.value))